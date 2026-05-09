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
  .text("johbutista004@gmail.com  |  +250 784 961 277  |  Kigali, Rwanda", {
    align: "center",
  });
doc
  .font("Helvetica")
  .fontSize(10)
  .text("LinkedIn: linkedin.com/in/jean-baptiste-mugisha-034b932a1", {
    align: "center",
    link: "https://www.linkedin.com/in/jean-baptiste-mugisha-034b932a1",
  });
doc.text("GitHub: github.com/mugisha12john", {
  align: "center",
  link: "https://github.com/mugisha12john",
});

// --- SUMMARY ---
drawSectionHeader("Summary");
doc
  .font("Helvetica")
  .fontSize(10)
  .text(
    "Full-stack and IoT engineer focused on building reliable web applications and hardware-integrated systems. Experienced with React, Node.js, TypeScript, and ESP32, delivering real-time dashboards, scalable services, and user-centered interfaces. Known for clean architecture, strong execution, and cross-functional collaboration.",
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
  "Leading a 6-person cross-functional team building WCAM, an IoT water monitoring platform for rural communities",
);
drawBullet(
  "Owned system architecture, integrating ESP32 firmware with a React dashboard",
);
drawBullet("Delivered real-time dashboards and a 3-tier RBAC security design");
doc.moveDown();

drawTwoColumn(
  "The Gym Rwanda",
  "Software Engineering Trainee",
  "Rwanda",
  "2025 - Present",
);
drawBullet(
  "Training on React, TypeScript, Node.js, and system architecture through project-based delivery",
);
drawBullet(
  "Collaborated on full-stack features and UI workflows with focus on code quality",
);
doc.moveDown();

// --- PROJECTS ---
drawSectionHeader("Projects");

drawProjectHeader(
  "WCAM (Water Community Administration & Monitoring)",
  "Private (request access)",
);
drawBullet(
  "Developed a full-stack IoT platform pairing ESP32 microcontrollers with flow sensors",
);
drawBullet(
  "Engineered a leak-detection algorithm flagging anomalies via real-time delta tracking",
);
drawBullet("Tech: Node.js, React, TypeScript, Socket.io, MySQL, ESP32");
doc.moveDown();

drawProjectHeader("SPCMS (Smart Power & Cooling)", "GitHub");
drawBullet(
  "School platform for power usage control and equipment protection with Spring Boot and JSP",
);
drawBullet("Tech: Spring Boot, Spring Security, JPA, JSP, MySQL");
doc.moveDown();

drawProjectHeader("ElevateLink", "Live Demo — GitHub");
drawBullet(
  "Mentorship platform built with PHP, MySQL, and TailwindCSS for learner guidance",
);
drawBullet("Tech: PHP, MySQL, Tailwind CSS");
doc.moveDown();

drawProjectHeader("Capgemini Clone", "Live Demo — GitHub");
drawBullet(
  "Responsive marketing site clone focused on layout precision and UI consistency",
);
drawBullet("Tech: HTML, Tailwind CSS, JavaScript");
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
