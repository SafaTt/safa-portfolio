import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <>
      <Navbar/>

      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      </main>
    </>
  )
}

export default App