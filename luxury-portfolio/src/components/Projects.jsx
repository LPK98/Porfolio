import { useState } from "react";
import { projects } from "../data/projects";
import ProjectGallery from "./ProjectGallery";

// Wording for a gallery trigger: a demo video, or a set of screens
const galleryAction = (gallery) =>
  gallery.every((item) => item.type === "video")
    ? { icon: "play_circle", label: "Watch demo" }
    : { icon: "photo_library", label: "View screens" };

export default function Projects() {
  const [galleryProject, setGalleryProject] = useState(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-700/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-text-secondary text-lg leading-relaxed">
            A curated selection of projects that showcase my expertise in
            creating impactful digital solutions.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card group rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                ) : (
                  /* No screenshot yet: show the project's icon instead */
                  <div className="w-full h-full flex items-center justify-center bg-primary/5 group-hover:scale-110 transition-transform duration-700">
                    <span className="material-symbols-outlined text-7xl text-primary/70">
                      {project.icon}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-lg glass-badge text-primary">
                  {project.category}
                </span>

                {/* Gallery trigger */}
                {project.gallery && (
                  <button
                    type="button"
                    onClick={() => setGalleryProject(project)}
                    aria-label={`${project.category}: ${galleryAction(project.gallery).label}`}
                    className="group/gallery absolute inset-0 flex items-center justify-center cursor-zoom-in focus:outline-none"
                  >
                    {project.gallery.length > 1 && (
                      <span className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-lg glass-badge text-text-primary">
                        <span className="material-symbols-outlined text-sm">
                          photo_library
                        </span>
                        {project.gallery.length}
                      </span>
                    )}
                    <span className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-[#0a0a0f]/70 backdrop-blur-md border border-white/10 text-text-primary opacity-0 group-hover:opacity-100 group-focus-visible/gallery:opacity-100 transition-opacity duration-500">
                      <span className="material-symbols-outlined text-lg">
                        {galleryAction(project.gallery).icon}
                      </span>
                      {galleryAction(project.gallery).label}
                    </span>
                  </button>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-white/5 text-text-muted border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(project.gallery || project.link) && (
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                    {project.gallery && (
                      <button
                        type="button"
                        onClick={() => setGalleryProject(project)}
                        className="inline-flex items-center gap-2 text-sm font-semibold capitalize text-primary hover:text-primary-light transition-colors duration-300 group/link"
                      >
                        {galleryAction(project.gallery).label}
                        <span className="material-symbols-outlined text-base group-hover/link:translate-x-1 transition-transform duration-300">
                          arrow_forward
                        </span>
                      </button>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors duration-300 group/link"
                      >
                        View Project
                        <span className="material-symbols-outlined text-base group-hover/link:translate-x-1 transition-transform duration-300">
                          arrow_forward
                        </span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {galleryProject && (
        <ProjectGallery
          project={galleryProject}
          onClose={() => setGalleryProject(null)}
        />
      )}
    </section>
  );
}
