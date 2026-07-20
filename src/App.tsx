import React, { Suspense, useEffect, useState } from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import CustomCursor from "./components/sections/hero/CustomCursor";
import { Routes, Route, Navigate } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ExperiencePage = React.lazy(() => import("./pages/ExperiencePage"));
const ProjectsPage = React.lazy(() => import("./pages/ProjectsPage"));
const AwardsPage = React.lazy(() => import("./pages/AwardsPage"));
const SkillsPage = React.lazy(() => import("./pages/SkillsPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative">
      <Header />
      <CustomCursor mousePosition={mousePosition} />
      <main id="main">
        <Suspense fallback={<div className="py-20 text-center">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/awards" element={<AwardsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
