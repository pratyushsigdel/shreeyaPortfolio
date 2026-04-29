import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import StarsBackground from "./components/StarsBackground"

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 flex flex-col relative">
      <StarsBackground />
      <NavBar />
      <main className="overflow-x-hidden">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App


