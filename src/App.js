import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import Particles from './components/Particles'; // <- use esse
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // dura 2.4s antes de esconder
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
      if (!isLoading) {
    const light = document.getElementById('cursor-light');
    const handleMouseMove = (e) => {
      if (light) {
        light.style.left = `${e.clientX}px`;
        light.style.top = `${e.clientY}px`;
      }
   
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
     }
  }, [isLoading]);

  return (
     <>
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div id="cursor-light" />
          <Header />
          <div className="container">
            <Home />
            <About />
            <Projects />
            <Contact />
              <div style={{ width: '100%', height: '600px', position: 'relative' }}>
       <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
          </div>
        </motion.div>
        
      )}
    
    </>
  );
}

export default App;
