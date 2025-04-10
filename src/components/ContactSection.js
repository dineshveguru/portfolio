import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { InlineWidget } from 'react-calendly'
import { useState } from 'react'

const ContactSection = () => {
  const [showCalendly, setShowCalendly] = useState(false)

  return (
    <section id='contact' className="min-h-screen w-full flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <SectionHeading>Contact</SectionHeading>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="section-heading text-center mx-auto">Get In Touch</h2>
          
          <p className="text-text-secondary mb-12">
            I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-4 mb-12"
          >
            <a 
              href="mailto:dinesh@example.com" 
              className="glass-button p-4"
              aria-label="Email"
            >
              <FiMail className="text-lg" />
            </a>
            <a 
              href="https://github.com/dinesh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-button p-4"
              aria-label="GitHub"
            >
              <FiGithub className="text-lg" />
            </a>
            <a 
              href="https://linkedin.com/in/dinesh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-button p-4"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-lg" />
            </a>
            <a 
              href="https://twitter.com/dinesh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-button p-4"
              aria-label="Twitter"
            >
              <FiTwitter className="text-lg" />
            </a>
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            <motion.a
              href="mailto:dinesh@example.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="glass-button px-8 py-4 bg-purple-dark/50 inline-block"
            >
              Say Hello 👋
            </motion.a>
            
            <motion.button
              onClick={() => setShowCalendly(!showCalendly)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="glass-button px-8 py-4 bg-purple-dark/50 inline-block"
            >
              {showCalendly ? 'Hide Scheduler' : 'Schedule a Meeting 📅'}
            </motion.button>
          </div>
          
          {showCalendly && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full rounded-lg overflow-hidden shadow-lg glass-card p-2 mb-12"
            >
              <InlineWidget 
                url="https://calendly.com/dineshveguru" 
                styles={{
                  height: '650px',
                  width: '100%',
                }}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
