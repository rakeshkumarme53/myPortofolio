export default function Experience() {
  const experiences = [
    {
      position: ".NET Developer",
      company: "Sourceget Pvt Ltd, Surat",
      duration: "Jun 2025 – Present",
      responsibilities: [
        "Develop and maintain enterprise web applications using ASP.NET Core MVC and .NET-based backend services.",
        "Design and expose RESTful Web APIs consumed by Angular.js and React.js front-end modules, ensuring clean separation of concerns.",
        "Participate in sprint planning, architecture reviews, and peer code reviews to uphold quality and delivery standards.",
        "Collaborate with product teams to translate business requirements into scalable .NET solutions.",
      ],
    },
    {
      position: ".NET Developer",
      company: "Acompworld Techno Soft Pvt Ltd, Bhopal",
      duration: "Oct 2022 – May 2025",
      responsibilities: [
        "Architected and delivered 7+ production applications on ASP.NET Core MVC and Web API across fintech, healthcare, HCM, and EdTech verticals.",
        "Built Oron Trade — a live digital payment and client management platform — with secure REST APIs, JWT authentication, RBAC, and complete financial transaction workflows.",
        "Designed and optimized complex MS SQL and MySQL schemas including stored procedures, indexes, and joins — improving query performance across high-volume data operations.",
        "Implemented Entity Framework Core for data access layers, ensuring clean ORM patterns and maintainable code.",
        "Developed end-to-end .NET features: KYC verification workflows, deposit/withdrawal approval pipelines, role-specific dashboards, CSV/Excel exports, and email/SMS notification systems.",
        "Built React.js front-ends integrated with .NET Web APIs, enabling full feature ownership from API design to UI delivery.",
        "Deployed and configured .NET applications on IIS with proper environment management and logging.",
        "Conducted code reviews and mentored junior developers on .NET best practices, SOLID principles, and clean architecture.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Professional Experience</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{exp.position}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {exp.company} | {exp.duration}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
