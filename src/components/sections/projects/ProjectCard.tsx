import React from "react";
import type { Project } from "../../data/projectsData";

type Props = {
  project: Project;
  mousePosition: { x: number; y: number };
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const ProjectCard: React.FC<Props> = ({
  project,
  mousePosition,
  onMouseMove,
}) => {
  return (
    <div
      key={project.id}
      className={` bg-bg-3 p-10 relative overflow-hidden transition-all duration-300 cursor-none hover:bg-bg-4 `}
      aria-label={`Project ${project.name}`}
      onMouseMove={onMouseMove}
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

        <div className="mb-2 w-full">
          <div className="w-full aspect-3/2 md:aspect-video overflow-hidden rounded-sm border border-[rgba(127,238,100,0.12)]">
            <img
              src={project.image}
              alt={`${project.name} preview`}
              className="w-full h-full  block"
            />
          </div>
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
  );
};

export default ProjectCard;
