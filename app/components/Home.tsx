"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white dark:bg-gray-900 relative overflow-hidden py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 dark:text-white">
              Hi There,
              <br />
              I'm <span className="text-blue-600">Rakesh Kumar</span>
            </h1>
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              I Am Into <span className="text-red-600">Full Stack Development</span>
            </motion.h2>

            <motion.a
              href="/Rakesh_Kumar_Resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="https://github.com/rakeshkumarme53"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 dark:bg-gray-700 text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rakesh963150"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:rakeshkumarme53@gmail.com"
                className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative order-first md:order-last"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rakesh%20photo.jpg-3Fi96bypur4QrOVX5Tv82sJEc9jQRU.jpeg"
                alt="Rakesh Kumar"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
