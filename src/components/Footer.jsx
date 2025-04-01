"use client"

import { Link } from "react-router-dom"
import { FiArrowUp } from "react-icons/fi"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#3D62C1] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link
              to="/"
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F5D1D8] via-[#BB8698] to-[#F6AC28]"
            >
              Joseph Thuo
            </Link>
            <p className="mt-4 text-gray-200 max-w-md">
              Frontend Developer passionate about creating beautiful, responsive, and user-friendly web experiences.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F6AC28]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-[#F6AC28] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 hover:text-[#F6AC28] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-200 hover:text-[#F6AC28] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-[#F6AC28] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F6AC28]">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/kimanithuo1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-[#F6AC28] transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rkimani-thuo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-[#F6AC28] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/kimanithuo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-[#F6AC28] transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a href="mailto:jkimanithuo@gmail.com" className="text-gray-200 hover:text-[#F6AC28] transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3D62C1]/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-200 text-sm">&copy; {currentYear} Joseph Kimani Thuo. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 rounded-full bg-[#3D62C1]/50 text-gray-200 hover:bg-[#F6AC28] hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <FiArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

