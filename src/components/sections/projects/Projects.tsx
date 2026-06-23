import React from "react";
import ProjectsGrid from "./ProjectsGrid";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative py-30 px-15 bg-bg-2 ">
      <div className="section-label font-mono text-[10px] text-green tracking-[0.25em] uppercase mb-4 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-px before:bg-green">
        Projects
      </div>

      <h2 className="section-title text-[clamp(32px,4vw,52px)] font-black leading-[1.1] tracking-[-0.02em] mb-15">
        Engineering
        <br />
        <span className="text-green">That Ships</span>
      </h2>

      <ProjectsGrid />
    </section>
  );
};

export default Projects;
