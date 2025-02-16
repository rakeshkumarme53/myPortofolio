import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import DownloadResume from "./components/DownloadResume"

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <DownloadResume />
    </main>
  )
}

