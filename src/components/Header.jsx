"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi"

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-[#121826]/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3D62C1] via-[#BB8698] to-[#F6AC28]"
          >
            Joseph Thuo
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-gray-700 dark:text-gray-200 hover:text-[#3D62C1] dark:hover:text-[#3D62C1] transition-colors ${
                location.pathname === link.path ? "font-semibold text-[#3D62C1] dark:text-[#3D62C1]" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-[#F5D1D8]/20 text-[#3D62C1] dark:bg-[#1E293B] dark:text-gray-200 hover:bg-[#3D62C1] hover:text-white dark:hover:bg-[#3D62C1] transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-[#F6AC28] text-white font-medium hover:bg-[#BB8698] transition-colors duration-300 shadow-md hover:shadow-colored"
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-[#F5D1D8]/20 text-[#3D62C1] dark:bg-[#1E293B] dark:text-gray-200"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full bg-[#F5D1D8]/20 text-[#3D62C1] dark:bg-[#1E293B] dark:text-gray-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-[#121826] shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-gray-700 dark:text-gray-200 py-2 ${
                  location.pathname === link.path ? "font-semibold text-[#3D62C1] dark:text-[#3D62C1]" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="px-6 py-3 rounded-full bg-[#F6AC28] text-white font-medium text-center">
              Hire Me
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Header

