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

export default function Home() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
        {/* Fixed gradient background */}
        <div className="gradient-background" />
        
        {/* Content with subtle backdrop blur */}
        <div className="content-section">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  );
}
