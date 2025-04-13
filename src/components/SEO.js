"use client";

import Head from 'next/head';
import { usePathname } from 'next/navigation';

export const SEO = ({ 
  title = "Dex | Portfolio",
  description = "Personal portfolio website showcasing my projects, skills, and professional experience in software development",
  keywords = "portfolio, web developer, software engineer, frontend, backend, fullstack",
  ogImage = "/d.png",
  ogType = "website",
  twitterCard = "summary_large_image"
}) => {
  const pathname = usePathname();
  const url = `https://dineshveguru.me${pathname}`; // Replace with your actual domain
  
  return (
    <Head>
      {/* Custom title tags for specific pages */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical link */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};