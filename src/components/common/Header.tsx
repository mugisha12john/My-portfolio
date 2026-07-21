import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import NAV_LINKS from "./navLinks";

const NavLogo: React.FC = () => (
  <div className="nav-logo font-mono text-xs text-green tracking-widest  z-10">
    jean<span className="text-text-dim">baptiste.dev</span>
  </div>
);

const SkipNav: React.FC = () => (
  <a
    href="#main"
    className="sr-only focus:not-sr-only focus:opacity-100"
    aria-label="Skip to main content"
  >
    Skip to content
  </a>
);

const MobileMenu: React.FC<{
  onClose: () => void;
  links: typeof NAV_LINKS;
}> = ({ onClose, links }) => {
  return (
    <div
      className="absolute top-full left-0 w-full bg-bg-2 border-b border-[rgba(127,238,100,0.12)] p-6 flex flex-col gap-6 md:hidden shadow-lg animate-fade-up"
      role="dialog"
      aria-label="Mobile navigation"
    >
      <ul className="flex flex-col gap-6 list-none">
        {links.map((link) => (
          <li key={link.label}>
            <NavLink
              to={link.href}
              onClick={onClose}
              className={({ isActive }) =>
                "font-mono text-[13px] text-text-dim no-underline tracking-widest uppercase transition-colors hover:text-green" +
                (isActive ? " text-green" : "")
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <a
        href="/myresume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-[11px] text-bg bg-green px-5 py-3 border-none tracking-widest uppercase transition-all hover:opacity-85 w-max inline-block text-center"
      >
        Resume
      </a>
    </div>
  );
};

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-100 px-6 md:px-15 py-5 flex flex-wrap items-center justify-between bg-linear-to-b from-[rgba(10,10,10,0.97)] to-transparent backdrop-blur-sm"
      role="navigation"
      aria-label="Primary"
    >
      <SkipNav />
      <NavLogo />
      <ul
        className="nav-links gap-8 list-none hidden md:flex items-center"
        aria-hidden={isMobileMenuOpen}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                "font-mono text-[11px] text-text-dim no-underline tracking-widest uppercase transition-colors relative hover:text-green after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-green after:transition-all after:duration-300 hover:after:w-full" +
                (isActive ? " text-green" : "")
              }
              aria-label={`Go to ${link.label}`}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <a
        href="/myresume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta font-mono text-[11px] text-bg bg-green px-5 py-2 border-none tracking-widest uppercase transition-all hover:opacity-85 hover:-translate-y-px hidden md:block"
        aria-label="Download resume"
      >
        Resume
      </a>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-text-dim hover:text-green transition-colors z-10"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <MobileMenu
          onClose={() => setIsMobileMenuOpen(false)}
          links={NAV_LINKS}
        />
      )}
    </nav>
  );
};

export default Header;
