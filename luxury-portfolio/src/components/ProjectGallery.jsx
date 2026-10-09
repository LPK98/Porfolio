import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Full-screen viewer for a project's `gallery` (screenshots and screen recordings).
// Rendered into <body> because the project cards use transform/backdrop-filter,
// which would otherwise trap a `position: fixed` overlay inside the card.
export default function ProjectGallery({ project, onClose }) {
  const [index, setIndex] = useState(0);
  const closeButtonRef = useRef(null);
  const touchStartX = useRef(null);
  const items = project.gallery;
  const current = items[index];

  const showPrev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const showNext = () => setIndex((i) => (i + 1) % items.length);

  // Keyboard controls, scroll lock, and focus handling while open
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      // A focused video uses the arrow keys to seek
      else if (e.target instanceof HTMLVideoElement) return;
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  const mediaClassName =
    "max-w-full max-h-full object-contain rounded-xl border border-white/10 shadow-2xl shadow-black/50 animate-fade-in";

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.category} gallery`}
      className="fixed inset-0 z-[100] flex flex-col bg-[#0a0a0f]/90 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between gap-4 px-4 sm:px-8 py-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            {project.category}
          </p>
          <p className="text-sm sm:text-base text-text-primary truncate">
            {current.label}
            {items.length > 1 && (
              <span className="text-text-muted">
                {" "}
                · {index + 1} / {items.length}
              </span>
            )}
          </p>
        </div>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="glass-button shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-text-primary transition-colors duration-300"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      {/* Current item (swipe left/right on touch screens) */}
      <div
        className="relative flex-1 min-h-0 flex items-center justify-center px-4 sm:px-20"
        onTouchStart={(e) => {
          // Dragging a video's timeline shouldn't count as a swipe
          touchStartX.current =
            e.target instanceof HTMLVideoElement ? null : e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const deltaX = e.changedTouches[0].clientX - touchStartX.current;
          if (deltaX > 50) showPrev();
          else if (deltaX < -50) showNext();
        }}
      >
        {current.type === "video" ? (
          <video
            key={current.src}
            src={current.src}
            aria-label={`${project.category} – ${current.label}`}
            className={mediaClassName}
            controls
            autoPlay
            muted
            playsInline
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <img
            key={current.src}
            src={current.src}
            alt={`${project.category} – ${current.label}`}
            className={mediaClassName}
            onClick={(e) => e.stopPropagation()}
          />
        )}

        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous"
              className="glass-button absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-text-primary transition-colors duration-300"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next"
              className="glass-button absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-text-primary transition-colors duration-300"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {items.length > 1 && (
        <div
          className="flex justify-center gap-2 sm:gap-3 px-4 py-4 sm:py-6 overflow-x-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {items.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${item.label}`}
              aria-current={i === index}
              className={`relative shrink-0 w-20 sm:w-28 aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                i === index
                  ? "border-primary opacity-100"
                  : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              {item.type === "video" ? (
                <>
                  {/* #t=0.1 makes the browser show an early frame as the preview */}
                  <video
                    src={`${item.src}#t=0.1`}
                    className="w-full h-full object-cover"
                    preload="metadata"
                    muted
                    playsInline
                    tabIndex={-1}
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <span className="material-symbols-outlined text-2xl text-white">
                      play_circle
                    </span>
                  </span>
                </>
              ) : (
                <img
                  src={item.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>,
    document.body
  );
}
