'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('system') // 'light', 'dark', or 'system'
  
  // Function to update the theme
  const setThemeValue = (value) => {
    if (value === 'system') {
      localStorage.removeItem('theme')
    } else {
      localStorage.setItem('theme', value)
    }
    setTheme(value)
  }
  
  // Get theme from localStorage or default to system on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])
  
  // Apply theme class to HTML element
  useEffect(() => {
    const html = document.documentElement
    
    // Remove old theme classes
    html.classList.remove('light', 'dark')
    
    // Determine and apply new theme
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      html.classList.add(systemTheme)
    } else {
      html.classList.add(theme)
    }
  }, [theme])
  
  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = () => {
      if (theme === 'system') {
        const newTheme = mediaQuery.matches ? 'dark' : 'light'
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(newTheme)
      }
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeValue }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}