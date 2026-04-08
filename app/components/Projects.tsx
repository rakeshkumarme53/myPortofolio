"use client"

import { motion } from "framer-motion"

const projects = [
  {
    name: "Oron Payments",
    description: "Live fintech platform for wallet management and secure payment processing. Built with ASP.NET Core Web APIs, Entity Framework, and comprehensive transaction audit logging.",
    technologies: "ASP.NET MVC 4.7, ASP.NET Core Web API, Entity Framework, MS SQL, JavaScript, Bootstrap",
    link: "https://payments.orontrade.com",
    status: "Live",
    highlights: ["Secure Payment Processing", "Transaction Audit Logging", "RESTful APIs"],
  },
  {
    name: "Oron Trade",
    description: "Enterprise client management portal with KYC onboarding, deposit/withdrawal workflows, and RBAC for admin/manager/customer roles. JWT-secured .NET APIs.",
    technologies: "ASP.NET Core MVC, Web API, Entity Framework, MS SQL, Bootstrap",
    link: "https://my.orontrade.com",
    status: "Live",
    highlights: ["KYC Workflows", "RBAC Implementation", "Paginated Transactions", "CSV/Excel Export"],
  },
  {
    name: "Uniteam",
    description: "AI-powered enterprise SaaS with .NET Core REST APIs enabling AI-assisted task creation, meeting scheduling, and end-to-end encryption. AWS-hosted deployment.",
    technologies: "ASP.NET Core Web API, MS SQL, React.js, AWS",
    link: "https://uniteam.ai",
    status: "Live",
    highlights: ["AI Integration", "End-to-End Encryption", "Meeting Scheduling", "AWS Deployment"],
  },
  {
    name: "Workpod (HCM 360°)",
    description: "Enterprise Human Capital Management platform for a US client. Built ASP.NET Core MVC frontend and Web API backend managing multi-company workforce lifecycle.",
    technologies: "ASP.NET Core MVC, ASP.NET Core Web API, MS SQL",
    link: "https://hiringglass.com",
    status: "Live",
    highlights: ["Multi-Company Support", "Recruiting & Onboarding", "Performance Management", "Client Portals"],
  },
  {
    name: "Learnet",
    description: "Professional mentor-learner booking platform. Built .NET Core backend APIs for flexible pricing, session booking, and Zoom API integration.",
    technologies: "ASP.NET Core Web API, MySQL, React.js, Bootstrap",
    link: "https://learnet.ai",
    status: "Live",
    highlights: ["Zoom Integration", "Flexible Pricing", "Session Management", "Booking System"],
  },
  {
    name: "SCM-Global Group",
    description: "Supply Chain Management system for purchase orders, work orders, daily supply tracking, production planning, and purchase order management.",
    technologies: "ASP.NET MVC 4.7, MySQL, C#, Bootstrap",
    link: "#",
    status: "Confidential",
    highlights: ["PO Management", "Work Orders", "Production Planning", "Supply Chain Tracking"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Production-grade enterprise applications built with ASP.NET Core, Web APIs, and modern frontend technologies</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.name}</h3>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-1 rounded">{project.status}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm flex-grow">{project.description}</p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.highlights.map((highlight) => (
                    <span key={highlight} className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Tech: {project.technologies}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold mt-auto"
              >
                View Live Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
