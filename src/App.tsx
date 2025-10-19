import About from './components/About'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Project from './components/Project'

function App() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Park Beommin</h1>
          <nav className="space-x-4 text-sm">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">About</a>
            <a href="#work-experience" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Work Experience</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Projects</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Skills</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-20 max-w-5xl mx-auto px-4 space-y-32">
        <Hero />
        <About />
        <WorkExperience />
        <Project />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-10">
        © 2025 Park Beommin. All rights reserved.
      </footer>
    </div>
  )
}

export default App
