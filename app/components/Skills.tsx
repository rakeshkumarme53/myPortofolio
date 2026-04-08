"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: ".NET Stack",
    skills: ["ASP.NET Core", "ASP.NET MVC 4.7", "Web API", "Entity Framework Core", "C#", "LINQ"],
  },
  {
    title: "Architecture & Design",
    skills: ["RESTful API Design", "MVC Pattern", "RBAC", "JWT Authentication", "Session Management", "SOLID Principles"],
  },
  {
    title: "Databases",
    skills: ["MS SQL Server", "MySQL", "MongoDB", "Stored Procedures", "Query Optimization", "Schema Design"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Angular.js", "HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap", "jQuery", "DataTables"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git/GitHub", "IIS", "Visual Studio", "Postman", "AWS", "Azure", "CI/CD"],
  },
  {
    title: "Practices",
    skills: ["SOLID Principles", "Code Reviews", "Agile/Scrum", "Unit Testing", "Integration Testing"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400">Comprehensive expertise across .NET ecosystem, databases, and modern web technologies</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + index * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
