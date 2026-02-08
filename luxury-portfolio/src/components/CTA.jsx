export default function CTA() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Section Header */}
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
          Get In Touch
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6">
          Let&apos;s Build Something{" "}
          <span className="text-gradient">Extraordinary</span>
        </h2>
        <p className="max-w-2xl mx-auto text-text-secondary text-lg leading-relaxed mb-12">
          Have a project in mind or want to explore a collaboration? I&apos;m
          always open to discussing new opportunities and creative ideas.
        </p>

        {/* CTA Glass Card */}
        <div className="glass-card p-10 md:p-14 rounded-3xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Email Button */}
            <a
              href="lalpushpakumara575@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold rounded-2xl bg-primary text-white shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-light hover:-translate-y-1 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-xl">mail</span>
              lalpushpakumara575@gmail.com
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform duration-300">
                arrow_forward
              </span>
            </a>

            {/* Schedule Call */}
            <a
              href="#"
              className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold rounded-2xl glass-button text-text-primary hover:-translate-y-1 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-xl">
                calendar_today
              </span>
              Schedule a Call
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform duration-300">
                arrow_forward
              </span>
            </a>
          </div>

          {/* Subtle Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-surface-border to-transparent my-10" />

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-text-muted">
            <div className="flex items-center gap-2 text-sm">
              <span className="material-symbols-outlined text-base text-emerald-400">
                check_circle
              </span>
              Quick Response
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="material-symbols-outlined text-base text-emerald-400">
                check_circle
              </span>
              NDA Available
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="material-symbols-outlined text-base text-emerald-400">
                check_circle
              </span>
              Flexible Engagement
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
