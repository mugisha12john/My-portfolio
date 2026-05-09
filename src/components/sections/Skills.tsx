import React, { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillGroup {
  category: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set());
  const skillRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const skillGroups: SkillGroup[] = [
    {
      category: "// Primary Stack",
      skills: [
        { name: "JavaScript / TypeScript", level: 95 },
        { name: "React / Next.js", level: 88 },
        { name: "Node.js / Express", level: 85 },
        { name: "MySQL / Databases", level: 82 },
        { name: "IoT / ESP32 / C++", level: 76 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      category: "// Also Worked With",
      skills: [
        { name: "PHP", level: 70 },
        { name: "Python", level: 60 },
        { name: "Java", level: 55 },
      ],
    },
  ];

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute("data-skill");
            if (skillName) {
              setVisibleSkills((prev) => new Set(prev).add(skillName));
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    Object.values(skillRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="relative py-30 px-15 bg-bg-2">
      <div className="section-label font-mono text-[10px] text-green tracking-[0.25em] uppercase mb-4 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-px before:bg-green">
        Skills
      </div>

      <h2 className="section-title text-[clamp(32px,4vw,52px)] font-black leading-[1.1] tracking-[-0.02em] mb-15">
        Technical
        <br />
        <span className="text-green">Proficiency</span>
      </h2>

      <div className="skills-layout grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="skills-left">
          {skillGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="skill-group mb-9">
              <h3 className="skill-group-title font-mono text-[10px] text-text-muted tracking-[0.2em] uppercase mb-4.5">
                {group.category}
              </h3>

              {group.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-row mb-3.5">
                  <div className="skill-header flex justify-between mb-1.5">
                    <span className="skill-name font-mono text-[12px] text-text">
                      {skill.name}
                    </span>
                    <span className="skill-pct font-mono text-[11px] text-green">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="skill-track h-0.5 bg-[rgba(127,238,100,0.12)] relative">
                    <div
                      ref={(el: HTMLDivElement | null) => {
                        skillRefs.current[`${groupIndex}-${skillIndex}`] = el;
                      }}
                      data-skill={`${groupIndex}-${skillIndex}`}
                      className="skill-fill absolute top-0 left-0 h-full bg-green origin-left transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{
                        transform: visibleSkills.has(
                          `${groupIndex}-${skillIndex}`,
                        )
                          ? `scaleX(${skill.level / 100})`
                          : "scaleX(0)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

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
      </div>
    </section>
  );
};

export default Skills;
