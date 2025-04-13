import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import Image from 'next/image'

const projects = [
  {
    title: "Web Content Summarizer",
    description: "A browser extension that uses LLMs to summarize selected content from webpages and PDFs. Perfect for researchers and readers who need quick summaries of lengthy content.",
    image: "/summarizer.png", // Updated file extension from .jpg to .png
    tags: ["Python", "Ollama", "LangChain", "JavaScript", "LLMs"],
    github: "https://github.com/dineshveguru/Website_summarizer",
    alt: "Web Content Summarizer project screenshot",
  },
  {
    title: "Resume Builder",
    description: "A React-based application that helps users create professional resumes with customizable templates. Features a drag-and-drop interface and PDF export functionality.",
    image: "/resume_builder.png", // Updated file extension from .jpg to .png
    tags: ["React JS", "Redux", "Styled Components", "PDF Generation"],
    github: "https://github.com/dineshveguru/resume-builder-remastered",
    demo: "https://dineshveguru.github.io/resume-builder-remastered/",
    alt: "Resume Builder application screenshot"
  }
]

const ProjectsSection = () => {
  // Generate structured data for projects
  const generateProjectStructuredData = () => {
    const itemList = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": projects.map((project, index) => ({
        "@type": "SoftwareApplication",
        "position": index + 1,
        "name": project.title,
        "description": project.description,
        "applicationCategory": "WebApplication", 
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/OnlineOnly",
          "price": "0", 
          "priceCurrency": "USD"
        },
        "author": {
          "@type": "Person",
          "name": "Dinesh"
        },
        "url": project.demo || project.github
      }))
    };
    
    return JSON.stringify(itemList);
  };

  return (
    <section id='projects' className="min-h-screen w-full flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        {/* Add structured data for projects */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateProjectStructuredData() }}
        />
        
        <SectionHeading>Projects</SectionHeading>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card overflow-hidden group"
              >
                {/* Project Image with Next.js Image optimization */}
                <div className="h-48 bg-background-alt rounded-lg mb-5 overflow-hidden relative">
                  {project.image ? (
                    <div className="relative h-full w-full">
                      <Image 
                        src={project.image}
                        alt={project.alt || project.title} 
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition duration-500 ease-in-out group-hover:scale-105 opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-dark/85 to-background-alt/85 flex items-center justify-center">
                        <h3 className="text-2xl font-bold text-center text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{project.title}</h3>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-dark/40 to-background-alt flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-center">{project.title}</h3>
                    </div>
                  )}
                </div>
                
                <div className="p-2">
                  <p className="text-text-secondary mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <motion.span 
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="glass-chip"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glass-button"
                      aria-label={`GitHub Repository for ${project.title}`}
                    >
                      <FiGithub />
                      <span className="sr-only">GitHub Repository</span>
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="glass-button"
                        aria-label={`Live Demo for ${project.title}`}
                      >
                        <FiExternalLink />
                        <span className="sr-only">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a 
              href="https://github.com/dineshveguru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-button px-6 py-3 inline-flex items-center"
            >
              <FiGithub className="mr-2" />
              <span>More Projects on GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
