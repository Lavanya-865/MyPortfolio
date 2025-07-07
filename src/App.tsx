import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Resume from './components/Resume';
import Connect from './components/Connect';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import SectionDivider from './components/SectionDivider';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />
      <Header />
        <main>
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Interests />
          <SectionDivider />
          <Resume />
          <SectionDivider />
          <Connect />
        </main>

    </div>
  );
}

export default App;
