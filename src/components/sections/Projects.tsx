import React, { useState } from "react";

interface Project {
  id: number;
  num: string;
  tag: string;
  name: string;
  description: string;
  tech: string[];
  links: { type: string; url: string }[];
  featured?: boolean;
}

const Projects: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const projects: Project[] = [
    {
      id: 1,
      num: "001",
      tag: "Water · IoT · Real-Time",
      name: "WCAM",
      description:
        "Water Community Administration & Monitoring — full-stack IoT platform pairing ESP32 microcontrollers with dual YF-S201 flow sensors for rural Rwanda. A custom leak-detection algorithm flags anomalies by comparing inlet vs. outlet flow deltas in real time.",
      tech: [
        "ESP32",
        "YF-S201",
        "Arduino C++",
        "Node.js",
        "Socket.io",
        "MySQL",
        "React",
        "JWT",
      ],
      links: [
        { type: "Live Demo", url: "#" },
        {
          type: "Source Code",
          url: "https://github.com/9-Call-Company/Water-monitoring-system-Frontend",
        },
      ],
      featured: true,
    },
    // {
    //   id: 2,
    //   num: "002",
    //   tag: "Health Tech · AI",
    //   name: "Suzuma App",
    //   description:
    //     "AI-driven healthcare platform connecting patients to providers across East Africa. Intelligent symptom triage, provider matching, and unified health records for low-bandwidth environments.",
    //   tech: ["React", "Node.js", "Python ML", "MySQL"],
    //   links: [
    //     { type: "Live Demo", url: "#" },
    //     { type: "Source", url: "#" },
    //   ],
    //   featured: true,
    // },
    {
      id: 2,
      num: "002",
      tag: "Education · Career",
      name: "ElevateLink",
      description:
        "Mentorship platform matching Rwandan graduates with industry professionals. Includes session scheduling, progress tracking, and a curated resource library.",
      tech: ["React", "Node.js", "MySQL"],
      links: [
        {
          type: "Source",
          url: "https://github.com/regis-mucyo/Youth-Platform-Frontend",
        },
      ],
    },
    {
      id: 3,
      num: "003",
      tag: "FinTech · Banking",
      name: "Kinini Sacco",
      description:
        "Digital banking management for community savings cooperatives. Member accounts, loan lifecycle tracking, and automated transaction records across multiple branches.",
      tech: ["Java", "MySQL", "JavaScript"],
      links: [
        {
          type: "Source",
          url: "https://github.com/mugisha12john/kinini-sacco-backend-using-java-learning",
        },
      ],
    },
  ];

  return (
    <section id="projects" className="relative py-[120px] px-[60px] bg-bg-2">
      <div className="section-label font-mono text-[10px] text-green tracking-[0.25em] uppercase mb-4 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-px before:bg-green">
        Projects
      </div>

      <h2 className="section-title text-[clamp(32px,4vw,52px)] font-black leading-[1.1] tracking-[-0.02em] mb-[60px]">
        Engineering
        <br />
        <span className="text-green">That Ships</span>
      </h2>

      <div className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-px bg-[rgba(127,238,100,0.12)]">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-card bg-bg-3 p-10 relative overflow-hidden transition-all duration-300 cursor-none hover:bg-bg-4 ${
              project.featured
                ? "lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-15"
                : ""
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
            {/* Hover effect for non-featured cards */}
            {!project.featured && (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),rgba(127,238,100,0.15)_0%,transparent_60%)] opacity-0 transition-opacity duration-300 hover:opacity-100" />
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

              <h3 className="project-name text-[26px] font-black tracking-[-0.02em] mb-3">
                {project.name}
              </h3>

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

              <div className="project-links flex gap-4">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="proj-link font-mono text-[10px] text-green no-underline tracking-[0.1em] uppercase flex items-center gap-1.5 border-b border-[rgba(127,238,100,0.3)] pb-0.5 transition-all hover:text-white hover:border-white"
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
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
