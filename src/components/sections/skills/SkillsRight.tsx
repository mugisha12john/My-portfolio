import React from "react";

const toolsAndPlatforms = [
  "Git / GitHub",
  "Socket.io",
  "REST APIs",
  "Postman",
  "Figma",
  "Linux",
  "Windows Server",
  "Arduino IDE",
  "Vercel / Netlify",
];

const softSkills = [
  {
    label: "Cross-functional team leadership",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Technical documentation & system design",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    label: "Rapid prototyping & problem solving",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    label: "Multilingual: Kinyarwanda / French / English",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

const SkillsRight: React.FC = () => (
  <div className="skills-right grid gap-8">
    <div className="skills-card bg-bg-3 border border-[rgba(127,238,100,0.12)] p-6">
      <h3 className="font-mono text-[10px] text-text-muted tracking-[0.2em] uppercase mb-4">
        // Tools & Platforms
      </h3>
      <div className="flex flex-wrap gap-2">
        {toolsAndPlatforms.map((tool) => (
          <span
            key={tool}
            className="font-mono text-[10px] text-text-muted border border-[rgba(127,238,100,0.12)] px-3 py-1 tracking-[0.08em]"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>

    <div className="skills-card bg-bg-3 border border-[rgba(127,238,100,0.12)] p-6">
      <h3 className="font-mono text-[10px] text-text-muted tracking-[0.2em] uppercase mb-4">
        // Soft Skills
      </h3>
      <div className="flex flex-col gap-3">
        {softSkills.map((skill) => (
          <div
            key={skill.label}
            className="flex items-start gap-3 font-mono text-[12px] text-text-dim"
          >
            <span className="text-green mt-0.5">{skill.icon}</span>
            <span>{skill.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SkillsRight;
