"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { sendContactForm } from "../utils/api"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await sendContactForm(formData)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    }
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Contact Me</h2>
        <motion.div
          className="max-w-lg mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:border-gray-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:border-gray-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:text-white dark:border-gray-500"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
          {submitStatus === "success" && (
            <p className="mt-4 text-green-600 dark:text-green-400">Message sent successfully!</p>
          )}
          {submitStatus === "error" && (
            <p className="mt-4 text-red-600 dark:text-red-400">An error occurred. Please try again.</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

