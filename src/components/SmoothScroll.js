'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

// Configuration for the smooth scroll
const DEFAULT_SPRING_CONFIG = {
  damping: 20,      // Resistance - higher means less oscillation
  stiffness: 100,   // Spring strength - higher means faster initial movement
  mass: 1.2,        // Weight feeling - higher means more momentum
  restDelta: 0.01   // Stopping threshold - smaller means more precise stopping
};

export default function SmoothScroll({ 
  children,
  springConfig = DEFAULT_SPRING_CONFIG,
  enabled = true
}) {
  // Create reference for the outer container
  const containerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  // Add state to detect mobile devices
  const [isMobile, setIsMobile] = useState(false);
  
  // Get scroll values
  const { scrollY } = useScroll();
  
  // Apply spring physics to the scrollY value
  const smoothScrollY = useSpring(scrollY, springConfig);
  
  // Create a transform to move content in opposite direction of scroll
  const y = useTransform(smoothScrollY, (value) => -value);
  // FIXME: The navbar options are different from the desktop one in mobile
  useEffect(() => {
    // Skip during SSR
    if (typeof window === 'undefined') return;
    
    // Check if device is mobile
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };
    
    // Initial check
    checkMobile();
    
    // Force immediate scroll to top on mount
    window.scrollTo(0, 0);
    
    // Wait for a tiny bit to ensure everything is rendered
    const initTimer = setTimeout(() => {
      setIsReady(true);
      
      // Only modify body height for desktop
      if (containerRef.current && !isMobile) {
        const contentHeight = containerRef.current.scrollHeight;
        document.body.style.height = `${contentHeight}px`;
      }
    }, 100);
    
    // Track initial scroll position
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 10) {
        setHasScrolled(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // This function will measure and set the body height to match content
    const updateBodyHeight = () => {
      // First check if device is mobile
      checkMobile();
      
      // Only proceed with smooth scroll for non-mobile
      if (!containerRef.current || !isReady) return;
      
      // Only set body height for desktop devices
      if (!isMobile) {
        const contentHeight = containerRef.current.scrollHeight;
        document.body.style.height = `${contentHeight}px`;
      } else {
        // Reset for mobile
        document.body.style.height = '';
      }
    };
    
    // Update height on resize with debounce
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateBodyHeight, 100);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Create a MutationObserver to detect content changes
    const observer = new MutationObserver(() => {
      if (isReady && !isMobile) {
        updateBodyHeight();
      }
    });
    
    // Start observing the container for content changes
    if (containerRef.current && !isMobile) {
      observer.observe(containerRef.current, {
        childList: true,
        subtree: true,
        attributes: true
      });
    }
    
    // Custom smooth scroll to section when clicking anchor links
    const handleAnchorClick = (e) => {
      if (!enabled) return;
      
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Get the navbar height to offset the scroll position
          const navbar = document.querySelector('nav');
          const navbarHeight = navbar ? navbar.offsetHeight : 0;
          
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };
    
    // Add event listeners to anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick, { passive: false });
    });
    
    // Cleanup function
    return () => {
      clearTimeout(initTimer);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
      document.body.style.height = '';
    };
  }, [enabled, isReady, hasScrolled, isMobile]);
  
  // Return regular children for mobile or when smooth scroll is disabled
  if (!enabled || isMobile) {
    return <>{children}</>;
  }
  
  return (
    <motion.div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: 'auto',
        willChange: 'transform',
        y: isReady ? y : 0,
        // Add top padding to account for the navbar height
        paddingTop: '64px', // Approximate navbar height, adjust as needed
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isReady ? 1 : 0
      }}
      transition={{
        opacity: { duration: 0.3 }
      }}
    >
      {children}
    </motion.div>
  );
}