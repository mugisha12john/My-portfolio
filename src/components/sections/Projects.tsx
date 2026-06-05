import React, { useState } from "react";
import projectsData, {
  projects,
  tabs,
  previewProjectIds,
} from "./projectsData";

interface Project {
  id: number;
  num: string;
  tag: string;
  name: string;
  category: "Education" | "Client" | "Self" | "Hackathon";
  image: string;
  description: string;
  tech: string[];
  links: { type: string; url: string }[];
  featured?: boolean;
  access?: "private";
}

const Projects: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<
    "All" | "Education" | "Client" | "Self" | "Hackathon"
  >("All");
  const [showAll, setShowAll] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleShowAll = () => setShowAll(true);
  const handleShowLess = () => {
    setShowAll(false);
    setActiveTab("All");
  };

  // use imported data
  // projects array is now maintained in projectsData.ts

  // tabs imported from projectsData.ts

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const previewProjects = projects.filter((project) =>
    previewProjectIds.has(project.id),
  );

  const displayedProjects = showAll ? filteredProjects : previewProjects;

  return (
    <section id="projects" className="relative py-30 px-15 bg-bg-2">
      <div className="section-label font-mono text-[10px] text-green tracking-[0.25em] uppercase mb-4 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-px before:bg-green">
        Projects
      </div>

      <h2 className="section-title text-[clamp(32px,4vw,52px)] font-black leading-[1.1] tracking-[-0.02em] mb-15">
        Engineering
        <br />
        <span className="text-green">That Ships</span>
      </h2>

      {showAll && (
        <div className="projects-tabs flex flex-wrap items-center gap-2 mb-8">
          <span className="font-mono text-[10px] text-text-muted tracking-[0.2em] uppercase mr-2">
            Filter
          </span>
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveTab(tab.value)}
              className={`font-mono text-[10px] tracking-[0.12em] uppercase px-4 py-2 border transition-all ${
                activeTab === tab.value
                  ? "bg-green text-bg border-green"
                  : "text-text-muted border-[rgba(127,238,100,0.2)] hover:border-green hover:text-green"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      <div className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-px bg-[rgba(127,238,100,0.12)]">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            className={`project-card bg-bg-3 p-10 relative overflow-hidden transition-all duration-300 cursor-none hover:bg-bg-4 ${
              project.featured ? "lg:col-span-2" : ""
            }`}
            onMouseMove={handleMouseMove}
            style={
              project.featured
                ? {}
                : ({
                    "--mx": `${mousePosition.x}%`,
                    "--my": `${mousePosition.y}%`,
                  } as React.CSSProperties)
            }
          >
            {!project.featured && (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),rgba(127,238,100,0.15)_0%,transparent_60%)] opacity-0 transition-opacity duration-300 hover:opacity-100 pointer-events-none" />
            )}

            {project.featured && (
              <div className="featured-badge absolute top-8 right-8 font-mono text-[9px] text-bg bg-green px-3 py-1 tracking-[0.12em] uppercase">
                Featured
              </div>
            )}

            <div className={project.featured ? "lg:col-span-1" : ""}>
              <div className="project-num font-mono text-[11px] text-text-muted tracking-[0.15em] mb-4">
                {project.num}
              </div>

              <div className="project-tag inline-block font-mono text-[9px] text-green border border-[rgba(127,238,100,0.3)] px-2.5 py-1 tracking-[0.12em] uppercase mb-3.5">
                {project.tag}
              </div>

              {project.access === "private" && (
                <div className="inline-block font-mono text-[9px] text-text-muted border border-[rgba(127,238,100,0.2)] px-2.5 py-1 tracking-[0.12em] uppercase mb-3.5 ml-2">
                  Private
                </div>
              )}

              <h3 className="project-name text-[26px] font-black tracking-[-0.02em] mb-3">
                {project.name}
              </h3>

              <div className="project-image mb-4 w-125">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="   object-cover border border-[rgba(127,238,100,0.12)] rounded-sm"
                />
              </div>

              <p className="project-desc font-mono text-[12px] text-text-dim leading-[1.8] mb-5">
                {project.description}
              </p>

              <div className="project-tech flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="tech-pill font-mono text-[10px] text-text-muted border border-[rgba(127,238,100,0.12)] px-2.5 py-1 tracking-[0.08em]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links flex gap-4 relative z-10">
                {project.links.map((link, index) => {
                  const isExternal = link.url.startsWith("http");
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="proj-link font-mono text-[10px] text-green no-underline tracking-widest uppercase flex items-center gap-1.5 border-b border-[rgba(127,238,100,0.3)] pb-0.5 transition-all hover:text-white hover:border-white cursor-pointer"
                    >
                      {link.type}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        {!showAll ? (
          <button
            type="button"
            onClick={handleShowAll}
            className="font-mono text-[11px] text-bg bg-green px-6 py-3 tracking-[0.12em] uppercase transition-all hover:opacity-90"
          >
            View All Projects
          </button>
        ) : (
          <button
            type="button"
            onClick={handleShowLess}
            className="font-mono text-[11px] text-text-muted border border-[rgba(127,238,100,0.2)] px-6 py-3 tracking-[0.12em] uppercase transition-all hover:border-green hover:text-green"
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
