"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiGithub, FiExternalLink, FiFilter } from "react-icons/fi"

const Projects = () => {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "My Portfolio",
      description:
        "A personal portfolio website showcasing my projects, skills, and experience as a frontend developer.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["react", "tailwind", "ui/ux"],
      github: "https://github.com/kimanithuo1/my-portfolio",
      demo: "https://my-portfolio-kimanithuos-projects.vercel.app",
    },
    {
      id: 2,
      title: "Nurse Shelf",
      description:
        "A platform for healthcare professionals to access resources, tools, and information to enhance their practice.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["react", "api"],
      github: "https://github.com/kimanithuo1/nurseshelf",
      demo: "https://nurseshelf-kimanithuos-projects.vercel.app",
    },
    {
      id: 3,
      title: "Form App",
      description: "A dynamic form application with validation, multi-step forms, and data submission capabilities.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["react", "tailwind"],
      github: "https://github.com/kimanithuo1/my-form-app",
      demo: "https://my-form-app-kimanithuos-projects.vercel.app",
    },
    {
      id: 4,
      title: "Mauma Stories",
      description:
        "A storytelling platform that allows users to create, share, and discover stories from around the world.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["react", "api"],
      github: "https://github.com/kimanithuo1/maumaustories",
      demo: "https://maumaustories-kimanithuos-projects.vercel.app",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.tags.includes(filter))

  const filters = [
    { value: "all", label: "All" },
    { value: "react", label: "React" },
    { value: "tailwind", label: "Tailwind" },
    { value: "api", label: "API" },
    { value: "ui/ux", label: "UI/UX" },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece of development that showcases my skills
            and passion for web development.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center bg-white dark:bg-gray-800 rounded-full px-2 py-1 shadow-sm">
            <FiFilter className="text-gray-500 dark:text-gray-400 ml-2" />
            {filters.map((item) => (
              <button
                key={item.value}
                onClick={() => setFilter(item.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === item.value
                    ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full flex justify-between items-center">
                      <h3 className="text-white font-bold text-lg">{project.title}</h3>
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                          aria-label="View GitHub repository"
                        >
                          <FiGithub />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                          aria-label="View live demo"
                        >
                          <FiExternalLink />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12">
          <a
            href="https://github.com/kimanithuo1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <button className="px-6 py-3 rounded-full border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 font-medium hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-colors inline-flex items-center gap-2">
              <FiGithub className="w-5 h-5" />
              <span>View More Projects on GitHub</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects

