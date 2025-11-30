import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import RevealOnScroll from './components/RevealOnScroll';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>
            <RevealOnScroll>
              <Hero />
            </RevealOnScroll>
            <RevealOnScroll>
              <About />
            </RevealOnScroll>
            <RevealOnScroll>
              <Skills />
            </RevealOnScroll>
            <RevealOnScroll>
              <Projects />
            </RevealOnScroll>
            <RevealOnScroll>
              <Experience />
            </RevealOnScroll>
            <RevealOnScroll>
              <Contact />
            </RevealOnScroll>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
