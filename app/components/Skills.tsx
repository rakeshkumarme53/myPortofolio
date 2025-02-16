"use client"

import { motion } from "framer-motion"

const skills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "SQL Server",
  "ASP.NET Core",
  "C#",
  "Python",
  "HTML5",
  "CSS3",
  "Git",
  "RESTful APIs",
  "Unit Testing",
  "Agile Methodologies",
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-white rounded-lg shadow-md p-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-lg font-medium">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

