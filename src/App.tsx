import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
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
      <Footer/>
    </>
  )
}

export default App