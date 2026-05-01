import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative py-[120px] px-[60px] bg-bg border-t border-[rgba(127,238,100,0.12)]"
    >
      <div className="section-label font-mono text-[10px] text-green tracking-[0.25em] uppercase mb-4 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-px before:bg-green">
        06 — Contact
      </div>

      <h2 className="section-title text-[clamp(32px,4vw,52px)] font-black leading-[1.1] tracking-[-0.02em] mb-[60px]">
        Let's Build
        <br />
        <span className="text-green">Something Real</span>
      </h2>

      <div className="contact-layout grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="contact-info">
          <p className="font-mono text-[13px] text-text-dim leading-[1.8] mb-8">
            Open to freelance contracts, technical collaborations, and full-time
            opportunities. If you're building something that matters —
            especially in Africa's infrastructure, health, or education space —
            I want to hear from you.
          </p>

          <div className="contact-socials flex flex-col gap-2.5">
            <a
              href="mailto:johnbutista004@gmail.com"
              className="contact-social-link flex items-center gap-3.5 font-mono text-[12px] text-text-dim no-underline p-3.5 px-4 border border-[rgba(127,238,100,0.12)] transition-all hover:border-green hover:text-green hover:bg-[rgba(127,238,100,0.06)]"
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
              <div>
                <div className="contact-social-label tracking-[0.1em] uppercase text-[10px] mb-1">
                  Email
                </div>
                <div>johnbutista004@gmail.com</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/jean-baptiste-mugisha-034b932a1"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link flex items-center gap-3.5 font-mono text-[12px] text-text-dim no-underline p-3.5 px-4 border border-[rgba(127,238,100,0.12)] transition-all hover:border-green hover:text-green hover:bg-[rgba(127,238,100,0.06)]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <div>
                <div className="contact-social-label tracking-[0.1em] uppercase text-[10px] mb-1">
                  LinkedIn
                </div>
                <div>jean-baptiste-mugisha-034b932a1</div>
              </div>
            </a>

            <a
              href="https://github.com/mugisha12john"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link flex items-center gap-3.5 font-mono text-[12px] text-text-dim no-underline p-3.5 px-4 border border-[rgba(127,238,100,0.12)] transition-all hover:border-green hover:text-green hover:bg-[rgba(127,238,100,0.06)]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <div>
                <div className="contact-social-label tracking-[0.1em] uppercase text-[10px] mb-1">
                  GitHub
                </div>
                <div>mugisha12john</div>
              </div>
            </a>

            <a
              href="https://x.com/john_boban1"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link flex items-center gap-3.5 font-mono text-[12px] text-text-dim no-underline p-3.5 px-4 border border-[rgba(127,238,100,0.12)] transition-all hover:border-green hover:text-green hover:bg-[rgba(127,238,100,0.06)]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              <div>
                <div className="contact-social-label tracking-[0.1em] uppercase text-[10px] mb-1">
                  X (Twitter)
                </div>
                <div>@john_boban1</div>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form
            action="https://formspree.io/f/xaqvneyn"
            method="POST"
            className="flex flex-col gap-3.5"
          >
            <div className="form-row grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="form-group flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="form-label font-mono text-[10px] text-text-muted tracking-[0.15em] uppercase"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input bg-bg-3 border border-[rgba(127,238,100,0.12)] text-text font-mono text-[12px] px-4 py-3 outline-none transition-colors focus:border-green"
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="form-label font-mono text-[10px] text-text-muted tracking-[0.15em] uppercase"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input bg-bg-3 border border-[rgba(127,238,100,0.12)] text-text font-mono text-[12px] px-4 py-3 outline-none transition-colors focus:border-green"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="form-group flex flex-col gap-1.5">
              <label
                htmlFor="subject"
                className="form-label font-mono text-[10px] text-text-muted tracking-[0.15em] uppercase"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input bg-bg-3 border border-[rgba(127,238,100,0.12)] text-text font-mono text-[12px] px-4 py-3 outline-none transition-colors focus:border-green"
                placeholder="Project Discussion"
              />
            </div>

            <div className="form-group flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="form-label font-mono text-[10px] text-text-muted tracking-[0.15em] uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="form-textarea bg-bg-3 border border-[rgba(127,238,100,0.12)] text-text font-mono text-[12px] px-4 py-3 outline-none transition-colors focus:border-green resize-y min-h-[120px]"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>

            <button
              type="submit"
              className="form-submit bg-green border-none text-bg font-mono text-[12px] font-bold tracking-[0.12em] uppercase px-4 py-4 cursor-none transition-all hover:bg-white hover:translate-y-[-2px] mt-1.5 flex items-center justify-center gap-2.5"
            >
              Send Message
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
