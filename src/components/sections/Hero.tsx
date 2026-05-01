import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        className="cursor fixed w-[10px] h-[10px] bg-green rounded-full pointer-events-none z-[9999] translate-x-[-50%] translate-y-[-50%] mix-blend-difference"
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />
      <div
        className="cursor-ring fixed w-[36px] h-[36px] border border-green rounded-full pointer-events-none z-[9998] translate-x-[-50%] translate-y-[-50%] opacity-50"
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />

      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center px-[60px] overflow-hidden"
      >
        {/* Background Circles */}
        <div className="hero-bg-circle absolute rounded-full border border-[rgba(127,238,100,0.12)] animate-rotate pointer-events-none w-[600px] h-[600px] right-[-100px] top-1/2 translate-y-[-50%]" />
        <div className="hero-bg-circle absolute rounded-full border border-[rgba(127,238,100,0.12)] animate-rotate-reverse pointer-events-none w-[900px] h-[900px] right-[-250px] top-1/2 translate-y-[-50%]" />
        <div className="hero-bg-circle absolute rounded-full border border-[rgba(127,238,100,0.12)] animate-rotate-slow pointer-events-none w-[1200px] h-[1200px] right-[-400px] top-1/2 translate-y-[-50%]" />

        {/* Glow Effect */}
        <div className="hero-glow absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(127,238,100,0.08)_0%,transparent_70%)] right-[100px] top-1/2 translate-y-[-50%] pointer-events-none" />

        <div className="relative z-10">
          <div
            className="hero-eyebrow font-mono text-[11px] text-green tracking-[0.2em] uppercase mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            // Full-Stack &amp; IoT Engineer — Kigali, Rwanda
          </div>

          <h1
            className="hero-title text-[clamp(52px,7vw,96px)] font-black leading-none tracking-[-0.02em] max-w-[800px] opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Architecting
            <br />
            the <span className="accent text-green">Modern</span>
            <br />
            <span className="line2 text-text-dim">Web.</span>
          </h1>

          <p
            className="hero-sub mt-7 max-w-[480px] font-mono text-[13px] leading-[1.8] text-text-dim opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Building scalable smart systems that solve real infrastructure
            problems across Africa. From ESP32 firmware to React dashboards —
            end-to-end.
          </p>

          <div
            className="hero-status inline-flex items-center gap-2 mt-9 px-4 py-2 border border-[rgba(127,238,100,0.3)] bg-[rgba(127,238,100,0.06)] font-mono text-[11px] text-green tracking-[0.1em] opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="status-dot w-[6px] h-[6px] rounded-full bg-green animate-pulse" />
            Available for new projects — 2026
          </div>

          <div
            className="hero-ctas flex gap-4 mt-12 opacity-0 animate-fade-up"
            style={{ animationDelay: "1s" }}
          >
            <a
              href="#projects"
              className="btn-primary font-mono text-[12px] tracking-[0.1em] uppercase no-underline px-8 py-[14px] bg-green text-bg font-semibold transition-all hover:bg-white hover:translate-y-[-2px] inline-block"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn-ghost font-mono text-[12px] tracking-[0.1em] uppercase no-underline px-8 py-[14px] border border-[rgba(127,238,100,0.3)] text-text-dim transition-all hover:border-green hover:text-green hover:translate-y-[-2px] inline-block"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Stats */}
        <div
          className="hero-stats absolute right-[60px] bottom-[60px] flex gap-12 opacity-0 animate-fade-up"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="stat text-right">
            <div className="stat-num text-[36px] font-black text-green leading-none">
              4+
            </div>
            <div className="stat-label font-mono text-[10px] text-text-muted tracking-[0.15em] uppercase mt-1">
              Live Projects
            </div>
          </div>
          <div className="stat text-right">
            <div className="stat-num text-[36px] font-black text-green leading-none">
              6
            </div>
            <div className="stat-label font-mono text-[10px] text-text-muted tracking-[0.15em] uppercase mt-1">
              Team Members Led
            </div>
          </div>
          <div className="stat text-right">
            <div className="stat-num text-[36px] font-black text-green leading-none">
              2
            </div>
            <div className="stat-label font-mono text-[10px] text-text-muted tracking-[0.15em] uppercase mt-1">
              IoT Systems
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div
          className="scroll-hint absolute  bottom-2 left-[60px] font-mono text-[10px] text-text-muted tracking-[0.15em] uppercase flex items-center gap-3 opacity-0 animate-fade-up"
          style={{ animationDelay: "1.4s" }}
        >
          <div className="scroll-line  w-10 h-px bg-text-muted" />
          Scroll to explore
        </div>
      </section>
    </>
  );
};

export default Hero;
