import Header from "./components/common/Header";
import Hero from "./components/sections/hero/Hero";
import About from "./components/sections/about/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/projects/Projects";
import Awards from "./components/sections/Awards";
import Skills from "./components/sections/skills/Skills";
import Contact from "./components/sections/contanct/Contact";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Awards />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
