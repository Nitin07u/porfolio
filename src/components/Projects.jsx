import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

const projects = [
  {
    id: 1,
    name: 'FinFlow — Banking Dashboard',
    tag: 'UI/UX · Product Design',
    summary: 'A modern banking dashboard designed for clarity, speed, and trust.',
    problem: 'Users struggled with cluttered financial dashboards that buried critical data under layers of navigation.',
    process: 'Conducted user interviews, mapped workflows, built information architecture, iterated on high-fidelity prototypes in Figma.',
    outcome: 'Reduced task completion time by 35% in usability testing. Clean, scannable layout praised by stakeholders.',
    tools: ['Figma', 'FigJam', 'Maze', 'React'],
    color: 'from-purple-500/20 to-indigo-500/20',
  },
  {
    id: 2,
    name: 'MintVault — NFT Marketplace',
    tag: 'Web3 · UI Design · Solidity',
    summary: 'A premium NFT marketplace with seamless wallet integration and on-chain minting.',
    problem: 'Existing NFT platforms felt technical and intimidating to mainstream users.',
    process: 'Designed a consumer-friendly UI with progressive disclosure, wallet onboarding flow, and Solidity-based minting contracts.',
    outcome: 'Delivered end-to-end design and smart contract architecture. Prototype tested with 20+ users for flow validation.',
    tools: ['Figma', 'Solidity', 'Ethers.js', 'Tailwind CSS'],
    color: 'from-violet-500/20 to-fuchsia-500/20',
  },
  {
    id: 3,
    name: 'TaskPilot — Productivity App',
    tag: 'Product Design · Mobile',
    summary: 'A task management app designed for focus-driven professionals.',
    problem: 'Productivity tools were either too simple or overwhelmingly complex for power users who want clarity.',
    process: 'Defined user personas, designed priority-based task flows, built interactive prototypes with micro-animations.',
    outcome: 'Achieved 92% task success rate in usability tests. Praised for clean visual hierarchy and intuitive gesture controls.',
    tools: ['Figma', 'Principle', 'Swift UI', 'Notion'],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 4,
    name: 'Horizon — SaaS Landing Page',
    tag: 'Web Design · Frontend',
    summary: 'A conversion-optimized landing page for an AI-powered SaaS product.',
    problem: 'The existing site had a high bounce rate and failed to communicate the product value quickly.',
    process: 'Redesigned the page hierarchy, wrote conversion-focused copy, added scroll-based animations and social proof sections.',
    outcome: 'Bounce rate reduced by 28% post-launch. Time on page increased by 40% with improved engagement metrics.',
    tools: ['Figma', 'React', 'Framer Motion', 'Tailwind CSS'],
    color: 'from-emerald-500/20 to-teal-500/20',
  },
]

export default function Projects() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-purple-400 text-sm font-medium tracking-widest uppercase"
          >
            Selected Work
          </motion.span>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-4"
          >
            Projects that{' '}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              matter
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-gray-400 text-lg max-w-xl mb-16"
          >
            Case studies from real-world products — each one a story of problem-solving, design craft, and measurable outcomes.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5"
        >
          {projects.map((p) => (
            <motion.div
              key={p.id}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] hover:border-purple-500/20 hover:bg-white/[0.04] transition-all overflow-hidden"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs text-purple-400 font-medium tracking-wide uppercase">{p.tag}</span>
                    <h3 className="font-display text-xl font-bold text-white mt-1">{p.name}</h3>
                  </div>
                  <button
                    onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                    className="shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all cursor-pointer"
                    aria-label={expanded === p.id ? `Collapse ${p.name}` : `Expand ${p.name}`}
                  >
                    <HiOutlineArrowUpRight
                      className={`w-4 h-4 transition-transform duration-300 ${expanded === p.id ? 'rotate-90' : ''}`}
                    />
                  </button>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.summary}</p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium text-gray-400 bg-white/5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Expanded details */}
                <AnimatePresence>
                  {expanded === p.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-white/5 space-y-3">
                        <div>
                          <span className="text-xs text-purple-400 font-medium uppercase tracking-wide">Problem</span>
                          <p className="text-gray-400 text-sm mt-1">{p.problem}</p>
                        </div>
                        <div>
                          <span className="text-xs text-purple-400 font-medium uppercase tracking-wide">Process</span>
                          <p className="text-gray-400 text-sm mt-1">{p.process}</p>
                        </div>
                        <div>
                          <span className="text-xs text-purple-400 font-medium uppercase tracking-wide">Outcome</span>
                          <p className="text-gray-400 text-sm mt-1">{p.outcome}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
