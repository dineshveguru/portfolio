'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionHeading from './SectionHeading'

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0)
  
  const experiences = [
    {
      role: "Data Science Engineer",
      company: "ApexCura Healthcare IT",
      period: "2023 - Present",
      description: [
        "Developed and deployed LLM-based solutions for healthcare data analysis.",
        "Created prompting strategies to extract insights from medical texts.",
        "Fine-tuned language models for domain-specific healthcare applications.",
        "Built data pipelines for processing and analyzing patient records securely.",
        "Collaborated with cross-functional teams to implement AI-driven solutions."
      ],
      technologies: ["Python", "LangChain", "AWS", "SQL", "TensorFlow"]
    }
  ]
  
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading>Experience</SectionHeading>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {/* Tab navigation */}
            <div className="md:col-span-1">
              <div className="flex md:flex-col gap-4 mb-8 md:mb-0 overflow-x-auto md:overflow-visible">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    className={`whitespace-nowrap text-left px-4 py-3 rounded-lg border transition-all ${
                      activeTab === index 
                        ? 'border-purple-light bg-purple-dark/20 text-white' 
                        : 'border-transparent hover:border-purple-light/30 text-text-muted'
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {exp.company}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Experience content */}
            <div className="md:col-span-4">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="card bg-background-alt/50"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">
                    {experiences[activeTab].role} <span className="text-purple-light">@</span> {experiences[activeTab].company}
                  </h3>
                  <p className="text-text-muted mt-1">{experiences[activeTab].period}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {experiences[activeTab].description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-purple-light mr-2">▹</span>
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {experiences[activeTab].technologies.map((tech, i) => (
                    <motion.span 
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="glass-chip"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-text-secondary italic">
              "The best way to predict the future is to invent it." <span className="text-purple-light">– Alan Kay</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
