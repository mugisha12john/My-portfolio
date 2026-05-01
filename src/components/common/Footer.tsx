import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(127,238,100,0.12)] py-7 px-[60px] flex items-center justify-between flex-col sm:flex-row gap-3 text-center sm:text-left">
      <div className="footer-logo font-mono text-[12px] text-text-muted">
        jeanbaptiste.dev
      </div>
      
      <div className="footer-copy font-mono text-[11px] text-text-muted">
        © {currentYear} Jean Baptiste Mugisha. All rights reserved.
      </div>
      
      <div className="footer-loc font-mono text-[11px] text-green flex items-center gap-1.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        Remote, Worldwide
      </div>
    </footer>
  );
};

export default Footer;
