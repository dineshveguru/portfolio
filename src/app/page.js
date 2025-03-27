"use client";

import Image from "next/image";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ErrorBoundary from "../components/ErrorBoundary";
import SmoothScroll from "../components/SmoothScroll";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <ErrorBoundary>
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
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
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
