import React from "react";

const AboutRight: React.FC = () => (
  <div className="about-right pt-4">
    <p className="font-mono text-[13px] text-text-dim leading-[1.9] mb-5">
      Beyond the screen, I am a dedicated <strong>Arsenal FC</strong> supporter
      and a fan of local football giant <strong>APR FC</strong>. I believe the
      same discipline found on the pitch applies to writing clean code.
    </p>
    <p className="font-mono text-[13px] text-text-dim leading-[1.9] mb-5">
      I am also a passionate polyglot in training, constantly refining my{" "}
      <strong>English and French</strong>. Whether I am mastering relative
      pronouns or debugging a <strong>Codewars</strong> kata, I am driven by a
      love for continuous learning.
    </p>

    <a
      href="#experience"
      className="learn-more-btn inline-flex items-center gap-3 bg-green text-bg font-mono text-[12px] font-bold tracking-[0.12em] uppercase px-7 py-3.5 no-underline mt-7 transition-all hover:bg-white hover:-translate-y-0.5"
      aria-label="Learn more about experience"
    >
      Learn More
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
  </div>
);

export default AboutRight;
