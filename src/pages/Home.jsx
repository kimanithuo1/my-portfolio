"use client"

import { motion } from "framer-motion"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-[#121826]"
    >
      <Hero />
      <About />
      <Projects />
      <Contact />
    </motion.main>
  )
}

export default Home

