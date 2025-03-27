'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const NavItem = ({ href, text }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link href={href} className="relative px-3 py-2 group">
      <span className="text-text-secondary hover:text-text-primary transition-colors">{text}</span>
      <motion.span 
        className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-light"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </Link>
  </motion.div>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b border-white/10 p-2 transition-all duration-300 ${
        scrolled ? 'bg-background/80 shadow-lg' : 'bg-background/5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="text-2xl font-bold glow-text">
            D<span className="text-purple-light">.</span>
          </Link>
        </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavItem href="#home" text="Home" />
          <NavItem href="#about" text="About" />
          <NavItem href="#experience" text="Experience" />
          <NavItem href="#projects" text="Projects" />
          <NavItem href="#skills" text="Skills" />
          <NavItem href="#contact" text="Contact" />
        </div>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden glass-button p-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background-alt/95 backdrop-blur-lg overflow-hidden"
          >
            <motion.div 
              className="container mx-auto px-4 py-6 flex flex-col space-y-4"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <NavItem href="#home" text="Home" />
              <NavItem href="#about" text="About" />
              <NavItem href="#experience" text="Experience" />
              <NavItem href="#projects" text="Projects" />
              <NavItem href="#skills" text="Skills" />
              <NavItem href="#contact" text="Contact" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
