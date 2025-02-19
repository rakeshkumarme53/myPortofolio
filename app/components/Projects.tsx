"use client"

import { motion } from "framer-motion"

const projects = [
  {
    name: "Learnet",
    description: "A professional learning network platform for booking sessions with mentors.",
    technologies: "MongoDB, Express.js, Node.js, React.js, HTML, CSS, JavaScript, Bootstrap",
    link: "https://learnet.ai",
  },
  {
    name: "Fasttrack Healthcare",
    description: "A platform connecting top doctors, caregivers, and ambulance owners to make healthcare accessible.",
    technologies: "MySQL, Express.js, Node.js, React.js, HTML, CSS, JavaScript, Bootstrap",
    link: "https://fasttrackhealthcare.in",
  },
  {
    name: "Acompworld Website",
    description: "Company website showcasing services and career opportunities.",
    technologies: ".NET Core, MS SQL, React.js",
    link: "https://acompworld.com",
  },
  {
    name: "Workpod",
    description: "Enterprise-level human capital management solution for hiring and workforce management.",
    technologies: ".NET Core MVC, .NET Core for API",
    link: "https://hiringglass.com",
  },
  {
    name: "SCM-Global Group",
    description: "Supply Chain Management system for PO creation, Work Orders, Daily Supply, Production, and Purchase.",
    technologies: "ASP.NET MVC, MySQL, C#, HTML, CSS, JavaScript, Bootstrap",
    link: "#",
  },
  {
    name: "Uniteam",
    description: "AI-powered task management tool for streamlining workflows and enhancing productivity.",
    technologies: ".NET Core, MS SQL, React.js",
    link: "https://uniteam.ai",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Technologies: {project.technologies}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

