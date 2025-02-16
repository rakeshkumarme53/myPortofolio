"use client"

import { motion } from "framer-motion"

const educationData = [
  {
    degree: "B Tech (Computer Science Engineering)",
    institution: "Radharaman Institute of Technology and Science Bhopal",
    year: "June 2019 to May 2023",
    result: "8.69 CGPA",
  },
  {
    degree: "12th (Math's)",
    institution: "SN Sinha College Aurangabad",
    year: "2018",
    result: "64.2%",
  },
  {
    degree: "10th (CBSE)",
    institution: "BL Indo Anglian Public School Aurangabad",
    year: "2016",
    result: "10 CGPA",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-gray-600 mb-1">{edu.institution}</p>
              <p className="text-gray-600 mb-1">{edu.year}</p>
              <p className="text-gray-600">Result: {edu.result}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

