import React from "react";

const HeroStats: React.FC = () => (
  <div
    className="hero-stats absolute right-15 bottom-15 flex gap-12 opacity-0 animate-fade-up"
    style={{ animationDelay: "1.2s" }}
  >
    <div className="stat text-right">
      <div className="stat-num text-[36px] font-black text-green leading-none">
        17
      </div>
      <div className="stat-label font-mono text-[10px] text-text-muted tracking-[0.15em] uppercase mt-1">
        Total Projects
      </div>
    </div>
    <div className="stat text-right" aria-label="team-members-led">
      <div className="stat-num text-[36px] font-black text-green leading-none">
        9
      </div>
      <div className="stat-label font-mono text-[10px] text-text-muted tracking-[0.15em] uppercase mt-1">
        Team Members Led
      </div>
    </div>
    <div className="stat text-right">
      <div className="stat-num text-[36px] font-black text-green leading-none">
        3
      </div>
      <div className="stat-label font-mono text-[10px] text-text-muted tracking-[0.15em] uppercase mt-1">
        IoT Systems
      </div>
    </div>
  </div>
);

export default HeroStats;
