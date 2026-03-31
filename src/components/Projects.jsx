import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'
import { supabase } from '../lib/supabase'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

// 3D Tilt Card Component
function ProjectCard({ p, expanded, setExpanded }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isExpanded = expanded === p.id;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      variants={fadeUp}
      className={`group relative rounded-3xl border border-white/[0.05] bg-[#111113] transition-colors overflow-hidden ${isExpanded ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]'}`}
    >
      {/* Dynamic Background Hover Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: `radial-gradient(120% 120% at 50% -20%, ${p.accent || '#1ABCFE'}30, transparent 60%)` }}
      />

      <div className="p-8 relative z-10 p-transform">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div style={{ transform: "translateZ(30px)" }}>
            <span 
              className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border mb-3" 
              style={{ color: p.accent || '#1ABCFE', borderColor: `${p.accent || '#1ABCFE'}30`, backgroundColor: `${p.accent || '#1ABCFE'}10` }}
            >
              {p.tag}
            </span>
            <h3 className="font-display text-2xl font-bold text-[#EAEAEA] drop-shadow-lg">{p.name}</h3>
          </div>
          <button
            onClick={() => setExpanded(isExpanded ? null : p.id)}
            style={{ transform: "translateZ(40px)" }}
            className="shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#8A8A8A] hover:text-white hover:border-white/30 hover:bg-white/5 transition-all cursor-pointer backdrop-blur-sm"
            aria-label={isExpanded ? `Collapse ${p.name}` : `Expand ${p.name}`}
          >
            <HiOutlineArrowUpRight
              className={`w-5 h-5 transition-transform duration-500 ease-in-out ${isExpanded ? 'rotate-90 text-white' : ''}`}
            />
          </button>
        </div>

        <p 
          className="text-[#8A8A8A] text-base leading-relaxed mb-6"
          style={{ transform: "translateZ(20px)" }}
        >
          {p.summary}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-2" style={{ transform: "translateZ(10px)" }}>
          {p.tools && p.tools.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 text-xs font-medium text-[#A0A0A0] bg-white/[0.03] border border-white/[0.05] rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Expanded details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
              style={{ transform: "translateZ(15px)" }}
            >
              <div className="pt-6 mt-6 border-t border-white/[0.05] space-y-5">
                {p.problem && (
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/50 block mb-2">The Challenge</span>
                    <p className="text-[#EAEAEA] text-sm leading-relaxed">{p.problem}</p>
                  </div>
                )}
                {p.process && (
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/50 block mb-2">Process</span>
                    <p className="text-[#EAEAEA] text-sm leading-relaxed">{p.process}</p>
                  </div>
                )}
                {p.outcome && (
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: p.accent || '#1ABCFE' }}>Outcome</span>
                    <p className="text-[#EAEAEA] text-sm leading-relaxed mt-2">{p.outcome}</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`.p-transform { transform-style: preserve-3d; }`}</style>
    </motion.div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState(null)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('order_index', { ascending: true })
        
        if (data) setProjects(data)
        if (error) console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section id="projects" className="py-32 px-6 relative overflow-visible perspective-[2000px]">
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-[radial-gradient(circle,rgba(26,188,254,0.05)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.span
            variants={fadeUp}
            className="text-[#1ABCFE] text-xs font-semibold tracking-widest uppercase border border-[#1ABCFE]/20 bg-[#1ABCFE]/10 px-4 py-1.5 rounded-full inline-block backdrop-blur-md"
          >
            Selected Work
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-6 mb-6 text-[#EAEAEA]"
          >
            Projects that{' '}
            <span className="bg-gradient-to-r from-[#1ABCFE] to-[#A259FF] bg-clip-text text-transparent glow-text">
              matter
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#8A8A8A] text-lg sm:text-xl max-w-2xl mb-20 leading-relaxed"
          >
            Case studies from real-world products — each one a story of problem-solving, design craft, and measurable outcomes.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
        >
          {loading ? (
            [1,2,3,4].map(i => (
              <div key={i} className="h-[300px] rounded-3xl bg-white/[0.02] border border-white/[0.05] animate-pulse" />
            ))
          ) : (
            projects.map((p) => (
              <ProjectCard key={p.id} p={p} expanded={expanded} setExpanded={setExpanded} />
            ))
          )}
        </motion.div>
      </div>
    </section>
  )
}
