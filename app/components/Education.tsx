const educationData = [
  {
    degree: "B.Tech – Computer Science Engineering",
    institution: "Radharaman Institute of Technology & Science, Bhopal",
    year: "2019 – 2023",
    result: "CGPA: 8.69",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Education</h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{edu.degree}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-1">{edu.institution}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-1">{edu.year}</p>
              <p className="text-gray-600 dark:text-gray-300">Result: {edu.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
