"use client"

import { motion } from "framer-motion"
import { FiCode, FiLayout, FiSmartphone, FiServer } from "react-icons/fi"

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const skills = [
    { name: "React", icon: <FiCode />, color: "bg-blue-500" },
    { name: "JavaScript", icon: <FiCode />, color: "bg-yellow-500" },
    { name: "HTML5", icon: <FiLayout />, color: "bg-red-500" },
    { name: "CSS3", icon: <FiLayout />, color: "bg-blue-400" },
    { name: "TailwindCSS", icon: <FiLayout />, color: "bg-teal-500" },
    { name: "Responsive Design", icon: <FiSmartphone />, color: "bg-purple-500" },
    { name: "RESTful APIs", icon: <FiServer />, color: "bg-green-500" },
    { name: "Git", icon: <FiCode />, color: "bg-orange-500" },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm Joseph Kimani Thuo, a passionate Frontend Developer with a keen eye for design and a love for creating
              seamless user experiences. With a strong foundation in modern web technologies, I transform ideas into
              interactive and responsive web applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My journey in web development began with a curiosity about how websites work, which evolved into a career
              dedicated to crafting beautiful digital experiences. I believe in clean code, thoughtful UI design, and
              continuous learning to stay at the forefront of web development trends.
            </p>
            <a
              href="/resume.pdf"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:shadow-lg transition-all inline-block"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-12 h-12 ${skill.color} rounded-full flex items-center justify-center text-white mx-auto mb-3`}
                >
                  {skill.icon}
                </div>
                <h4 className="font-medium text-gray-800 dark:text-white">{skill.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

