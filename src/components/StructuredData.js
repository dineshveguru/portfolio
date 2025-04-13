"use client";

import { useEffect, useState } from 'react';

export const StructuredData = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Personal data
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dex",
    "url": "https://dineshveguru.me", // Replace with your actual domain
    "sameAs": [
      // Replace with your actual social media profiles
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourprofile",
      "https://twitter.com/yourhandle"
    ],
    "jobTitle": "Software Developer",
    "description": "Software developer specializing in web development with expertise in various technologies",
    "knowsAbout": ["Web Development", "JavaScript", "React", "Next.js"]
  };

  // Website data
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://dineshveguru.me", // Replace with your actual domain
    "name": "Dex Portfolio",
    "description": "Personal portfolio website showcasing my projects, skills, and professional experience in software development"
  };

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }} 
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }} 
      />
    </>
  );
};