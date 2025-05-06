import React from 'react'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Project from './components/Project'
function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Park Beommin</h1>
          <nav className="space-x-4 text-sm">
            <a href="#about" className="hover:text-blue-600 transition-colors duration-200">About</a>
            <a href="#work-experience" className="hover:text-blue-600 transition-colors duration-200">Work Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors duration-200">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors duration-200">Skills</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors duration-200">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-20 max-w-5xl mx-auto px-4 space-y-32">

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Work Experience Section */}
        <WorkExperience />

        {/* Projects Section */}
        <Project />

        {/* Skills Section */}
        <Skills />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-10">
        © 2025 Park Beommin. All rights reserved.
      </footer>
    </div>
  )
}

export default App
