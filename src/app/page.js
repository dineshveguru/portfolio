"use client";

import Image from "next/image";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import GitHubActivitySection from "../components/GitHubActivitySection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BackToTopButton from "../components/BackToTopButton";
import ErrorBoundary from "../components/ErrorBoundary";
import SmoothScroll from "../components/SmoothScroll";
import { motion } from "framer-motion";
import { StructuredData } from "../components/StructuredData";

export default function Home() {
  return (
    <ErrorBoundary>
      {/* Add structured data for this page */}
      <StructuredData />
      
      {/* Navbar placed outside of SmoothScroll to ensure it stays fixed */}
      <Navbar />
      <BackToTopButton />
      
      <SmoothScroll>
        <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
          {/* Fixed gradient background with subtle animation */}
          
          {/* Content with subtle backdrop blur */}
          {/* <motion.div 
            className="content-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          > */}
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <GitHubActivitySection />
            <ExperienceSection />
            <SkillsSection />
            <ContactSection />
            <Footer />
          {/* </motion.div> */}
        </div>
      </SmoothScroll>
    </ErrorBoundary>
  );
}

//TODO: Change the cursor to circle