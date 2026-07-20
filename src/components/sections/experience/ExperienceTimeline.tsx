import React from "react";
import TimelineItem from "./TimelineItem";

const ExperienceTimeline: React.FC = () => (
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
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
      Experience
    </div>

    <div className="timeline relative pl-6">
      <div className="timeline::before absolute left-0 top-2 bottom-0 w-px bg-[rgba(127,238,100,0.12)]" />

      <TimelineItem
        ariaLabel="experience-wcam"
        period="2026 — Present"
        role="Project Manager & Frontend Lead"
        place="9Call Company · Kigali, Rwanda"
        desc={
          "Leading a 9-person cross-functional team building WCAM — an IoT water monitoring platform. Owned system architecture, ESP32 firmware integration, React dashboard, and 3-tier RBAC design."
        }
      />

      <TimelineItem
        ariaLabel="experience-gym-trainee"
        period="Feb, 2025 — present"
        role="The Gym Rwanda trainee"
        place="Junior software developer · Rwanda"
        desc={
          "Studying with working on project using react,typescript, node.js"
        }
      />

      <TimelineItem
        ariaLabel="experience-technical-educator"
        period="2024 — Present"
        role="Technical Content Creator & Educator"
        place="IT Hacks Hub · YouTube"
        desc={
          <>
            <span>
              Sharing technical knowledge and development hacks via{" "}
              <strong>IT Hacks Hub</strong>. I produce tutorials focused on
              full-stack engineering and system administration to empower the
              Rwandan tech community and mentor aspiring developers.
            </span>
          </>
        }
      />

      <TimelineItem
        period="June, 2024 — Sept, 2024"
        role="Community Facilitator"
        place="Youth Health Sexual and Reproductive Health (SRH)· Rwanda"
        desc={
          "Focusing on practical ways to prevent unplanned pregnancies through education and community support."
        }
      />
    </div>
  </div>
);

export default ExperienceTimeline;
