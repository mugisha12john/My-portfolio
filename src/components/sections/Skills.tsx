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
        { name: "Postgrel", level: 70 },
        { name: "Prisma", level: 64 },
      ],
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
    <section id="skills" className="relative py-[120px] px-[60px] bg-bg-2">
      <div className="section-label font-mono text-[10px] text-green tracking-[0.25em] uppercase mb-4 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-px before:bg-green">
        Skills
      </div>

      <h2 className="section-title text-[clamp(32px,4vw,52px)] font-black leading-[1.1] tracking-[-0.02em] mb-[60px]">
        Technical
        <br />
        <span className="text-green">Proficiency</span>
      </h2>

      <div className="skills-layout grid grid-cols-1 lg:grid-cols-2 gap-20">
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
                    className="skill-fill absolute top-0 left-0 h-full bg-green origin-left transition-transform duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)]"
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
    </section>
  );
};

export default Skills;
