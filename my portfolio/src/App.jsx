import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Nav from './components/Nav'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
