import React from "react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-[120px] px-[60px] bg-bg">
      <div className="section-label font-mono text-[10px] text-green tracking-[0.25em] uppercase mb-4 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-px before:bg-green">
        Journey
      </div>

      <h2 className="section-title text-[clamp(32px,4vw,52px)] font-black leading-[1.1] tracking-[-0.02em] mb-[60px]">
        Experience & <span className="text-green">Education</span>
      </h2>

      <div className="exp-edu-grid grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Experience Column */}
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

            <div className="timeline-item relative mb-9">
              <div className="timeline-dot absolute left-[-28px] top-1.5 w-2.5 h-2.5 rounded-full bg-bg border-2 border-[rgba(127,238,100,0.3)] transition-all hover:bg-green" />
              <div className="timeline-period font-mono text-[10px] text-green tracking-[0.12em] mb-1.5">
                2026 — Present
              </div>
              <div className="timeline-role text-[15px] font-bold mb-1 text-text">
                Project Manager & Frontend Lead
              </div>
              <div className="timeline-place font-mono text-[11px] text-text-muted mb-2">
                9Call Company · Kigali, Rwanda
              </div>
              <div className="timeline-desc font-mono text-[11px] text-text-dim leading-[1.7]">
                Leading a 6-person cross-functional team building WCAM — an IoT
                water monitoring platform. Owned system architecture, ESP32
                firmware integration, React dashboard, and 3-tier RBAC design.
              </div>
            </div>

            <div className="timeline-item relative mb-9">
              <div className="timeline-dot absolute left-[-28px] top-1.5 w-2.5 h-2.5 rounded-full bg-bg border-2 border-[rgba(127,238,100,0.3)] transition-all hover:bg-green" />
              <div className="timeline-period font-mono text-[10px] text-green tracking-[0.12em] mb-1.5">
                Feb, 2025 — present
              </div>
              <div className="timeline-role text-[15px] font-bold mb-1 text-text">
                The Gym Rwanda trainee
              </div>
              <div className="timeline-place font-mono text-[11px] text-text-muted mb-2">
                junior software developer Rwanda
              </div>
              <div className="timeline-desc font-mono text-[11px] text-text-dim leading-[1.7]">
                Studying with working on project using react,typescript, node.js
              </div>
            </div>

            <div className="timeline-item relative mb-9">
              <div className="timeline-dot absolute left-[-28px] top-1.5 w-2.5 h-2.5 rounded-full bg-bg border-2 border-[rgba(127,238,100,0.3)] transition-all hover:bg-green" />
              <div className="timeline-period font-mono text-[10px] text-green tracking-[0.12em] mb-1.5">
                2024 — Present
              </div>
              <div className="timeline-role text-[15px] font-bold mb-1 text-text">
                Technical Content Creator & Educator
              </div>
              <div className="timeline-place font-mono text-[11px] text-text-muted mb-2">
                IT Hacks Hub · YouTube
              </div>
              <div className="timeline-desc font-mono text-[11px] text-text-dim leading-[1.7]">
                Sharing technical knowledge and development hacks via{" "}
                <strong>IT Hacks Hub</strong>. I produce tutorials focused on
                full-stack engineering and system administration to empower the
                Rwandan tech community and mentor aspiring developers.
              </div>
            </div>

            <div className="timeline-item relative">
              <div className="timeline-dot absolute left-[-28px] top-1.5 w-2.5 h-2.5 rounded-full bg-bg border-2 border-[rgba(127,238,100,0.3)] transition-all hover:bg-green" />
              <div className="timeline-period font-mono text-[10px] text-green tracking-[0.12em] mb-1.5">
                June, 2024 — Sept, 2024
              </div>
              <div className="timeline-role text-[15px] font-bold mb-1 text-text">
                Community Facilitator
              </div>
              <div className="timeline-place font-mono text-[11px] text-text-muted mb-2">
                Youth Health Sexual and Reproductive Health (SRH)· Rwanda
              </div>
              <div className="timeline-desc font-mono text-[11px] text-text-dim leading-[1.7]">
                focusing on practical ways to prevent unplanned pregnancies
                through education and community support.
              </div>
            </div>
          </div>
        </div>

        {/* Education Column */}
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

            <div className="timeline-item relative mb-9">
              <div className="timeline-dot absolute left-[-28px] top-1.5 w-2.5 h-2.5 rounded-full bg-bg border-2 border-[rgba(127,238,100,0.3)] transition-all hover:bg-green" />
              <div className="timeline-period font-mono text-[10px] text-green tracking-[0.12em] mb-1.5">
                2022 — 2025
              </div>
              <div className="timeline-role text-[15px] font-bold mb-1 text-text">
                Bachelor's in Information technology
              </div>
              <div className="timeline-place font-mono text-[11px] text-text-muted mb-2">
                RP Kigali college · Kigali, Rwanda
              </div>
              <div className="timeline-desc font-mono text-[11px] text-text-dim leading-[1.7]">
                Focused on software engineering, embedded systems, and database
                architecture. Final year project: WCAM — IoT water monitoring
                platform for rural communities.
              </div>
            </div>

            <div className="timeline-item relative mb-9">
              <div className="timeline-dot absolute left-[-28px] top-1.5 w-2.5 h-2.5 rounded-full bg-bg border-2 border-[rgba(127,238,100,0.3)] transition-all hover:bg-green" />
              <div className="timeline-period font-mono text-[10px] text-green tracking-[0.12em] mb-1.5">
                2025
              </div>
              <div className="timeline-role text-[15px] font-bold mb-1 text-text">
                IoT &amp; Embedded Systems — KOICA Cohort 2025
              </div>
              <div className="timeline-place font-mono text-[11px] text-text-muted mb-2">
                KOICA · Rwanda
              </div>
              <div className="timeline-desc font-mono text-[11px] text-text-dim leading-[1.7]">
                Completed intensive IoT engineering training. Placed 1st Team
                (intello Team) in IoT project team competition KOICA Rwanda 2025
                Cohort.
              </div>
            </div>

            <div className="timeline-item relative mb-9">
              <div className="timeline-dot absolute left-[-28px] top-1.5 w-2.5 h-2.5 rounded-full bg-bg border-2 border-[rgba(127,238,100,0.3)] transition-all hover:bg-green" />
              <div className="timeline-period font-mono text-[10px] text-green tracking-[0.12em] mb-1.5">
                2025
              </div>
              <div className="timeline-role text-[15px] font-bold mb-1 text-text">
                Game development — KOICA Cohort 2025
              </div>
              <div className="timeline-place font-mono text-[11px] text-text-muted mb-2">
                KOICA · Rwanda
              </div>
              <div className="timeline-desc font-mono text-[11px] text-text-dim leading-[1.7]">
                Completed game development training. Placed 2nd in overall game
                challenge under KOICA Rwanda 2025 Cohort.
              </div>
            </div>

            <div className="timeline-item relative mb-9">
              <div className="timeline-dot absolute left-[-28px] top-1.5 w-2.5 h-2.5 rounded-full bg-bg border-2 border-[rgba(127,238,100,0.3)] transition-all hover:bg-green" />
              <div className="timeline-period font-mono text-[10px] text-green tracking-[0.12em] mb-1.5">
                2025 - present
              </div>
              <div className="timeline-role text-[15px] font-bold mb-1 text-text">
                The Gym Rwanda Traniee
              </div>
              <div className="timeline-place font-mono text-[11px] text-text-muted mb-2">
                Traniee · Rwanda
              </div>
              <div className="timeline-desc font-mono text-[11px] text-text-dim leading-[1.7]">
                I am currently a Software Engineering Trainee at The Gym Rwanda,
                where I am immersed in the country’s most intensive program for
                deep-level language mastery and advanced system architecture
              </div>
            </div>

            <div className="timeline-item relative">
              <div className="timeline-dot absolute left-[-28px] top-1.5 w-2.5 h-2.5 rounded-full bg-bg border-2 border-[rgba(127,238,100,0.3)] transition-all hover:bg-green" />
              <div className="timeline-period font-mono text-[10px] text-green tracking-[0.12em] mb-1.5">
                Ongoing
              </div>
              <div className="timeline-role text-[15px] font-bold mb-1 text-text">
                Self-Directed Learning
              </div>
              <div className="timeline-place font-mono text-[11px] text-text-muted mb-2">
                Codewars · freeCodeCamp · YouTube
              </div>
              <div className="timeline-desc font-mono text-[11px] text-text-dim leading-[1.7]">
                Continuous growth in system design, IoT protocols, React
                patterns, and backend architecture. Achieved Codewars Trusted
                User status.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
