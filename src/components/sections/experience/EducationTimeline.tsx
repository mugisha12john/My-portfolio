import React from "react";
import TimelineItem from "./TimelineItem";

const EducationTimeline: React.FC = () => (
  <div>
    <div className="col-title font-mono text-[10px] text-green tracking-[0.2em] uppercase mb-8 flex items-center gap-2.5">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
      Education
    </div>

    <div className="timeline relative pl-6">
      <div className="timeline::before absolute left-0 top-2 bottom-0 w-px bg-[rgba(127,238,100,0.12)]" />

      <TimelineItem
        ariaLabel="education-bachelors"
        period="Ongoing"
        role="Bachelor's in Information Technology"
        place="RP Kigali College · Kigali, Rwanda"
        desc={
          "Focused on software engineering, embedded systems, and database architecture. Expected graduation: 2027. Final year project: WCAM — IoT water monitoring platform for rural communities."
        }
      />

      <TimelineItem
        ariaLabel="education-koica-iot"
        period="2025"
        role="IoT & Embedded Systems — KOICA Cohort 2025"
        place="KOICA · Rwanda"
        desc={
          "Completed intensive IoT engineering training. Placed 1st Team (Intello Team) in IoT project team competition KOICA Rwanda 2025 Cohort."
        }
      />

      <TimelineItem
        ariaLabel="education-koica-game"
        period="2025"
        role="Game Development — KOICA Cohort 2025"
        place="KOICA · Rwanda"
        desc={
          "Completed game development training. Placed 2nd in overall game challenge under KOICA Rwanda 2025 Cohort."
        }
      />

      <TimelineItem
        period="Ongoing"
        role="Self-Directed Learning"
        place="Codewars · freeCodeCamp · YouTube"
        desc={
          "Continuous growth in system design, IoT protocols, React patterns, and backend architecture. Achieved Codewars Trusted User status."
        }
      />
    </div>
  </div>
);

export default EducationTimeline;
