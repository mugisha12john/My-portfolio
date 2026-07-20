import wcamImage from "../../assets/wcam.webp";
import smartImage from "../../assets/smart.webp";
import baumeisterImage from "../../assets/baumeister.webp";
import greatHillsImage from "../../assets/great hills.webp";
import kininiImage from "../../assets/kinini-sacco java.webp";
import feedUsImage from "../../assets/feedus.webp";
import electricTokenImage from "../../assets/electronic token ntuma app.webp";
import elevatePhpImage from "../../assets/elevate php.webp";
import capgeminiImage from "../../assets/capgemini.webp";
import cartImage from "../../assets/cart.webp";
import weatherImage from "../../assets/weather.webp";
import laslesImage from "../../assets/lasles vpn.webp";
import listListingImage from "../../assets/list listing.webp";
import staticJobImage from "../../assets/static job.webp";
import ageCalculatorImage from "../../assets/age calculator.webp";
import vanLifeImage from "../../assets/van life.webp";

export interface Project {
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

export const projects: Project[] = [
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
        url: "mailto:johnbutista004@gmail.com?subject=Private%20Project%20Access%20-%20WCAM",
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
        url: "mailto:johnbutista004@gmail.com?subject=Project%20Access%20-%20Baumeister",
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
        url: "mailto:johnbutista004@gmail.com?subject=Private%20Project%20Access%20-%20Great%20Hills",
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
    image: wcamImage,
    description:
      "Operational platform for livestock tracking, health records, and inventory workflows. Built for a private client with role-based access and audit trails.",
    tech: ["React", "Node.js", "PostgreSQL"],
    links: [
      {
        type: "Request Access",
        url: "mailto:johnbutista004@gmail.com?subject=Private%20Project%20Access%20-%20Animal%20Management%20System",
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
        url: "mailto:johnbutista004@gmail.com?subject=Project%20Details%20-%20SPCMS",
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

export const tabs = [
  { label: "All", value: "All" },
  { label: "Education", value: "Education" },
  { label: "Hackathon", value: "Hackathon" },
  { label: "Self", value: "Self" },
  { label: "Client", value: "Client" },
] as const;

export const previewProjectIds = new Set([1, 5, 9, 10]);

export default projects;
