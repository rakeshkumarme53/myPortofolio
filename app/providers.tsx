"use client"

import { ThemeProvider } from "next-themes"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={inter.className}>
        {children}
      </div>
    </ThemeProvider>
  )
}
