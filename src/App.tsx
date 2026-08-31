import About from "./components/About/About"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"

function App() {
  return (
    <>
      <Navbar/>

      <main>
        <Hero/>
        <About/>
        <Projects/>
      </main>
    </>
  )
}

export default App