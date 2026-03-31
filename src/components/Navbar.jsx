import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useActiveSection } from '../hooks/useActiveSection'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'hobbies', label: 'Beyond' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

const sectionIds = navLinks.map((l) => l.id)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0B]/70 backdrop-blur-xl border-b border-white/[0.04] shadow-2xl shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.button
          onClick={() => handleClick('hero')}
          whileHover={{ scale: 1.05, textShadow: "0 0 12px rgba(242, 78, 30, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="text-xl font-display font-bold tracking-tight bg-gradient-to-r from-[#F24E1E] to-[#A259FF] bg-clip-text text-transparent cursor-pointer"
        >
          NU.
        </motion.button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors cursor-pointer ${
                activeSection === link.id
                  ? 'text-white'
                  : 'text-[#8A8A8A] hover:text-white'
              }`}
            >
              {activeSection === link.id && (
                <motion.span
                  layoutId="navPill"
                  className="absolute inset-0 bg-white/[0.08] border border-white/[0.05] rounded-full shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl cursor-pointer hover:text-[#A259FF] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#111113]/95 backdrop-blur-2xl border-t border-white/[0.04] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleClick(link.id)}
                  className={`text-left px-4 py-3 rounded-lg transition-colors font-medium cursor-pointer ${
                    activeSection === link.id
                      ? 'text-white bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
                      : 'text-[#8A8A8A] hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
