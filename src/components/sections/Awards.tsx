import React from "react";

interface Award {
  id: number;
  year: string;
  title: string;
  description: string;
  issuer: string;
  icon: React.ReactNode;
}

const Awards: React.FC = () => {
  const awards: Award[] = [
    {
      id: 1,
      year: "2025",
      title: "KOICA IoT — 1st Place Team",
      description:
        "Won 1st place in the IoT project team competition under KOICA Rwanda's intensive technology program, delivering a working embedded system solution.",
      issuer: "KOICA Rwanda · 2025",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ),
    },
    {
      id: 2,
      year: "2025",
      title: "KOICA Game Challenge — 2nd Place",
      description:
        "Placed 2nd overall in KOICA Rwanda's competitive game challenge, demonstrating problem-solving ability and technical performance under pressure.",
      issuer: "KOICA Rwanda · 2025",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
        </svg>
      ),
    },
    {
      id: 3,
      year: "Ongoing",
      title: "Codewars Trusted User",
      description:
        "Granted kata-marking privileges on Codewars — recognizing code quality, problem-solving depth, and consistent contribution to the developer community.",
      issuer: "Codewars · Trusted Status",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },

    {
      id: 4,
      year: "Active",
      title: "GitHub Pro",
      description:
        "GitHub Pro member with access to advanced collaboration tools, unlimited private repositories, and enhanced CI/CD capabilities for professional delivery.",
      issuer: "GitHub · Pro Account",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
        </svg>
      ),
    },

    {
      id: 5,
      year: "Oct, 2025",
      title: "60 WPM — Typing.com",
      description:
        "Achieved 60 WPM on Typing.com (October 28, 2025), demonstrating focus, consistency, and technical precision under timed conditions.  ",
      issuer: "Typing.com · 2025",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
        </svg>
      ),
    },
  ];

  return (
    <section id="awards" className="relative py-[120px] px-[60px] bg-bg">
      <div className="section-label font-mono text-[10px] text-green tracking-[0.25em] uppercase mb-4 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-px before:bg-green">
        Recognition
      </div>

      <h2 className="section-title text-[clamp(32px,4vw,52px)] font-black leading-[1.1] tracking-[-0.02em] mb-[60px]">
        Awards & <span className="text-green">Achievements</span>
      </h2>

      <div className="awards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(127,238,100,0.12)]">
        {awards.map((award) => (
          <div
            key={award.id}
            className="award-card bg-bg-3 p-8 px-7 relative overflow-hidden border-t-2 border-t-transparent transition-all duration-300 hover:bg-bg-4 hover:border-t-green"
          >
            <div className="award-icon-wrap w-[50px] h-[50px] border border-[rgba(127,238,100,0.12)] flex items-center justify-center text-green mb-4.5 bg-bg-2 transition-all hover:bg-[rgba(127,238,100,0.06)] hover:border-[rgba(127,238,100,0.3)]">
              {award.icon}
            </div>

            <div className="award-year font-mono text-[10px] text-text-muted tracking-[0.15em] mb-2">
              {award.year}
            </div>

            <h3 className="award-title text-[16px] font-bold mb-2.5 leading-[1.3]">
              {award.title}
            </h3>

            <p className="award-desc font-mono text-[11px] text-text-dim leading-[1.7]">
              {award.description}
            </p>

            <div className="award-issuer font-mono text-[10px] text-green mt-3.5 flex items-center gap-1.5">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {award.issuer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
