/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Platforms from "./components/Platforms";
import Books from "./components/Books";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-navy overflow-x-hidden selection:bg-gold selection:text-navy">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-50 origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-12 md:py-20">
          <About />
        </section>

        <section id="experience" className="bg-navy-light/30 py-12 md:py-20">
          <Experience />
        </section>

        <section id="education" className="py-12 md:py-20">
          <Education />
        </section>

        <section id="platforms" className="bg-navy-light/30 py-12 md:py-20">
          <Platforms />
        </section>

        <section id="books" className="bg-navy-light/30 py-12 md:py-20">
          <Books />
        </section>

        <section id="skills" className="py-12 md:py-20">
          <Skills />
        </section>

        <section id="contact" className="bg-navy-light/30 py-12 md:py-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
