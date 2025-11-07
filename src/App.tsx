"use client";

import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import SkillsSection from "./components/sections/SkillsSection";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import MouseEffect from "./components/ui/MouseEffect";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <MouseEffect />
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsSection />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;