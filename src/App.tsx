import About from "./components/About/About"
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
      </main>
    </>
  )
}

export default App