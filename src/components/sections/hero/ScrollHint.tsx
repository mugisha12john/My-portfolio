import React from "react";

const ScrollHint: React.FC = () => (
  <div
    className="scroll-hint absolute bottom-2 left-15 font-mono text-[10px] text-text-muted tracking-[0.15em] uppercase flex items-center gap-3 opacity-0 animate-fade-up"
    style={{ animationDelay: "1.4s" }}
  >
    <div className="scroll-line w-10 h-px bg-text-muted" />
    Scroll to explore
  </div>
);

export default ScrollHint;
