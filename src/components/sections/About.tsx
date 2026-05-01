import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-[120px] px-[60px] bg-bg-2">
      <div className="section-label font-mono text-[10px] text-green tracking-[0.25em] uppercase mb-4 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-px before:bg-green">
        About Me
      </div>

      <h2 className="section-title text-[clamp(32px,4vw,52px)] font-black leading-[1.1] tracking-[-0.02em] mb-[60px]">
        The Engineer
        <br />
        <span className="text-green">Behind the Code</span>
      </h2>

      <div className="about-layout grid grid-cols-1 lg:grid-cols-[1fr_400px_1fr] gap-14 items-start">
        <div className="about-left pt-4">
          <p className="font-mono text-[13px] text-text-dim leading-[1.9] mb-5">
            I specialize in{" "}
            <strong>system architecture and scalable web engineering</strong>.
            From backend services to frontend performance, I approach
            development with structure, clarity, and a foundation built on my{" "}
            <strong>Christian values</strong>.
          </p>
          <p className="font-mono text-[13px] text-text-dim leading-[1.9] mb-5">
            Based in <strong>Kigali, Rwanda</strong>, I lead a team of 10 at{" "}
            <strong>9 call company</strong>. We are currently developing a real-time IoT water monitoring
            system designed to bring reliable data to our local communities.
          </p>

          <div className="about-socials flex gap-2.5 mt-9">
            <a
              href="https://github.com/mugisha12john"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn w-11 h-11 border border-[rgba(127,238,100,0.12)] flex items-center justify-center text-text-dim no-underline transition-all hover:border-green hover:text-green hover:bg-[rgba(127,238,100,0.06)]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/jean-baptiste-mugisha-034b932a1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn w-11 h-11 border border-[rgba(127,238,100,0.12)] flex items-center justify-center text-text-dim no-underline transition-all hover:border-green hover:text-green hover:bg-[rgba(127,238,100,0.06)]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://x.com/john_boban1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn w-11 h-11 border border-[rgba(127,238,100,0.12)] flex items-center justify-center text-text-dim no-underline transition-all hover:border-green hover:text-green hover:bg-[rgba(127,238,100,0.06)]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="mailto:johnbutista004@gmail.com"
              className="social-icon-btn w-11 h-11 border border-[rgba(127,238,100,0.12)] flex items-center justify-center text-text-dim no-underline transition-all hover:border-green hover:text-green hover:bg-[rgba(127,238,100,0.06)]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 5L2 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="about-portrait-wrap">
          <div className="portrait-frame relative w-full aspect-[3/4] border border-[rgba(127,238,100,0.3)] overflow-hidden bg-bg-3">
            <div className="corner-tl absolute w-[18px] h-[18px] z-[2] top-0 left-0 border-t-2 border-l-2 border-green" />
            <div className="corner-tr absolute w-[18px] h-[18px] z-[2] top-0 right-0 border-t-2 border-r-2 border-green" />
            <div className="corner-bl absolute w-[18px] h-[18px] z-[2] bottom-0 left-0 border-b-2 border-l-2 border-green" />
            <div className="corner-br absolute w-[18px] h-[18px] z-[2] bottom-0 right-0 border-b-2 border-r-2 border-green" />

            <div className="photo-placeholder w-full h-full flex flex-col items-center justify-center gap-3.5 text-text-muted font-mono text-[11px] tracking-[0.12em] uppercase bg-bg-3">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="opacity-35">Professional Photo</span>
            </div>

            <div className="portrait-name-tag bg-green text-bg px-4 py-2.5 font-mono text-[10px] tracking-[0.12em] uppercase flex justify-between items-center">
              <span>Jean Baptiste Mugisha</span>
              <span>Full-Stack &amp; IoT</span>
            </div>
          </div>

          <div className="about-facts-row grid grid-cols-2 gap-px bg-[rgba(127,238,100,0.12)] border border-[rgba(127,238,100,0.12)] mt-4.5">
            <div className="fact bg-bg-2 p-3 px-3.5">
              <div className="fact-label font-mono text-[9px] text-text-muted tracking-[0.15em] uppercase mb-1">
                Location
              </div>
              <div className="fact-value text-[12px] font-semibold text-text">
                Kigali, Rwanda
              </div>
            </div>
            <div className="fact bg-bg-2 p-3 px-3.5">
              <div className="fact-label font-mono text-[9px] text-text-muted tracking-[0.15em] uppercase mb-1">
                Football
              </div>
              <div className="fact-value text-[12px] font-semibold text-text">
                Arsenal · Apr Fc
              </div>
            </div>
            <div className="fact bg-bg-2 p-3 px-3.5">
              <div className="fact-label font-mono text-[9px] text-text-muted tracking-[0.15em] uppercase mb-1">
                Languages
              </div>
              <div className="fact-value text-[12px] font-semibold text-text">
                RW · FR · EN
              </div>
            </div>
            <div className="fact bg-bg-2 p-3 px-3.5">
              <div className="fact-label font-mono text-[9px] text-text-muted tracking-[0.15em] uppercase mb-1">
                Status
              </div>
              <div className="fact-value text-[12px] font-semibold text-green">
                Open to Work
              </div>
            </div>
          </div>
        </div>

        <div className="about-right pt-4">
          <p className="font-mono text-[13px] text-text-dim leading-[1.9] mb-5">
            Beyond the screen, I am a dedicated <strong>Arsenal FC</strong>{" "}
            supporter and a fan of local football giant <strong>APR FC</strong>.
            I believe the same discipline found on the pitch applies to writing
            clean code.
          </p>
          <p className="font-mono text-[13px] text-text-dim leading-[1.9] mb-5">
            I am also a passionate polyglot in training, constantly refining my{" "}
            <strong>English and French</strong>. Whether I am mastering relative
            pronouns or debugging a <strong>Codewars</strong> kata, I am driven
            by a love for continuous learning.
          </p>

          <a
            href="#experience"
            className="learn-more-btn inline-flex items-center gap-3 bg-green text-bg font-mono text-[12px] font-bold tracking-[0.12em] uppercase px-7 py-3.5 no-underline mt-7 transition-all hover:bg-white hover:translate-y-[-2px]"
          >
            Learn More
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
