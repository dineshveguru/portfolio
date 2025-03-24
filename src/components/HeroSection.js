'use client'

import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] w-full flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mt-[-4rem]"
        >
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-purple-light mb-4"
          >
            Hello there, I&apos;m
          </motion.h2>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 glow-text"
          >
            Dinesh
          </motion.h1>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative mb-8 inline-block"
          >
            <h3 className="text-2xl md:text-3xl font-medium text-text-secondary">
              AI & Data Science Engineer
            </h3>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-light/50 rounded-full"></div>
          </motion.div>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-xl mx-auto text-text-muted mb-12 px-4"
          >
            Crafting intelligent solutions with LLMs & data science magic. ✨ 
            Turning complex problems into elegant, AI-powered experiences.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 px-4"
          >
            <Link href="#about" className="glass-button px-6 py-3 flex items-center justify-center">
              <span>Discover my work</span>
            </Link>
            <Link href="#contact" className="glass-button px-6 py-3 bg-purple-dark/50">
              Get in touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link href="#about" className="flex flex-col items-center text-text-secondary hover:text-text-primary transition-colors">
          <span className="mb-2 text-sm">Scroll down</span>
          <motion.div 
            animate={{ y: [0, 5, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FiArrowDown className="text-purple-light" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
