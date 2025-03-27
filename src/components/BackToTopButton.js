'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Get the hero section height to determine when to show the button
    const checkScrollPosition = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroHeight - 100);
      }
    };

    window.addEventListener('scroll', checkScrollPosition);
    // Initial check
    checkScrollPosition();

    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 p-4 rounded-full glass-effect z-50 hover:bg-purple-dark/30 group transition-all shadow-lg"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-purple-light group-hover:text-cyan-400 transition-colors relative"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))',
            }}
          >
            <FiArrowUp size={28} className="glow-icon" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;