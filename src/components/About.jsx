import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineLightBulb, HiOutlineCube, HiOutlineSparkles } from 'react-icons/hi2'
import { HiOutlineCode } from 'react-icons/hi'
import { supabase } from '../lib/supabase'
import { AnimatedText } from './AnimatedText'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const ICON_MAP = {
  HiOutlineLightBulb: <HiOutlineLightBulb className="w-6 h-6" />,
  HiOutlineCube: <HiOutlineCube className="w-6 h-6" />,
  HiOutlineCode: <HiOutlineCode className="w-6 h-6" />,
  HiOutlineSparkles: <HiOutlineSparkles className="w-6 h-6" />,
}

export default function About() {
  const [skills, setSkills] = useState([])
  const [journey, setJourney] = useState([])
  const [bio, setBio] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [skillsRes, journeyRes, profileRes] = await Promise.all([
          supabase.from('skills').select('*').order('order_index', { ascending: true }),
          supabase.from('journey').select('*').order('order_index', { ascending: true }),
          supabase.from('profile').select('bio').single()
        ])

        if (skillsRes.data) setSkills(skillsRes.data)
        if (journeyRes.data) setJourney(journeyRes.data)
        if (profileRes.data) setBio(profileRes.data.bio)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[800px] h-[500px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(162,89,255,0.06)_0%,rgba(0,0,0,0)_70%)] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.span
            variants={fadeUp}
            className="text-[#F24E1E] text-xs font-semibold tracking-widest uppercase border border-[#F24E1E]/20 bg-[#F24E1E]/10 px-4 py-1.5 rounded-full inline-block backdrop-blur-md"
          >
            About Me
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-6 mb-6 text-[#EAEAEA]"
          >
            Designing with{' '}
            <span className="bg-gradient-to-r from-[#F24E1E] to-[#A259FF] bg-clip-text text-transparent glow-text">
              purpose
            </span>
          </motion.h2>

          <div className="text-[#8A8A8A] text-lg sm:text-xl max-w-3xl leading-relaxed mb-16">
            {!loading ? (
              <AnimatedText 
                text={bio || "I'm a product-focused UI/UX designer who believes great design is invisible — it just works. I combine user empathy with systematic thinking to build interfaces that are both beautiful and functional. Beyond design, I explore smart contract development with Solidity, giving me a unique perspective on building for decentralized systems."}
              />
            ) : "Loading bio..."}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-32"
        >
          {loading ? (
             [1,2,3,4].map(i => (
              <div key={i} className="h-44 rounded-2xl bg-white/[0.02] border border-white/[0.05] animate-pulse" />
             ))
          ) : (
            skills.map((s) => (
              <motion.div
                key={s.id || s.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
                className="group relative p-6 rounded-2xl glass-panel hover:bg-white/[0.05] transition-colors overflow-hidden"
              >
                {/* Hover Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${s.color || '#F24E1E'}20, transparent 70%)` }}
                />

                <div
                  className="w-12 h-12 flex items-center justify-center rounded-xl mb-5 border border-white/5 relative z-10"
                  style={{ backgroundColor: `${s.color || '#F24E1E'}15`, color: s.color || '#F24E1E', boxShadow: `0 0 20px ${s.color || '#F24E1E'}20` }}
                >
                  {ICON_MAP[s.icon_name] || <HiOutlineLightBulb className="w-6 h-6" />}
                </div>
                <h3 className="font-display font-semibold text-[#EAEAEA] text-lg mb-2 relative z-10">{s.title}</h3>
                <p className="text-[#8A8A8A] text-sm leading-relaxed relative z-10">{s.description || s.desc}</p>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-4xl mx-auto"
        >
          <motion.h3
            variants={fadeUp}
            className="font-display text-3xl font-bold mb-12 text-center text-[#EAEAEA]"
          >
            The Journey
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[39px] top-6 bottom-6 w-[1px] bg-gradient-to-b from-[#F24E1E]/30 via-[#A259FF]/20 to-transparent hidden sm:block" />

            <div className="space-y-8">
              {loading ? (
                [1,2,3].map(i => (
                  <div key={i} className="h-24 rounded-2xl bg-white/[0.02] border border-white/[0.05] animate-pulse" />
                ))
              ) : (
                journey.map((item, index) => (
                  <motion.div
                    key={item.id || item.year}
                    variants={fadeUp}
                    className="flex flex-col sm:flex-row gap-6 sm:gap-10 sm:items-center group"
                  >
                    <div className="hidden sm:flex flex-col items-center relative z-10">
                      <div className="w-20 h-20 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-sm font-bold text-[#F24E1E] shrink-0 glass-panel shadow-[0_0_15px_rgba(242,78,30,0.1)] group-hover:shadow-[0_0_25px_rgba(242,78,30,0.2)] group-hover:bg-[#F24E1E]/10 transition-all duration-300">
                        {item.year}
                      </div>
                    </div>
                    <div className="flex-1 p-6 rounded-2xl glass-panel group-hover:bg-white/[0.04] group-hover:border-white/[0.1] transition-all duration-300 relative overflow-hidden">
                      {/* Subter glow effect on card hover */}
                      <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none rounded-2xl"
                           style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.02), transparent)' }} />
                      
                      <span className="sm:hidden text-[#F24E1E] text-xs font-bold tracking-wider mb-2 block">{item.year}</span>
                      <h4 className="font-display text-xl sm:text-2xl font-semibold text-[#EAEAEA]">{item.label}</h4>
                      <p className="text-[#8A8A8A] text-base leading-relaxed mt-2">{item.detail}</p>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
