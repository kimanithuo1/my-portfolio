"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiGithub, FiExternalLink, FiFilter } from "react-icons/fi"

const ProjectsPage = () => {
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
      featured: true,
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
      featured: false,
    },
    {
      id: 3,
      title: "Form App",
      description: "A dynamic form application with validation, multi-step forms, and data submission capabilities.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["react", "tailwind"],
      github: "https://github.com/kimanithuo1/my-form-app",
      demo: "https://my-form-app-kimanithuos-projects.vercel.app",
      featured: true,
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
      featured: false,
    },
    {
      id: 5,
      title: "Shugame",
      description: "An interactive gaming platform with multiplayer capabilities and real-time score tracking.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["react", "api", "ui/ux"],
      github: "https://github.com/kimanithuo1/shugame",
      demo: "https://shugame-kimanithuos-projects.vercel.app",
      featured: false,
    },
    {
      id: 6,
      title: "Home Movers Nairobi",
      description:
        "A service platform connecting people with professional movers in Nairobi, featuring booking and tracking capabilities.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["react", "tailwind", "api"],
      github: "https://github.com/kimanithuo1/home-movers-nairobi",
      demo: "https://home-movers-nairobi-kimanithuos-projects.vercel.app",
      featured: true,
    },
    {
      id: 7,
      title: "Lustre Lux",
      description:
        "A jewelry e-commerce website with product catalog, shopping cart, and secure checkout functionality.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["react", "tailwind", "api"],
      github: "https://github.com/kimanithuo1/lustre-lux",
      demo: "https://lustre-lux-kimanithuos-projects.vercel.app",
      featured: true,
    },
    {
      id: 8,
      title: "Homenest Essentials",
      description:
        "A home decor and essentials e-commerce platform with product filtering and user account management.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["react", "tailwind", "api"],
      github: "https://github.com/kimanithuo1/homenest-essentials",
      demo: "https://homenest-essentials-kimanithuos-projects.vercel.app",
      featured: false,
    },
  ]

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
        ? projects.filter((project) => project.featured)
        : projects.filter((project) => project.tags.includes(filter))

  const filters = [
    { value: "all", label: "All Projects" },
    { value: "featured", label: "Featured" },
    { value: "react", label: "React" },
    { value: "tailwind", label: "Tailwind" },
    { value: "api", label: "API" },
    { value: "ui/ux", label: "UI/UX" },
  ]

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 pb-20 bg-[#F5D1D8]/10 dark:bg-[#1E293B]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#3D62C1] via-[#BB8698] to-[#F6AC28]">
            My Projects
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3D62C1] via-[#BB8698] to-[#F6AC28] mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of web development projects. Each project represents a unique challenge and showcases
            different skills and technologies.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex flex-wrap items-center bg-white dark:bg-[#121826] rounded-full px-2 py-1 shadow-sm">
            <FiFilter className="text-gray-500 dark:text-gray-400 ml-2 mr-2" />
            {filters.map((item) => (
              <button
                key={item.value}
                onClick={() => setFilter(item.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === item.value
                    ? "bg-gradient-to-r from-[#3D62C1] via-[#BB8698] to-[#F6AC28] text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-[#3D62C1] dark:hover:text-[#3D62C1]"
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
                className="bg-white dark:bg-[#121826] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D62C1]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full flex justify-between items-center">
                      <h3 className="text-white font-bold text-lg">{project.title}</h3>
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-[#F6AC28]/90 backdrop-blur-sm rounded-full text-white hover:bg-[#F6AC28] transition-colors"
                          aria-label="View GitHub repository"
                        >
                          <FiGithub />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-[#F6AC28]/90 backdrop-blur-sm rounded-full text-white hover:bg-[#F6AC28] transition-colors"
                          aria-label="View live demo"
                        >
                          <FiExternalLink />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#3D62C1] dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          tag === "react"
                            ? "bg-[#3D62C1]/10 text-[#3D62C1] dark:bg-[#3D62C1]/30 dark:text-blue-300"
                            : tag === "tailwind"
                              ? "bg-[#BB8698]/10 text-[#BB8698] dark:bg-[#BB8698]/30 dark:text-pink-300"
                              : tag === "api"
                                ? "bg-[#F6AC28]/10 text-[#F6AC28] dark:bg-[#F6AC28]/30 dark:text-yellow-300"
                                : "bg-[#F5D1D8]/20 text-[#BB8698] dark:bg-[#F5D1D8]/30 dark:text-pink-200"
                        }`}
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
      </div>
    </motion.main>
  )
}

export default ProjectsPage

