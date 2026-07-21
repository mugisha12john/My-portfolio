import React from "react";
import ExperienceTimeline from "./experience/ExperienceTimeline";
import EducationTimeline from "./experience/EducationTimeline";

const Experience: React.FC = () => (
  <section id="experience" className="relative py-30 px-15 bg-bg">
    <div className="section-label font-mono text-[10px] text-green tracking-[0.25em] uppercase mb-4 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-px before:bg-green">
      Journey
    </div>

    <h2 className="section-title text-[clamp(32px,4vw,52px)] font-black leading-[1.1] tracking-[-0.02em] mb-15">
      Experience & <span className="text-green">Education</span>
    </h2>

    <div className="exp-edu-grid grid grid-cols-1 lg:grid-cols-2 gap-20">
      <ExperienceTimeline />
      <EducationTimeline />
    </div>
  </section>
);

export default Experience;
