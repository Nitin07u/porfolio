import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'
import FloatingShapes from './components/FloatingShapes'
import SmoothScroll from './components/SmoothScroll'
import CursorGlow from './components/CursorGlow'

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#0A0A0B] text-[#EAEAEA] relative overflow-x-hidden selection:bg-[#A259FF]/30 noise-bg">
        <CursorGlow />
        <FloatingShapes />
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
    </SmoothScroll>
  )
}
