import React from "react";
import SkillsLeft from "./SkillsLeft";
import SkillsRight from "./SkillsRight";

const Skills: React.FC = () => (
  <section
    id="skills"
    aria-label="Skills section"
    className="relative py-30 px-15"
  >
    <div className="section-label font-mono text-[10px] text-green tracking-[0.25em] uppercase mb-4 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-px before:bg-green">
      Skills
    </div>

    <h2 className="section-title text-[clamp(32px,4vw,48px)] font-black leading-[1.06] tracking-[-0.02em] mb-12">
      Technical <span className="text-green">Capabilities</span>
    </h2>

    <div className="skills-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
      <SkillsLeft />
      <SkillsRight />
    </div>
  </section>
);

export default Skills;
