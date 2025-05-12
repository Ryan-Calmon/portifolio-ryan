// src/components/LoadingScreen.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/LoadingScreen.css';

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-screen"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: '-100%', opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1,duration: 1.2, ease: 'easeInOut' }}
        >
          <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96" width="80" height="80">
            <title>Logo</title>
            <g transform="translate(-8.000000, -2.000000)">
              <g transform="translate(11.000000, 5.000000)">
                <polygon
                  stroke="#64ffda"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="39 0 0 22 0 67 39 90 78 68 78 23"
                  fill="none"
                />
                <text x="38" y="45" dominantBaseline="middle" textAnchor="middle" fontSize="30" fill="#64ffda">R</text>
              </g>
            </g>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
