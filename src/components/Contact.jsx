"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitSuccess(true)
        setFormData({ name: "", email: "", message: "" })

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      }, 1500)
    }
  }

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email",
      content: "jkimanithuo@gmail.com",
      link: "mailto:jkimanithuo@gmail.com",
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Phone",
      content: "+254 728 284 816",
      link: "tel:+254728284816",
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Location",
      content: "Nairobi, Kenya",
      link: "https://maps.google.com/?q=Nairobi,Kenya",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-[#F5D1D8]/10 dark:bg-[#1E293B]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3D62C1] dark:text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3D62C1] via-[#BB8698] to-[#F6AC28] mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me using the
            form below or through my contact information.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <div className="bg-white dark:bg-[#121826] rounded-xl p-6 h-full border-l-4 border-[#BB8698] shadow-md">
              <h3 className="text-xl font-bold mb-6 text-[#3D62C1] dark:text-white">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={item.title === "Location" ? "_blank" : undefined}
                    rel={item.title === "Location" ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-[#3D62C1] via-[#BB8698] to-[#F6AC28] rounded-lg text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-[#3D62C1] dark:text-white">{item.title}</h4>
                      <p className="text-gray-700 dark:text-gray-300 group-hover:text-[#F6AC28] dark:group-hover:text-[#F6AC28] transition-colors">
                        {item.content}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
                <h4 className="font-medium text-[#3D62C1] dark:text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
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
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="bg-white dark:bg-[#121826] rounded-xl p-6 shadow-md border-l-4 border-[#F6AC28]">
              <h3 className="text-xl font-bold mb-6 text-[#3D62C1] dark:text-white">Send Me a Message</h3>

              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 p-4 rounded-lg mb-6"
                >
                  Thank you for your message! I'll get back to you as soon as possible.
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-[#F5D1D8]/10 dark:bg-[#121826] border ${
                        errors.name ? "border-red-500" : "border-[#BB8698]/30 dark:border-gray-600"
                      } focus:outline-none focus:ring-2 focus:ring-[#3D62C1] dark:text-white`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-[#F5D1D8]/10 dark:bg-[#121826] border ${
                        errors.email ? "border-red-500" : "border-[#BB8698]/30 dark:border-gray-600"
                      } focus:outline-none focus:ring-2 focus:ring-[#3D62C1] dark:text-white`}
                      placeholder="Your email"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-4 py-3 rounded-lg bg-[#F5D1D8]/10 dark:bg-[#121826] border ${
                        errors.message ? "border-red-500" : "border-[#BB8698]/30 dark:border-gray-600"
                      } focus:outline-none focus:ring-2 focus:ring-[#3D62C1] dark:text-white`}
                      placeholder="Your message"
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#3D62C1] via-[#BB8698] to-[#F6AC28] text-white font-medium hover:shadow-colored transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

