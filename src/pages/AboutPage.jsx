"use client"

import { motion } from "framer-motion"
import About from "../components/About"
import { FiCode, FiDatabase, FiLayers, FiTool } from "react-icons/fi"

const AboutPage = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description:
        "Led the frontend development team in creating responsive web applications using React and modern JavaScript frameworks. Implemented best practices for code quality and performance optimization.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations Ltd.",
      period: "2018 - 2021",
      description:
        "Developed and maintained client websites and web applications. Collaborated with designers to implement UI/UX designs and ensure cross-browser compatibility.",
    },
    {
      title: "Web Developer Intern",
      company: "WebCraft Studios",
      period: "2017 - 2018",
      description:
        "Assisted in the development of websites and web applications. Gained experience in HTML, CSS, JavaScript, and responsive design principles.",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Nairobi",
      period: "2014 - 2018",
      description: "Focused on web development, algorithms, and software engineering principles.",
    },
    {
      degree: "Frontend Web Development Certification",
      institution: "Udacity",
      period: "2017",
      description: "Completed an intensive program covering modern frontend development technologies and practices.",
    },
  ]

  const services = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Web Development",
      description: "Building responsive and performant websites and web applications using modern technologies.",
    },
    {
      icon: <FiLayers className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces and experiences.",
    },
    {
      icon: <FiDatabase className="w-6 h-6" />,
      title: "API Integration",
      description: "Connecting your frontend applications with backend services and third-party APIs.",
    },
    {
      icon: <FiTool className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Improving the speed and efficiency of your web applications for better user experience.",
    },
  ]

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <About />

      {/* Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-purple-600 before:to-blue-500"
              >
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 transform -translate-x-1/2"></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-purple-600 dark:text-purple-400 font-medium">{exp.company}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-purple-600 before:to-blue-500"
              >
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 transform -translate-x-1/2"></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-purple-600 dark:text-purple-400 font-medium">{edu.institution}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Services
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I offer a range of services to help businesses and individuals establish a strong online presence with
              modern web technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default AboutPage

