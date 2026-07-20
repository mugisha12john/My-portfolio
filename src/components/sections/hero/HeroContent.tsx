import React from "react";

const HeroContent: React.FC = () => (
  <div className="relative z-10">
    <div
      className="hero-eyebrow font-mono text-[11px] text-green tracking-[0.2em] uppercase mb-6 opacity-0 animate-fade-up"
      style={{ animationDelay: "0.2s" }}
    >
      // Full-Stack &amp; IoT Engineer — Kigali, Rwanda
    </div>

    <h1
      className="hero-title text-[clamp(52px,7vw,96px)] font-black leading-none tracking-[-0.02em] max-w-200 opacity-0 animate-fade-up"
      style={{ animationDelay: "0.4s" }}
    >
      Architecting
      <br />
      the <span className="accent text-green">Modern</span>
      <br />
      <span className="line2 text-text-dim">Web.</span>
    </h1>

    <p
      className="hero-sub mt-7 max-w-120 font-mono text-[13px] leading-[1.8] text-text-dim opacity-0 animate-fade-up"
      style={{ animationDelay: "0.6s" }}
    >
      Building scalable smart systems that solve real infrastructure problems
      across Africa. From ESP32 firmware to React dashboards — end-to-end.
    </p>

    <div
      className="hero-status inline-flex items-center gap-2 mt-9 px-4 py-2 border border-[rgba(127,238,100,0.3)] bg-[rgba(127,238,100,0.06)] font-mono text-[11px] text-green tracking-widest opacity-0 animate-fade-up"
      style={{ animationDelay: "0.8s" }}
    >
      <div className="status-dot w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
      Available for new projects — 2026
    </div>

    <div
      className="hero-ctas flex gap-4 mt-12 opacity-0 animate-fade-up"
      style={{ animationDelay: "1s" }}
    >
      <a
        href="#projects"
        className="btn-primary font-mono text-[12px] tracking-widest uppercase no-underline px-8 py-3.5 bg-green text-bg font-semibold transition-all hover:bg-white hover:-translate-y-0.5 inline-block"
      >
        View My Work
      </a>
      <a
        href="#contact"
        className="btn-ghost font-mono text-[12px] tracking-widest uppercase no-underline px-8 py-3.5 border border-[rgba(127,238,100,0.3)] text-text-dim transition-all hover:border-green hover:text-green hover:-translate-y-0.5 inline-block"
      >
        Get In Touch
      </a>
    </div>
  </div>
);

export default HeroContent;
