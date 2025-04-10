"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';
import SectionHeading from './SectionHeading';

const GitHubActivitySection = () => {
  const [username] = useState('dineshveguru'); // Replace with your actual GitHub username
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Single neon blue color with increasing intensity
  const neonTheme = {
    dark: ['#2D2D2D', '#0A2342', '#126BCE', '#0D73FF', '#00BFFF'],
    light: ['#ebedf0', '#79C0FF', '#409EFF', '#1F6FEB', '#0A3069'],
  };

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="github-activity" className="min-h-[50vh] w-full flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <SectionHeading>GitHub Activity</SectionHeading>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="card p-6 w-full max-w-4xl mx-auto mb-6">
            <p className="text-text-secondary mb-8 text-center">
              My coding activity over the past year. Each block represents a day, and the color intensity indicates the level of contribution.
            </p>
            
            {isLoading ? (
              <div className="flex justify-center items-center h-60">
                <div className="animate-pulse text-purple-light">Loading calendar...</div>
              </div>
            ) : error ? (
              <div className="text-center text-red-400 py-8">
                <p>Couldn't load GitHub calendar. Please check back later.</p>
              </div>
            ) : (
              <div className="py-4 overflow-x-auto">
                <GitHubCalendar 
                  username={username}
                  theme={neonTheme}
                  blockSize={12}
                  blockMargin={4}
                  fontSize={12}
                  hideColorLegend={false}
                  hideMonthLabels={false}
                  labels={{
                    tooltip: "{{count}} contributions on {{date}}"
                  }}
                />
              </div>
            )}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a 
              href={`https://github.com/${username}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-button px-6 py-3 inline-flex items-center"
            >
              <span>View My Full GitHub Profile</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubActivitySection;