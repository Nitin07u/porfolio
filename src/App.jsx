import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text-primary)]">
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Hobbies />
      <SectionDivider />
      <Resume />
      <SectionDivider />
      <Contact />
      <Footer />
    </div>
  )
}
