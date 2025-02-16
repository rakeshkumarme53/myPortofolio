"use client"

import { motion } from "framer-motion"

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <motion.div
          className="bg-gray-100 rounded-lg shadow-md p-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Full Stack Software Engineer</h3>
          <p className="text-gray-600 mb-4">Acompworld Techno Soft Pvt Ltd, Bhopal | October 2022 - Present</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Collaborate with a dynamic team to design, develop, and maintain scalable solutions using the MERN stack.
            </li>
            <li>Utilize SQL Server and MySQL to manage and enhance data retrieval and storage processes.</li>
            <li>Contribute to the development and refinement of ASP.NET Core MVC applications.</li>
            <li>Engage with project managers and stakeholders to gather and understand requirements.</li>
            <li>Participate actively in code reviews and engage in continuous learning.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

