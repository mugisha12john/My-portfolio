import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[rgba(127,238,100,0.12)] py-7 px-15 flex items-center justify-between flex-col sm:flex-row gap-3 text-center sm:text-left"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="w-full sm:w-auto mb-3 sm:mb-0">
        <div className="footer-logo font-mono text-[12px] text-text-muted">
          jeanbaptiste.dev
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <div className="footer-copy font-mono text-[11px] text-text-muted mt-2">
          © {currentYear} Jean Baptiste Mugisha. All rights reserved.
        </div>
        <div className="footer-loc font-mono text-[11px] text-green flex items-center gap-1.5">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Kicukiro, Rwanda
        </div>
      </div>

      <div className="w-full font-mono text-sm sm:w-auto flex flex-col sm:flex-row items-center gap-4">
        <div className="footer-socials flex items-center gap-3">
          <a
            href="https://github.com/mugisha12john"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-dim hover:text-green"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jean-baptiste-mugisha-034b932a1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-dim hover:text-green"
          >
            LinkedIn
          </a>
          <a
            href="https://www.youtube.com/@ITHacksTv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="youtube channel"
            className="text-text-dim hover:text-green"
          >
            Youtube
          </a>
          <a
            href="mailto:johnbutista004@gmail.com"
            aria-label="Email"
            className="text-text-dim hover:text-green"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
