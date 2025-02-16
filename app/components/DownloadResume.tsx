"use client"

import { motion } from "framer-motion"
import { FileDown } from "lucide-react"

export default function DownloadResume() {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      <motion.a
        href="/Rakesh_Kumar_Resume.pdf"
        download
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FileDown size={20} />
        <span className="hidden sm:inline">Download Resume</span>
      </motion.a>
    </motion.div>
  )
}

