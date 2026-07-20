import React from "react";
import AboutLeft from "./AboutLeft";
import AboutPortrait from "./AboutPortrait";
import AboutRight from "./AboutRight";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-30 px-15 bg-bg-2"
      aria-label="About section"
    >
      <div className="section-label font-mono text-[10px] text-green tracking-[0.25em] uppercase mb-4 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-px before:bg-green">
        About Me
      </div>

      <h2 className="section-title text-[clamp(32px,4vw,52px)] font-black leading-[1.1] tracking-[-0.02em] mb-15">
        The Engineer
        <br />
        <span className="text-green">Behind the Code</span>
      </h2>

      <div className="about-layout grid grid-cols-1 lg:grid-cols-[1fr_400px_1fr] gap-14 items-start">
        <AboutLeft />
        <AboutPortrait />
        <AboutRight />
      </div>
    </section>
  );
};

export default About;
