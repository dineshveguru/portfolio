'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const NavItem = ({ href, text }) => (
  <Link href={href} className="relative px-3 py-2 group">
    <span className="text-text-secondary hover:text-text-primary transition-colors">{text}</span>
    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
  </Link>
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/5 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold glow-text">D<span className="text-purple-light">.</span></Link>
        
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
        <button 
          className="md:hidden glass-button p-2" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background-alt/95 backdrop-blur-lg"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <NavItem href="#home" text="Home" />
            <NavItem href="#about" text="About" />
            <NavItem href="#experience" text="Experience" />
            <NavItem href="#projects" text="Projects" />
            <NavItem href="#skills" text="Skills" />
            <NavItem href="#contact" text="Contact" />
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
