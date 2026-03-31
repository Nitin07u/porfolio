import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown, HiOutlineDocumentText } from 'react-icons/hi'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { supabase } from '../lib/supabase'
import { AnimatedText } from './AnimatedText'
import MagneticButton from './MagneticButton'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProfile() {
      try {
        const { data, error } = await supabase
          .from('profile')
          .select('name, roles, tagline')
          .single()
        
        if (data) setProfile(data)
        if (error) console.error('Error fetching profile:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProfile()
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  // Fallback values
  const name = profile?.name || 'Nitin Upadhyaya'
  const roles = profile?.roles?.join(' · ') || 'UI/UX Designer · Product Thinker · Solidity'
  const tagline = profile?.tagline || 'I design thoughtful digital products that merge intuitive interfaces, product strategy, and technical precision — from pixel-perfect UIs to smart contract systems.'

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Orbs overrides */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(242,78,30,0.05)_0%,rgba(0,0,0,0)_70%)] -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-[60px]" />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
        }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div variants={fadeUp} className="mb-8">
          <span className="inline-block px-5 py-2 text-xs font-semibold tracking-widest uppercase text-[#A259FF] border border-[#A259FF]/20 rounded-full bg-[#A259FF]/5 backdrop-blur-md shadow-[0_0_20px_rgba(162,89,255,0.15)] glow-text">
            {loading ? 'Initializing...' : roles}
          </span>
        </motion.div>

        {!loading && (
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] drop-shadow-2xl">
            <span className="text-[#EAEAEA]">Nitin </span>
            <span 
              className="bg-clip-text text-transparent inline-block glow-text"
              style={{
                backgroundImage: 'linear-gradient(270deg, #F24E1E, #A259FF, #1ABCFE, #F24E1E)',
                backgroundSize: '300% 300%',
                animation: 'gradientShift 8s ease-in-out infinite'
              }}
            >
              Upadhyaya
            </span>
          </h1>
        )}

        {loading && (
           <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight mb-4 text-[#EAEAEA]/20 animate-pulse">
            Loading...
          </h1>
        )}

        <div className="mt-8 mb-12">
          {!loading && (
            <AnimatedText 
              text={tagline}
              className="text-lg sm:text-xl md:text-2xl text-[#8A8A8A] max-w-3xl mx-auto leading-relaxed"
              delay={0.8}
            />
          )}
        </div>

        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-5 mt-4">
          <MagneticButton
            onClick={() => scrollTo('projects')}
            className="group px-8 py-4 bg-[#EAEAEA] text-[#0A0A0B] font-semibold tracking-wide shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(242,78,30,0.3)] hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Explore Work
              <HiArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
          </MagneticButton>

          <MagneticButton
            onClick={() => scrollTo('contact')}
            className="px-8 py-4 border border-white/10 text-white font-medium hover:bg-white/5 hover:border-white/20 hover:scale-105 glass-panel"
          >
            <span className="flex items-center gap-2">
              <HiOutlineEnvelope className="w-5 h-5 text-[#A259FF]" />
              Contact Me
            </span>
          </MagneticButton>

          <a
            href="#resume"
            onClick={(e) => { e.preventDefault(); scrollTo('resume'); }}
            className="text-[#8A8A8A] hover:text-white font-medium px-4 py-2 transition-colors flex items-center gap-2 group relative"
          >
            <HiOutlineDocumentText className="w-5 h-5 text-[#1ABCFE] group-hover:scale-110 transition-transform" />
            Resume
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1ABCFE] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          className="mt-24 sm:mt-32"
        >
          <div className="inline-flex flex-col items-center gap-4 text-[#636363] text-xs font-medium tracking-[0.2em] uppercase">
            <span className="opacity-60">Scroll to discover</span>
            <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
              <motion.div 
                className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#A259FF] to-transparent"
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  )
}
