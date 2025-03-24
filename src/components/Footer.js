import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-8 text-center text-text-muted border-t border-purple-dark/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>Designed & Built by Dinesh</p>
          <p className="text-sm mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
        </motion.div>
      </div>
    </footer>
  )
}
