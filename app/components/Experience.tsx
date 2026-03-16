export default function Experience() {
  const experiences = [
    {
      position: "Full Stack Software Engineer",
      company: "Sourceget Pvt Ltd, Surat",
      duration: "June 2025 – Present",
      responsibilities: [
        "Developing scalable enterprise modules using ASP.NET Core and Angular.",
        "Designing optimized REST APIs supporting high-volume data processing workflows.",
        "Enhancing application performance through query optimization and efficient state handling.",
        "Collaborating in agile teams to deliver production-ready features with high reliability.",
      ],
    },
    {
      position: "Full Stack Software Engineer",
      company: "Acompworld Techno Soft Pvt Ltd, Bhopal",
      duration: "Oct 2022 – May 2025",
      responsibilities: [
        "Built full-stack applications using MERN stack and .NET Core MVC architecture.",
        "Improved database performance through indexing and query tuning, reducing response latency significantly.",
        "Designed secure authentication systems and role-based dashboards.",
        "Contributed to technical design discussions, code reviews, and mentoring initiatives.",
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
