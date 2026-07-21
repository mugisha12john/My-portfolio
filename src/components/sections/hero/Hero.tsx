import React from "react";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";
import ScrollHint from "./ScrollHint";

const Hero: React.FC = () => {
  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center px-15 overflow-hidden"
      >
        <div className="hero-bg-circle absolute rounded-full border border-[rgba(127,238,100,0.12)] animate-rotate pointer-events-none w-150 h-150 -right-25 top-1/2 translate-y-[-50%]" />
        <div className="hero-bg-circle absolute rounded-full border border-[rgba(127,238,100,0.12)] animate-rotate-reverse pointer-events-none w-225 h-225 -right-62.5 top-1/2 translate-y-[-50%]" />
        <div className="hero-bg-circle absolute rounded-full border border-[rgba(127,238,100,0.12)] animate-rotate-slow pointer-events-none w-300 h-300 -right-100 top-1/2 translate-y-[-50%]" />

        <div className="hero-glow absolute w-125 h-125 bg-[radial-gradient(circle,rgba(127,238,100,0.08)_0%,transparent_70%)] right-25 top-1/2 translate-y-[-50%] pointer-events-none" />

        <HeroContent />
        <HeroStats />
        <ScrollHint />
      </section>
    </>
  );
};

export default Hero;
