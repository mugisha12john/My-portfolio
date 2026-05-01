import Header from "./components/common/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Awards from "./components/sections/Awards";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
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
