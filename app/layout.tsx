import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "Rakesh Kumar - .NET Developer & ASP.NET Core Expert | Portfolio",
  description: "Experienced .NET Developer with 3.5+ years building enterprise web applications using ASP.NET Core, Web API, React.js, and MS SQL. Specialized in fintech, healthcare, and SaaS solutions.",
  keywords: ".NET Developer, ASP.NET Core, Web API, React.js, MS SQL, Full Stack Developer, Enterprise Applications",
  openGraph: {
    title: "Rakesh Kumar - .NET Developer & Enterprise Solutions Expert",
    description: "Explore my portfolio of enterprise-grade .NET applications, RESTful APIs, and scalable web solutions.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
