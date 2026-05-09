import React, { useState } from "react";
import projectSample from "../../assets/about-pic.jpeg";
import wcamImage from "../../assets/wcam.png";
import smartImage from "../../assets/smart.png";
import baumeisterImage from "../../assets/baumeister.png";
import greatHillsImage from "../../assets/great hills.png";
import kininiImage from "../../assets/kinini-sacco java.png";
import feedUsImage from "../../assets/feedus.png";
import electricTokenImage from "../../assets/electronic token ntuma app.png";
import elevatePhpImage from "../../assets/elevate php.png";
import capgeminiImage from "../../assets/capgemini.png";
import cartImage from "../../assets/cart.png";
import weatherImage from "../../assets/weather.png";
import laslesImage from "../../assets/lasles vpn.png";
import listListingImage from "../../assets/list listing.png";
import staticJobImage from "../../assets/static job.png";
import ageCalculatorImage from "../../assets/age calculator.png";
import vanLifeImage from "../../assets/van life.png";

interface Project {
  id: number;
  num: string;
  tag: string;
  name: string;
  category: "Education" | "Client" | "Self" | "Hackathon";
  image: string;
  description: string;
  tech: string[];
  links: { type: string; url: string }[];
  featured?: boolean;
  access?: "private";
}

const Projects: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<
    "All" | "Education" | "Client" | "Self" | "Hackathon"
  >("All");
  const [showAll, setShowAll] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleShowAll = () => setShowAll(true);
  const handleShowLess = () => {
    setShowAll(false);
    setActiveTab("All");
  };

  const projects: Project[] = [
    {
      id: 1,
      num: "001",
      tag: "Client · IoT · Real-Time",
      name: "WCAM",
      category: "Client",
      image: wcamImage,
      description:
        "Water Community Administration & Monitoring - full-stack IoT platform pairing ESP32 microcontrollers with dual YF-S201 flow sensors for rural Rwanda. A custom leak-detection algorithm flags anomalies by comparing inlet vs. outlet flow deltas in real time.",
      tech: [
        "ESP32",
        "YF-S201",
        "Arduino C++",
        "Node.js",
        "Socket.io",
        "MySQL",
        "React",
        "JWT",
      ],
      links: [
        {
          type: "Request Access",
          url: "mailto:johbutista004@gmail.com?subject=Private%20Project%20Access%20-%20WCAM",
        },
      ],
      featured: true,
      access: "private",
    },
    {
      id: 2,
      num: "002",
      tag: "Client · Web · UI",
      name: "Baumeister",
      category: "Client",
      image: baumeisterImage,
      description:
        "Contributed to a client website build focused on layout, responsive sections, and content structure polishing.",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      links: [
        {
          type: "Source Code",
          url: "https://github.com/thicien/Website-project",
        },
        {
          type: "Request Access",
          url: "mailto:johbutista004@gmail.com?subject=Project%20Access%20-%20Baumeister",
        },
      ],
    },
    {
      id: 3,
      num: "003",
      tag: "Client · Cargo · Logistics",
      name: "Great Hills",
      category: "Client",
      image: greatHillsImage,
      description:
        "Cargo and trunk management project built for Great Hills, focused on logistics workflows and internal operations.",
      tech: ["React", "Node.js", "PostgreSQL"],
      links: [
        {
          type: "Request Access",
          url: "mailto:johbutista004@gmail.com?subject=Private%20Project%20Access%20-%20Great%20Hills",
        },
      ],
      access: "private",
    },
    {
      id: 4,
      num: "004",
      tag: "Client · Operations",
      name: "Animal Management System",
      category: "Client",
      image: projectSample,
      description:
        "Operational platform for livestock tracking, health records, and inventory workflows. Built for a private client with role-based access and audit trails.",
      tech: ["React", "Node.js", "PostgreSQL"],
      links: [
        {
          type: "Request Access",
          url: "mailto:johbutista004@gmail.com?subject=Private%20Project%20Access%20-%20Animal%20Management%20System",
        },
      ],
      access: "private",
    },
    {
      id: 5,
      num: "005",
      tag: "Education · FinTech",
      name: "Kinini Sacco",
      category: "Education",
      image: kininiImage,
      description:
        "Digital banking management for community savings cooperatives. Member accounts, loan lifecycle tracking, and automated transaction records across multiple branches.",
      tech: ["Java", "MySQL", "JavaScript"],
      links: [
        {
          type: "Source Code",
          url: "https://github.com/mugisha12john/kinini-sacco-backend-using-java-learning",
        },
      ],
    },
    {
      id: 6,
      num: "006",
      tag: "Education · Java · JSP",
      name: "SPCMS",
      category: "Education",
      image: smartImage,
      description:
        "Smart Power & Cooling Management System - school-only platform with Spring Boot backend, JSP UI, and MySQL database for power usage control and equipment protection.",
      tech: ["Spring Boot", "Spring Security", "JPA", "JSP", "Bootstrap"],
      links: [
        {
          type: "Source Code",
          url: "https://github.com/jabo-arnold-landry/test-java-serlvlet",
        },
        {
          type: "School Access",
          url: "mailto:johbutista004@gmail.com?subject=Project%20Details%20-%20SPCMS",
        },
      ],
    },
    {
      id: 7,
      num: "007",
      tag: "Education · PHP · Feedback",
      name: "FeedUs",
      category: "Education",
      image: feedUsImage,
      description:
        "PHP + MySQL feedback management system for collecting service reviews and managing categories, services, and user feedback.",
      tech: ["PHP", "MySQL", "HTML", "CSS"],
      links: [
        {
          type: "Source Code",
          url: "https://github.com/mugisha12john/online_feedback_PHP",
        },
      ],
    },
    {
      id: 8,
      num: "008",
      tag: "Education · USSD · PHP",
      name: "Electric Token",
      category: "Education",
      image: electricTokenImage,
      description:
        "Demonstration of buying electric tokens via USSD using PHP logic and backend handling.",
      tech: ["PHP", "USSD", "HTML"],
      links: [
        {
          type: "Video",
          url: "https://youtu.be/r-P8eWClggs",
        },
        {
          type: "Source Code",
          url: "https://github.com/mugisha12john/Electric_token_PHP/blob/main/welcome.php",
        },
      ],
    },
    {
      id: 9,
      num: "009",
      tag: "Hackathon · Mentorship",
      name: "ElevateLink",
      category: "Hackathon",
      image: elevatePhpImage,
      description:
        "Full-featured mentorship platform built with PHP, MySQL, and TailwindCSS.",
      tech: ["PHP", "MySQL", "Tailwind CSS"],
      links: [
        {
          type: "Live",
          url: "https://my-elevatelink-app-14.infinityfree.me/?i=1",
        },
        {
          type: "Source Code",
          url: "https://github.com/mugisha12john/ElevateLInk_final_PHP",
        },
      ],
    },
    {
      id: 10,
      num: "010",
      tag: "Self · Landing Page",
      name: "Capgemini Clone",
      category: "Self",
      image: capgeminiImage,
      description:
        "Marketing website clone built with Tailwind CSS, focused on layout precision and responsive sections.",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      links: [
        {
          type: "Live",
          url: "https://capgemini-tailwindcss.netlify.app/",
        },
        {
          type: "Source Code",
          url: "https://github.com/mugisha12john/capgemini-clone-tailwindCss",
        },
      ],
    },
    {
      id: 11,
      num: "011",
      tag: "Self · E-commerce",
      name: "E-commerce Product Page",
      category: "Self",
      image: cartImage,
      description:
        "Interactive product page with cart functionality using vanilla JavaScript and TailwindCSS.",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      links: [
        {
          type: "Live",
          url: "https://e-commerce-project-js.netlify.app/",
        },
        {
          type: "Source Code",
          url: "https://github.com/mugisha12john/E-commerce-product-page-js",
        },
      ],
    },
    {
      id: 12,
      num: "012",
      tag: "Self · API",
      name: "Weather API",
      category: "Self",
      image: weatherImage,
      description:
        "Weather app built with JavaScript and TailwindCSS to practice promises and API fetching.",
      tech: ["JavaScript", "Tailwind CSS", "API"],
      links: [
        {
          type: "Live",
          url: "https://weather-app-api-1.netlify.app/",
        },
        {
          type: "Source Code",
          url: "https://github.com/mugisha12john/weather_app",
        },
      ],
    },
    {
      id: 13,
      num: "013",
      tag: "Self · React",
      name: "Lasles VPN",
      category: "Self",
      image: laslesImage,
      description: "Responsive landing page built with React and TailwindCSS.",
      tech: ["React", "Tailwind CSS"],
      links: [
        {
          type: "Live",
          url: "https://laslesvpna.netlify.app/",
        },
        {
          type: "Source Code",
          url: "https://github.com/mugisha12john/LaslesVPN",
        },
      ],
    },
    {
      id: 14,
      num: "014",
      tag: "Self · UI",
      name: "List Listing",
      category: "Self",
      image: listListingImage,
      description:
        "JavaScript-powered list manager with toggle and interaction states.",
      tech: ["JavaScript", "HTML", "CSS"],
      links: [
        {
          type: "Live",
          url: "https://stupendous-starship-46ab2d.netlify.app/",
        },
        {
          type: "Source Code",
          url: "https://github.com/mugisha12john/manage_list_toggle_on-off",
        },
      ],
    },
    {
      id: 15,
      num: "015",
      tag: "Self · UI",
      name: "Static Job Listing",
      category: "Self",
      image: staticJobImage,
      description:
        "Static job listing UI with JavaScript filtering and layout polish.",
      tech: ["JavaScript", "HTML", "CSS"],
      links: [
        {
          type: "Live",
          url: "https://static-job-listing-manager-js.netlify.app/",
        },
        {
          type: "Source Code",
          url: "https://github.com/mugisha12john/static-job-listings-master-js",
        },
      ],
    },
    {
      id: 16,
      num: "016",
      tag: "Self · Utility",
      name: "Age Calculator",
      category: "Self",
      image: ageCalculatorImage,
      description: "Age calculator built with JavaScript and TailwindCSS.",
      tech: ["JavaScript", "Tailwind CSS"],
      links: [
        {
          type: "Live",
          url: "https://leafy-hamster-9cc9eb.netlify.app/",
        },
        {
          type: "Source Code",
          url: "https://github.com/mugisha12john/Age-calculator",
        },
      ],
    },
    {
      id: 17,
      num: "017",
      tag: "Self · Travel",
      name: "Van Life",
      category: "Self",
      image: vanLifeImage,
      description:
        "Personal project documenting van travel routes, packing checklists, and budget tracking with a clean, mobile-first UI.",
      tech: ["React", "TypeScript", "Tailwind"],
      links: [
        {
          type: "Live",
          url: "https://vanlife-v2.netlify.app/",
        },
        {
          type: "Source Code",
          url: "https://github.com/mugisha12john/VanLife-Ts",
        },
      ],
    },
  ];

  const tabs = [
    { label: "All", value: "All" },
    { label: "Education", value: "Education" },
    { label: "Hackathon", value: "Hackathon" },
    { label: "Self", value: "Self" },
    { label: "Client", value: "Client" },
  ] as const;

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const previewProjectIds = new Set([1, 5, 9, 10]);
  const previewProjects = projects.filter((project) =>
    previewProjectIds.has(project.id),
  );

  const displayedProjects = showAll ? filteredProjects : previewProjects;

  return (
    <section id="projects" className="relative py-30 px-15 bg-bg-2">
      <div className="section-label font-mono text-[10px] text-green tracking-[0.25em] uppercase mb-4 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-px before:bg-green">
        Projects
      </div>

      <h2 className="section-title text-[clamp(32px,4vw,52px)] font-black leading-[1.1] tracking-[-0.02em] mb-15">
        Engineering
        <br />
        <span className="text-green">That Ships</span>
      </h2>

      {showAll && (
        <div className="projects-tabs flex flex-wrap items-center gap-2 mb-8">
          <span className="font-mono text-[10px] text-text-muted tracking-[0.2em] uppercase mr-2">
            Filter
          </span>
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveTab(tab.value)}
              className={`font-mono text-[10px] tracking-[0.12em] uppercase px-4 py-2 border transition-all ${
                activeTab === tab.value
                  ? "bg-green text-bg border-green"
                  : "text-text-muted border-[rgba(127,238,100,0.2)] hover:border-green hover:text-green"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      <div className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-px bg-[rgba(127,238,100,0.12)]">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            className={`project-card bg-bg-3 p-10 relative overflow-hidden transition-all duration-300 cursor-none hover:bg-bg-4 ${
              project.featured ? "lg:col-span-2" : ""
            }`}
            onMouseMove={handleMouseMove}
            style={
              project.featured
                ? {}
                : ({
                    "--mx": `${mousePosition.x}%`,
                    "--my": `${mousePosition.y}%`,
                  } as React.CSSProperties)
            }
          >
            {!project.featured && (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),rgba(127,238,100,0.15)_0%,transparent_60%)] opacity-0 transition-opacity duration-300 hover:opacity-100 pointer-events-none" />
            )}

            {project.featured && (
              <div className="featured-badge absolute top-8 right-8 font-mono text-[9px] text-bg bg-green px-3 py-1 tracking-[0.12em] uppercase">
                Featured
              </div>
            )}

            <div className={project.featured ? "lg:col-span-1" : ""}>
              <div className="project-num font-mono text-[11px] text-text-muted tracking-[0.15em] mb-4">
                {project.num}
              </div>

              <div className="project-tag inline-block font-mono text-[9px] text-green border border-[rgba(127,238,100,0.3)] px-2.5 py-1 tracking-[0.12em] uppercase mb-3.5">
                {project.tag}
              </div>

              {project.access === "private" && (
                <div className="inline-block font-mono text-[9px] text-text-muted border border-[rgba(127,238,100,0.2)] px-2.5 py-1 tracking-[0.12em] uppercase mb-3.5 ml-2">
                  Private
                </div>
              )}

              <h3 className="project-name text-[26px] font-black tracking-[-0.02em] mb-3">
                {project.name}
              </h3>

              <div className="project-image mb-4 w-125">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="   object-cover border border-[rgba(127,238,100,0.12)] rounded-sm"
                />
              </div>

              <p className="project-desc font-mono text-[12px] text-text-dim leading-[1.8] mb-5">
                {project.description}
              </p>

              <div className="project-tech flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="tech-pill font-mono text-[10px] text-text-muted border border-[rgba(127,238,100,0.12)] px-2.5 py-1 tracking-[0.08em]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links flex gap-4 relative z-10">
                {project.links.map((link, index) => {
                  const isExternal = link.url.startsWith("http");
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="proj-link font-mono text-[10px] text-green no-underline tracking-widest uppercase flex items-center gap-1.5 border-b border-[rgba(127,238,100,0.3)] pb-0.5 transition-all hover:text-white hover:border-white cursor-pointer"
                    >
                      {link.type}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        {!showAll ? (
          <button
            type="button"
            onClick={handleShowAll}
            className="font-mono text-[11px] text-bg bg-green px-6 py-3 tracking-[0.12em] uppercase transition-all hover:opacity-90"
          >
            View All Projects
          </button>
        ) : (
          <button
            type="button"
            onClick={handleShowLess}
            className="font-mono text-[11px] text-text-muted border border-[rgba(127,238,100,0.2)] px-6 py-3 tracking-[0.12em] uppercase transition-all hover:border-green hover:text-green"
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
