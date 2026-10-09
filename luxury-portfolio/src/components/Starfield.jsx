import { useEffect, useRef } from "react";

// Mostly white stars, some in the site's blue family, a rare warm one.
const COLORS = [
  { rgb: "255, 255, 255", weight: 0.62 },
  { rgb: "191, 219, 254", weight: 0.22 },
  { rgb: "96, 165, 250", weight: 0.11 },
  { rgb: "253, 230, 138", weight: 0.05 },
];

// Far to near: nearer stars are bigger, brighter, rarer and turn faster (parallax).
// bandDensity adds extra stars packed along the Milky Way band.
const LAYERS = [
  { density: 0.00016, bandDensity: 0.00011, size: [0.5, 1.1], alpha: [0.25, 0.65], spin: 0.6 },
  { density: 0.00006, size: [0.9, 1.6], alpha: [0.45, 0.9], spin: 1 },
  { density: 0.00002, size: [1.2, 2.2], alpha: [0.7, 1], spin: 1.6, glow: true },
];

// Milky Way band: a diagonal strip through the centre of the sky.
const BAND_ANGLE = -0.45; // radians
const BAND_WIDTH = 0.11; // fraction of the sky radius
const BAND_TINTS = ["59, 130, 246", "99, 102, 241", "147, 197, 253"];
const BAND_GLOW_SIZE = 1024;

const SPIN_PER_SECOND = 0.004; // radians
const SPIN_PER_SCROLL_PX = 0.00005; // radians
const MAX_STARS = 1800;
const MAX_PIXEL_RATIO = 2;

const rand = (min, max) => min + Math.random() * (max - min);
// Cheap bell curve in roughly [-1.5, 1.5], centred on 0.
const bell = () => Math.random() + Math.random() + Math.random() - 1.5;

function bandPoint(radius) {
  const along = rand(-radius, radius);
  const across = bell() * radius * BAND_WIDTH;
  const cos = Math.cos(BAND_ANGLE);
  const sin = Math.sin(BAND_ANGLE);
  return [along * cos - across * sin, along * sin + across * cos];
}

// Soft glow along the band, drawn once and scaled up each frame.
function makeBandGlow() {
  const blobs = document.createElement("canvas");
  blobs.width = blobs.height = BAND_GLOW_SIZE;
  const blobCtx = blobs.getContext("2d");
  const half = BAND_GLOW_SIZE / 2;
  for (let i = 0; i < 18; i++) {
    const [x, y] = bandPoint(half * 0.95);
    const r = rand(0.12, 0.28) * half;
    const rgb = BAND_TINTS[i % BAND_TINTS.length];
    const gradient = blobCtx.createRadialGradient(half + x, half + y, 0, half + x, half + y, r);
    gradient.addColorStop(0, `rgba(${rgb}, ${rand(0.025, 0.06)})`);
    gradient.addColorStop(1, `rgba(${rgb}, 0)`);
    blobCtx.fillStyle = gradient;
    blobCtx.fillRect(0, 0, BAND_GLOW_SIZE, BAND_GLOW_SIZE);
  }

  // Blurring smooths out the gradient dithering, which would otherwise show as a dot grid once scaled up.
  const glow = document.createElement("canvas");
  glow.width = glow.height = BAND_GLOW_SIZE;
  const ctx = glow.getContext("2d");
  ctx.filter = "blur(6px)";
  ctx.drawImage(blobs, 0, 0);
  return glow;
}

function pickColorIndex() {
  let roll = Math.random();
  for (let i = 0; i < COLORS.length; i++) {
    roll -= COLORS[i].weight;
    if (roll <= 0) return i;
  }
  return 0;
}

function makeGlowSprite(rgb) {
  const sprite = document.createElement("canvas");
  sprite.width = sprite.height = 64;
  const ctx = sprite.getContext("2d");
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, `rgba(${rgb}, 1)`);
  gradient.addColorStop(0.12, `rgba(${rgb}, 0.85)`);
  gradient.addColorStop(0.35, `rgba(${rgb}, 0.18)`);
  gradient.addColorStop(1, `rgba(${rgb}, 0)`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);
  return sprite;
}

// The sky radius: a disc around the viewport centre that covers the corners at any rotation.
const skyRadius = (width, height) => Math.hypot(width, height) / 2 + 24;

function createLayers(radius) {
  const area = Math.PI * radius * radius;
  const totalDensity = LAYERS.reduce(
    (sum, layer) => sum + layer.density + (layer.bandDensity || 0),
    0,
  );
  const scale = Math.min(1, MAX_STARS / (area * totalDensity));

  return LAYERS.map((layer) => {
    const makeStar = ([x, y]) => ({
      x,
      y,
      size: rand(...layer.size),
      alpha: rand(...layer.alpha),
      twinkleSpeed: rand(0.6, 2.2),
      phase: Math.random() * Math.PI * 2,
      color: pickColorIndex(),
    });
    const scatterPoint = () => {
      const r = radius * Math.sqrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      return [r * Math.cos(theta), r * Math.sin(theta)];
    };

    const count = Math.round(area * layer.density * scale);
    const bandCount = Math.round(area * (layer.bandDensity || 0) * scale);
    const stars = [
      ...Array.from({ length: count }, () => makeStar(scatterPoint())),
      ...Array.from({ length: bandCount }, () => makeStar(bandPoint(radius))),
    ];
    // Grouping by colour keeps fillStyle changes to a minimum while drawing.
    stars.sort((a, b) => a.color - b.color);
    return { ...layer, stars };
  });
}

