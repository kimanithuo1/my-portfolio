"use client"

import { motion } from "framer-motion"
import Contact from "../components/Contact"

const ContactPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 bg-white dark:bg-[#121826]"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#3D62C1] via-[#BB8698] to-[#F6AC28]">
            Get In Touch
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3D62C1] via-[#BB8698] to-[#F6AC28] mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel
            free to reach out to me using any of the methods below.
          </p>
        </motion.div>
      </div>

      <Contact />

      {/* Map Section */}
      <section className="py-16 bg-[#F5D1D8]/10 dark:bg-[#1E293B]">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-[#121826] rounded-xl overflow-hidden shadow-lg">
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743783!2d36.70730744863284!3d-1.3028617999999937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1647882657195!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Nairobi, Kenya"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default ContactPage

