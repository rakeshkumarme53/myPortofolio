"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ThemeToggle from "./ThemeToggle"
import Link from "next/link"

const menuItems = ["Home", "About", "Skills", "Experience", "Education", "Projects", "Contact"]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = menuItems.map((item) => ({
        id: item.toLowerCase(),
        element: document.getElementById(item.toLowerCase()),
      }))

      const currentSection = sections.find((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-gray-800 shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.a
            href="#home"
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
            whileHover={{ scale: 1.05 }}
          >
            RK
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-lg font-medium transition-colors relative ${
                  activeSection === item.toLowerCase()
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-800 dark:text-gray-200"
                } hover:text-blue-600 dark:hover:text-blue-400`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                    layoutId="underline"
                  />
                )}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <button className="md:hidden text-gray-600 dark:text-gray-300" onClick={() => {}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </motion.header>
  )
}

