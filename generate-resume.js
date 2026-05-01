import PDFDocument from "pdfkit";
import fs from "fs";

const doc = new PDFDocument({ margin: 50, size: "A4" });
doc.pipe(fs.createWriteStream("./public/myresume.pdf"));

// Helper for two-column header
const drawTwoColumn = (left1, left2, right1, right2) => {
  const startY = doc.y;

  // Left side
  doc.font("Helvetica-Bold").fontSize(11).text(left1, 50, startY);
  doc.font("Helvetica-Oblique").fontSize(10).text(left2, 50, doc.y);

  // Right side
  doc
    .font("Helvetica")
    .fontSize(10)
    .text(right1, 50, startY, { align: "right", width: 495 });
  doc
    .font("Helvetica-Oblique")
    .fontSize(10)
    .text(right2, 50, startY + 13, { align: "right", width: 495 });

  doc.moveDown();
};

const drawProjectHeader = (title, github) => {
  const startY = doc.y;
  doc.font("Helvetica-Bold").fontSize(11).text(title, 50, startY);
  doc
    .font("Helvetica")
    .fontSize(10)
    .text(github, 50, startY, { align: "right", width: 495 });
  doc.moveDown(0.2);
};

const drawBullet = (text) => {
  doc
    .font("Helvetica")
    .fontSize(10)
    .text(`•  ${text}`, 60, doc.y, { align: "left", width: 485, lineGap: 2 });
};

const drawSectionHeader = (title) => {
  doc.moveDown(0.5);
  doc.font("Helvetica-Bold").fontSize(14).text(title, 50, doc.y);
  doc.moveDown(0.2);
  doc.moveTo(50, doc.y).lineTo(545, doc.y).stroke();
  doc.moveDown(0.5);
};

// --- HEADER ---
doc
  .font("Helvetica-Bold")
  .fontSize(24)
  .text("Jean Baptiste Mugisha", 50, 50, { align: "center" });
doc
  .font("Helvetica")
  .fontSize(10)
  .text("johnbutista004@gmail.com  |  +250 (---) --- ----  |  Kigali, Rwanda", {
    align: "center",
  });
doc.text(
  "linkedin.com/in/jean-baptiste-mugisha-034b932a1  |  github.com/mugisha12john",
  { align: "center" },
);

// --- SUMMARY ---
drawSectionHeader("Summary");
doc
  .font("Helvetica")
  .fontSize(10)
  .text(
    "Full-Stack & IoT Engineer with experience crafting web and hardware-integrated applications using React.js, Node.js, TypeScript, and ESP32. Skilled in developing IoT platforms, scalable backend services, and interactive dashboards, having led cross-functional teams. Dedicated to writing clean code and creating resilient, user-focused digital infrastructure.",
    { align: "justify", lineGap: 3 },
  );

// --- EXPERIENCE ---
drawSectionHeader("Experience");

drawTwoColumn(
  "9Call Company",
  "Project Manager & Frontend Lead",
  "Kigali, Rwanda",
  "2026 - Present",
);
drawBullet(
  "Leading a 6-person cross-functional team building WCAM — an IoT water monitoring platform, enhancing data reliability for rural communities",
);
drawBullet(
  "Owned system architecture, integrating ESP32 firmware with a React.js dashboard",
);
drawBullet(
  "Managed full-stack state, incorporating real-time dashboards and a 3-tier RBAC security design",
);
doc.moveDown();

drawTwoColumn("Ishuri App", "Full-Stack Developer", "Remote", "2023 - 2024");
drawBullet(
  "Built custom web applications for local businesses and NGOs, delivering modern user experiences",
);
drawBullet(
  "Developed a complete Kinini Sacco banking system with a focus on transaction security",
);
drawBullet("Created early prototypes for the ElevateLink mentorship platform");
doc.moveDown();

// --- PROJECTS ---
drawSectionHeader("Projects");

drawProjectHeader(
  "WCAM (Water Community Administration & Monitoring)",
  "GitHub — Live Demo",
);
drawBullet(
  "Developed a full-stack IoT platform pairing ESP32 microcontrollers with flow sensors",
);
drawBullet(
  "Engineered a custom leak-detection algorithm flagging anomalies via real-time delta tracking",
);
drawBullet(
  "Tech: Node.js, Express, React, TypeScript, Tailwind CSS, Built-in IoT integration",
);
doc.moveDown();

drawProjectHeader("Suzuma App", "GitHub — Live Demo");
drawBullet(
  "Built an intuitive, secure authentication backend with Next.js and Firebase",
);
drawBullet("Designed accessible interfaces and fast data fetching using React");
drawBullet("Tech: Next.js, React, Tailwind CSS, Supabase");
doc.moveDown();

// --- EDUCATION ---
drawSectionHeader("Education");

drawTwoColumn(
  "RP Kigali College",
  "Bachelor's in Information Technology",
  "Kigali, Rwanda",
  "2022 - 2025",
);
drawBullet(
  "Focused on software engineering, embedded systems, and database architecture",
);
doc.moveDown();

drawTwoColumn(
  "KOICA Program",
  "IoT & Embedded Systems Training",
  "Rwanda",
  "2025",
);
drawBullet(
  "Placed 1st in IoT project team competition and 2nd in overall game challenge",
);

// --- SKILLS ---
drawSectionHeader("Skills");

doc
  .font("Helvetica-Bold")
  .fontSize(10)
  .text("Languages: ", { continued: true })
  .font("Helvetica")
  .text("JavaScript (ES6+), TypeScript, C++, Python, HTML5, CSS3");
doc.moveDown(0.3);
doc
  .font("Helvetica-Bold")
  .text("Frontend: ", { continued: true })
  .font("Helvetica")
  .text("React.js, Next.js, Tailwind CSS, Vite, Redux");
doc.moveDown(0.3);
doc
  .font("Helvetica-Bold")
  .text("Backend: ", { continued: true })
  .font("Helvetica")
  .text("Node.js, Express.js, RESTful APIs, Supabase, MySQL/MongoDB");
doc.moveDown(0.3);
doc
  .font("Helvetica-Bold")
  .text("Tools: ", { continued: true })
  .font("Helvetica")
  .text("Git, Docker, Vercel, Postman, ESP-IDF, Arduino IDE");

doc.end();
console.log("PDF Generated Successfully at public/myresume.pdf");
