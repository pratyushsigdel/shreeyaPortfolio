import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import BackgroundCanvas from "./components/BackgroundCanvas"
import Certifications from "./components/Certifications"

function App() {
  return (
    <div className="min-h-screen text-white flex flex-col relative overflow-x-hidden z-10">
      <BackgroundCanvas />
      <NavBar />
      <main className="w-full">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App


