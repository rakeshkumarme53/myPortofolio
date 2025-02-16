"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4">Rakesh Kumar</h1>
        <h2 className="text-3xl mb-6">Full Stack Developer</h2>
        <p className="text-xl max-w-2xl mx-auto">
          With over 2.5 years of experience in MERN stack, .NET Core, and more. Passionate about creating innovative and
          efficient solutions.
        </p>
        <motion.a
          href="#contact"
          className="mt-8 inline-block bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </section>
  )
}

