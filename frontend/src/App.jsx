import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Awards from './sections/Awards'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Awards />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
