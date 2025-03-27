import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiCloud, FiCpu, FiLayers } from 'react-icons/fi'
import SectionHeading from './SectionHeading'

const skillCategories = [
  {
    name: "Programming",
    icon: <FiCode />,
    skills: ["Python", "JavaScript", "TypeScript", "HTML/CSS"]
  },
  {
    name: "Data & AI",
    icon: <FiCpu />,
    skills: ["LangChain", "PyTorch", "TensorFlow", "LLM Fine-tuning", "Prompt Engineering"]
  },
  {
    name: "Frontend",
    icon: <FiLayers />,
    skills: ["React JS", "Redux", "Next.js", "Tailwind CSS"]
  },
  {
    name: "Backend",
    icon: <FiDatabase />,
    skills: ["Node JS", "MongoDB", "SQL", "RESTful APIs"]
  },
  {
    name: "DevOps & Tools",
    icon: <FiCloud />,
    skills: ["AWS", "Linux", "Git", "Docker", "Ollama"]
  }
]

const SkillsSection = () => {
  return (
    <section id='skills' className="min-h-screen w-full flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <SectionHeading>Skills</SectionHeading>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-text-secondary max-w-3xl mb-12">
            Here are the technologies and tools I've been working with. I'm constantly learning and expanding my skillset to stay at the cutting edge of AI and web development.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card flex flex-col h-full"
              >
                <div className="flex items-center mb-4">
                  <div className="glass-button bg-purple-dark/50 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-2 flex-1">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="glass-chip"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-text-muted italic">
              "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
