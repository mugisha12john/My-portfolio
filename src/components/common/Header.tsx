import React from "react";

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-[60px] py-5 flex items-center justify-between bg-gradient-to-b from-[rgba(10,10,10,0.97)] to-transparent backdrop-blur-sm">
      <div className="nav-logo font-mono text-xs text-green tracking-widest uppercase">
        jean<span className="text-text-dim">baptiste Mugisha</span>
      </div>

      <ul className="nav-links flex gap-8 list-none hidden md:flex">
        <li>
          <a
            href="#about"
            className="font-mono text-[11px] text-text-dim no-underline tracking-[0.1em] uppercase transition-colors relative hover:text-green after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-green after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="font-mono text-[11px] text-text-dim no-underline tracking-[0.1em] uppercase transition-colors relative hover:text-green after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-green after:transition-all after:duration-300 hover:after:w-full"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#awards"
            className="font-mono text-[11px] text-text-dim no-underline tracking-[0.1em] uppercase transition-colors relative hover:text-green after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-green after:transition-all after:duration-300 hover:after:w-full"
          >
            Awards
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="font-mono text-[11px] text-text-dim no-underline tracking-[0.1em] uppercase transition-colors relative hover:text-green after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-green after:transition-all after:duration-300 hover:after:w-full"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="font-mono text-[11px] text-text-dim no-underline tracking-[0.1em] uppercase transition-colors relative hover:text-green after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-green after:transition-all after:duration-300 hover:after:w-full"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="font-mono text-[11px] text-text-dim no-underline tracking-[0.1em] uppercase transition-colors relative hover:text-green after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-green after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </a>
        </li>
      </ul>

      <button className="nav-cta font-mono text-[11px] text-bg bg-green px-5 py-2 border-none cursor-none tracking-[0.1em] uppercase transition-all hover:opacity-85 hover:translate-y-[-1px]">
        Resume
      </button>
    </nav>
  );
};

export default Header;
