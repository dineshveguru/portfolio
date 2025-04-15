'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'
import { useTheme } from './ThemeProvider'

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
  const { theme } = useTheme()
  const [currentLogo, setCurrentLogo] = useState('/d.png')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Update logo based on theme
    if (theme === 'dark') {
      setCurrentLogo('/d_dark.png')
    } else if (theme === 'light') {
      setCurrentLogo('/d_light.png')
    } else if (theme === 'system') {
      // Check system preference
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      setCurrentLogo(systemTheme === 'dark' ? '/d_dark.png' : '/d_light.png')
    }
  }, [theme])

  // Add listener for system theme changes when in system mode
  useEffect(() => {
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      
      const handleChange = () => {
        setCurrentLogo(mediaQuery.matches ? '/d_dark.png' : '/d_light.png')
      }
      
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme])

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
          <Link href="/" className="flex items-center">
            <div className="relative h-8 w-8">
              <Image 
                src={currentLogo} 
                alt="Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavItem href="#home" text="Home" />
          <NavItem href="#about" text="About" />
          <NavItem href="#projects" text="Projects" />
          <NavItem href="#experience" text="Experience" />
          <NavItem href="#skills" text="Skills" />
          <NavItem href="#contact" text="Contact" />
          <ThemeToggle />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <motion.button 
            className="glass-button p-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
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
              <NavItem href="#projects" text="Projects" />
              <NavItem href="#experience" text="Experience" />
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
