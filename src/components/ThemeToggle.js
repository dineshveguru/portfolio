'use client'

import { useTheme } from './ThemeProvider'
import { motion } from 'framer-motion'
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  
  const handleThemeChange = () => {
    // Cycle between light, dark, and system
    const nextTheme = {
      'light': 'dark',
      'dark': 'system',
      'system': 'light'
    }
    setTheme(nextTheme[theme])
  }
  
  // Determine which icon to show based on current theme
  const ThemeIcon = () => {
    switch(theme) {
      case 'light':
        return <FiSun className="text-yellow-400" />
      case 'dark':
        return <FiMoon className="text-blue-400" />
      default:
        return <FiMonitor className="text-gray-400" />
    }
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleThemeChange}
      className="p-2 rounded-full glass-effect"
      aria-label="Toggle theme"
      title={`Current theme: ${theme}`}
    >
      <ThemeIcon />
    </motion.button>
  )
}

export default ThemeToggle