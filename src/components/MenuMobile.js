import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/MenuMobile.css';

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <>
      <button className="menu-toggle" onClick={toggleMenu}>☰</button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="backdrop"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5, }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Menu */}
            <motion.div
              className="menuMobile"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="btnFechar" onClick={toggleMenu}>✖</div>
              <div className="navbarMobile">
                <nav>
                  <ul>
                    <li><a href="#about" onClick={toggleMenu}>Sobre</a></li>
                    <li><a href="#projects" onClick={toggleMenu}>Projetos</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contato</a></li>
                  </ul>
                </nav>
                <a
                  className="btn-curriculo-mobile"
                  href="/Curriculum.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Currículo
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuMobile;
