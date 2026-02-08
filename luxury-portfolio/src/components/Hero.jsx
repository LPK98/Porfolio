import { stats } from "../data/stats";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Ambient Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-700/10 rounded-full blur-[100px] animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-800/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-badge mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
            <span className="text-xs font-medium text-text-secondary tracking-wide uppercase">
              Available for new projects
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight text-text-primary mb-6 animate-fade-in-up-delay-1">
          Crafting Digital
          <br />
          <span className="text-gradient">Experiences</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-text-secondary leading-relaxed mb-10 animate-fade-in-up-delay-2">
          UI/UX designer and frontend developer crafting intuitive digital experiences, supported by strong visual design and photography that elevate brand storytelling.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up-delay-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-2xl bg-primary text-white shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-light hover:-translate-y-1 transition-all duration-300"
          >
            View Projects
            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform duration-300">
              arrow_forward
            </span>
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-2xl glass-button text-text-primary hover:-translate-y-1 transition-all duration-300"
          >
            Get In Touch
            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform duration-300">
              mail
            </span>
          </a>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-stat p-6 rounded-2xl text-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-text-muted uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  );
}
