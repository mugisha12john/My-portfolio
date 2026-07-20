import React from "react";
import { SOCIAL_LINKS } from "./aboutData";

const AboutLeft: React.FC = () => {
  return (
    <div className="about-left pt-4">
      <p className="font-mono text-[13px] text-text-dim leading-[1.9] mb-5">
        I specialize in{" "}
        <strong>system architecture and scalable web engineering</strong>. From
        backend services to frontend performance, I approach development with
        structure, clarity, and a foundation built on my{" "}
        <strong>Christian values</strong>.
      </p>

      <p className="font-mono text-[13px] text-text-dim leading-[1.9] mb-5">
        Based in <strong>Kigali, Rwanda</strong>, I lead a team of 9 at{" "}
        <strong>9 call company</strong>. We are currently developing a real-time
        IoT water monitoring system designed to bring reliable data to our local
        communities.
      </p>

      <div className="about-socials flex gap-2.5 mt-9">
        {SOCIAL_LINKS.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={
              link.href.startsWith("mailto:")
                ? undefined
                : "noopener noreferrer"
            }
            className="social-icon-btn w-11 h-11 border border-[rgba(127,238,100,0.12)] flex items-center justify-center text-text-dim no-underline transition-all hover:border-green hover:text-green hover:bg-[rgba(127,238,100,0.06)]"
            aria-label={`Social ${i + 1}`}
          >
            {link.svg}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AboutLeft;
