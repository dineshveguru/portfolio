"use client";

import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiDatabase } from 'react-icons/fi'
import SectionHeading from './SectionHeading'

const AboutSection = () => {
  return (
    <section id='about' className="min-h-screen w-full flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <SectionHeading>About Me</SectionHeading>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <p className="text-lg text-text-secondary mb-6">
                Hey there! I'm <span className="text-white font-semibold">Dinesh</span>, an AI & Data Science Engineer with a passion for building intelligent systems that solve real-world problems.
              </p>
              
              <p className="text-text-secondary mb-6">
                I specialize in <span className="text-purple-light">Language Models (LLMs)</span> and have over a year of hands-on experience working with cutting-edge AI technologies. From prompt engineering to model fine-tuning, I love diving deep into the fascinating world of artificial intelligence.
              </p>
              
              <p className="text-text-secondary mb-6">
                I recently completed my <span className="text-white font-medium">B.Tech in Computer Science Engineering</span> from JNTUA College of Engineering, Pulivendula (2024) where I built a strong foundation in software development and data science principles.
              </p>
              
              <p className="text-text-secondary">
                When I'm not training models, you'll find me exploring new technologies, contributing to open-source, or turning coffee into code. I believe in building systems that are not just intelligent, but also ethical and accessible to everyone.
              </p>
            </div>
            
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                {/* Card 1 */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="card"
                >
                  <div className="flex items-center mb-4">
                    <div className="glass-button mr-4">
                      <FiCode className="text-lg" />
                    </div>
                    <h3 className="text-xl font-semibold">AI Developer</h3>
                  </div>
                  <p className="text-text-muted">
                    Building intelligent systems that understand and generate human language.
                  </p>
                </motion.div>
                
                {/* Card 2 */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="card"
                >
                  <div className="flex items-center mb-4">
                    <div className="glass-button mr-4">
                      <FiCpu className="text-lg" />
                    </div>
                    <h3 className="text-xl font-semibold">LLM Specialist</h3>
                  </div>
                  <p className="text-text-muted">
                    Fine-tuning and prompting language models for specific use cases.
                  </p>
                </motion.div>
                
                {/* Card 3 */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="card"
                >
                  <div className="flex items-center mb-4">
                    <div className="glass-button mr-4">
                      <FiDatabase className="text-lg" />
                    </div>
                    <h3 className="text-xl font-semibold">Data Engineer</h3>
                  </div>
                  <p className="text-text-muted">
                    Creating data pipelines and infrastructure for AI systems.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
