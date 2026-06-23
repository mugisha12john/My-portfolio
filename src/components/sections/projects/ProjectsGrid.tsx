import React, { useState } from "react";
import {
  projects,
  tabs,
  previewProjectIds,
  type Project,
} from "../../data/projectsData";
import ProjectCard from "./ProjectCard";

const ProjectsGrid: React.FC = () => {
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

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);
  const previewProjects = projects.filter((p) => previewProjectIds.has(p.id));
  const displayedProjects = showAll ? filteredProjects : previewProjects;

  return (
    <>
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
              className={`font-mono text-[10px] tracking-[0.12em] uppercase px-4 py-2 border transition-all ${activeTab === tab.value ? "bg-green text-bg border-green" : "text-text-muted border-[rgba(127,238,100,0.2)] hover:border-green hover:text-green"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      <div className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-px bg-[rgba(127,238,100,0.12)]">
        {displayedProjects.map((project: Project) => (
          <ProjectCard
            key={project.id}
            project={project}
            mousePosition={mousePosition}
            onMouseMove={handleMouseMove}
          />
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
    </>
  );
};

export default ProjectsGrid;
