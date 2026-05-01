import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-[24px] md:px-[60px] py-5 flex flex-wrap items-center justify-between bg-gradient-to-b from-[rgba(10,10,10,0.97)] to-transparent backdrop-blur-sm">
      <div className="nav-logo font-mono text-xs text-green tracking-widest uppercase z-10">
        jean<span className="text-text-dim">baptiste Mugisha</span>
      </div>

      {/* Desktop Menu */}
      <ul className="nav-links gap-8 list-none hidden md:flex items-center">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="font-mono text-[11px] text-text-dim no-underline tracking-[0.1em] uppercase transition-colors relative hover:text-green after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-green after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop Resume Button */}
      <a
        href="/myresume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta font-mono text-[11px] text-bg bg-green px-5 py-2 border-none tracking-[0.1em] uppercase transition-all hover:opacity-85 hover:translate-y-[-1px] hidden md:block"
      >
        Resume
      </a>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-text-dim hover:text-green transition-colors z-10"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-bg-2 border-b border-[rgba(127,238,100,0.12)] p-6 flex flex-col gap-6 md:hidden shadow-lg animate-fade-up">
          <ul className="flex flex-col gap-6 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-mono text-[13px] text-text-dim no-underline tracking-[0.1em] uppercase transition-colors hover:text-green"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/myresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-bg bg-green px-5 py-3 border-none tracking-[0.1em] uppercase transition-all hover:opacity-85 w-[max-content] inline-block text-center"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
