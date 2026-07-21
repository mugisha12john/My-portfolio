import React from 'react'
import Hero from '../components/sections/hero/Hero'
import About from '../components/sections/about/About'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/projects/Projects'
import Awards from '../components/sections/Awards'
import Skills from '../components/sections/skills/Skills'
import Contact from '../components/sections/contanct/Contact'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Awards />
      <Skills />
      <Contact />
    </div>
  )
}

export default Home