function createShootingStar(width, height) {
  const angle = rand(2.2, 2.6); // heading down and to the left
  return {
    x: rand(width * 0.3, width * 1.05),
    y: rand(-height * 0.05, height * 0.35),
    dx: Math.cos(angle),
    dy: Math.sin(angle),
    speed: rand(700, 1000),
    length: rand(140, 220),
    life: rand(0.8, 1.2),
    age: 0,
  };
}

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fills = COLORS.map(({ rgb }) => `rgb(${rgb})`);
    const sprites = COLORS.map(({ rgb }) => makeGlowSprite(rgb));
    const bandGlow = makeBandGlow();

    let width = 0;
    let height = 0;
    let radius = 0;
    let layers = [];
    let spin = 0;
    let scrollTurn = window.scrollY;
    let shootingStar = null;
    let nextShootingStar = rand(3, 6);
    let rafId = 0;
    let lastTime = 0;

    function drawShootingStar() {
      const { x, y, dx, dy, speed, length, life, age } = shootingStar;
      const fade = Math.sin(Math.PI * (age / life));
      const headX = x + dx * speed * age;
      const headY = y + dy * speed * age;
      const tailX = headX - dx * length * fade;
      const tailY = headY - dy * length * fade;

      const tail = ctx.createLinearGradient(headX, headY, tailX, tailY);
      tail.addColorStop(0, "rgba(255, 255, 255, 1)");
      tail.addColorStop(0.25, "rgba(191, 219, 254, 0.5)");
      tail.addColorStop(1, "rgba(96, 165, 250, 0)");

      ctx.globalAlpha = fade;
      ctx.strokeStyle = tail;
      ctx.lineWidth = 1.4;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(headX, headY);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();
      ctx.drawImage(sprites[0], headX - 7, headY - 7, 14, 14);
    }

    function draw(time, twinkle) {
      const cx = width / 2;
      const cy = height / 2;
      const turn = spin + scrollTurn * SPIN_PER_SCROLL_PX;
      ctx.clearRect(0, 0, width, height);

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(turn * LAYERS[0].spin);
      ctx.drawImage(bandGlow, -radius, -radius, radius * 2, radius * 2);
      ctx.restore();

      for (const layer of layers) {
        const angle = turn * layer.spin;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        let fillColor = -1;

        for (const star of layer.stars) {
          const x = cx + star.x * cos - star.y * sin;
          const y = cy + star.x * sin + star.y * cos;
          if (x < -8 || y < -8 || x > width + 8 || y > height + 8) continue;

          const flicker = twinkle
            ? 0.7 + 0.3 * Math.sin(time * star.twinkleSpeed + star.phase)
            : 1;
          ctx.globalAlpha = star.alpha * flicker;

          if (layer.glow) {
            const size = star.size * 7;
            ctx.drawImage(sprites[star.color], x - size / 2, y - size / 2, size, size);
          } else {
            if (star.color !== fillColor) {
              fillColor = star.color;
              ctx.fillStyle = fills[fillColor];
            }
            ctx.fillRect(x - star.size / 2, y - star.size / 2, star.size, star.size);
          }
        }
      }

      if (shootingStar) drawShootingStar();
      ctx.globalAlpha = 1;
    }

    function frame(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      spin += SPIN_PER_SECOND * dt;
      scrollTurn += (window.scrollY - scrollTurn) * Math.min(1, dt * 5);

      if (shootingStar) {
        shootingStar.age += dt;
        if (shootingStar.age >= shootingStar.life) {
          shootingStar = null;
          nextShootingStar = rand(7, 15);
        }
      } else {
        nextShootingStar -= dt;
        if (nextShootingStar <= 0) shootingStar = createShootingStar(width, height);
      }

      draw(now / 1000, true);
      rafId = requestAnimationFrame(frame);
    }

    function start() {
      cancelAnimationFrame(rafId);
      if (motionQuery.matches) {
        shootingStar = null;
        draw(0, false);
      } else {
        lastTime = performance.now();
        rafId = requestAnimationFrame(frame);
      }
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === width && rect.height === height) return;
      width = rect.width;
      height = rect.height;
      const ratio = Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      radius = skyRadius(width, height);
      layers = createLayers(radius);
      if (motionQuery.matches) draw(0, false);
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    motionQuery.addEventListener("change", start);
    resize();
    start();

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      motionQuery.removeEventListener("change", start);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed top-0 left-0 w-full h-screen -z-10 pointer-events-none"
    />
  );
}
