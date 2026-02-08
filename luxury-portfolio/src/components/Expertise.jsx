import { expertiseItems } from "../data/expertise";

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-32 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6">
            Areas of <span className="text-gradient">Expertise</span>
          </h2>
          <p className="max-w-2xl mx-auto text-text-secondary text-lg leading-relaxed">
            Delivering end-to-end solutions with a focus on performance,
            scalability, and exceptional user experience.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseItems.map((item) => (
            <div
              key={item.title}
              className="glass-card group p-8 rounded-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500">
                <span className="material-symbols-outlined text-2xl text-primary">
                  {item.icon}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-white/5 text-text-muted border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
