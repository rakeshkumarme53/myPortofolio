"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          With over 2.5 years of hands-on experience as a Full Stack Developer, I specialize in JavaScript, React.js,
          Node.js, MySQL, MSSQL, .NET Core, and .NET MVC. I'm passionate about leveraging my skills to contribute to
          innovative projects and continuously enhance my capabilities. My goal is to be a key member of a team that
          values growth, creativity, and excellence in software development.
        </motion.p>
      </div>
    </section>
  )
}

