import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const SectionHeading = ({ children }) => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: false, amount: 0.5 });
  const lineControls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      lineControls.start('visible');
    } else {
      lineControls.start('hidden');
    }
  }, [isInView, lineControls]);
  
  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: '80%', // Make the underline 80% of the width of its container
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };
  
  return (
    <div className="mb-16" ref={headingRef}>
      <div className="inline-block">
        <h2 className="text-4xl font-semibold">
          {children}
        </h2>
        <motion.div 
          className="h-px bg-gray-300/70 mt-2 mx-auto"
          initial="hidden"
          animate={lineControls}
          variants={lineVariants}
        />
      </div>
    </div>
  );
};

export default SectionHeading;