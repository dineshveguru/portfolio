import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import SectionHeading from './SectionHeading'

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
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
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
