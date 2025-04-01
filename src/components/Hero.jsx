"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"
import { Link } from "react-router-dom"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-4 bg-gradient-to-b from-[#F5D1D8]/20 to-white dark:from-[#121826] dark:to-[#121826]">
      <div className="container mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="order-2 md:order-1">
            <motion.p className="text-[#BB8698] font-medium mb-4" variants={item}>
              Hello, I'm
            </motion.p>
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#3D62C1] via-[#BB8698] to-[#F6AC28]"
              variants={item}
            >
              Joseph Kimani Thuo
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8" variants={item}>
              Frontend Developer crafting beautiful, responsive, and user-friendly web experiences.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mb-8" variants={item}>
              <Link
                to="/projects"
                className="px-8 py-3 rounded-full bg-[#F6AC28] text-white font-medium hover:bg-[#BB8698] transition-colors duration-300 shadow-md hover:shadow-colored flex items-center gap-2 group"
              >
                View My Work
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-full border-2 border-[#3D62C1] text-[#3D62C1] font-medium hover:bg-[#3D62C1] hover:text-white transition-colors duration-300"
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.div className="flex gap-4" variants={item}>
              <a
                href="https://github.com/kimanithuo1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#F5D1D8]/20 text-[#3D62C1] hover:bg-[#3D62C1] hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rkimani-thuo/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#F5D1D8]/20 text-[#3D62C1] hover:bg-[#3D62C1] hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/kimanithuo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#F5D1D8]/20 text-[#3D62C1] hover:bg-[#3D62C1] hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3D62C1] via-[#BB8698] to-[#F6AC28] rounded-full blur opacity-75 animate-pulse"></div>
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Joseph Kimani Thuo"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-[#1E293B]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

