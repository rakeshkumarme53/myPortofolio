"use client"

import { motion } from "framer-motion"

const skills = [
  "C#",
  "JavaScript (ES6+)",
  "Python",
  "React.js",
  "Angular",
  "HTML5",
  "CSS3",
  "ASP.NET Core",
  ".NET MVC",
  "Node.js",
  "Express.js",
  "SQL Server",
  "MySQL",
  "MongoDB",
  "JWT Authentication",
  "REST APIs",
  "Azure",
  "AWS",
  "Git/GitHub",
  "RBAC",
  "Unit Testing",
  "Integration Testing",
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
