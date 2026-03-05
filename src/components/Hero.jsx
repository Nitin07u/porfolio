import { motion } from 'framer-motion'
import { HiArrowDown, HiOutlineDocumentText } from 'react-icons/hi'
import { HiOutlineEnvelope } from 'react-icons/hi2'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div variants={fadeUp} className="mb-6">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-purple-300 border border-purple-500/20 rounded-full bg-purple-500/5">
            UI/UX Designer · Product Thinker · Solidity
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
        >
          <span className="text-white">Nitin</span>{' '}
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Upadhyaya
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          I design thoughtful digital products that merge intuitive interfaces,
          product strategy, and technical precision — from pixel-perfect UIs to smart contract systems.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('projects')}
            className="group relative px-7 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-full overflow-hidden transition-all hover:shadow-lg hover:shadow-purple-500/25 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <HiArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </span>
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="px-7 py-3.5 border border-white/10 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <HiOutlineEnvelope className="w-4 h-4" />
            Contact Me
          </button>

          <a
            href="#resume"
            onClick={(e) => { e.preventDefault(); scrollTo('resume'); }}
            className="px-7 py-3.5 text-gray-400 hover:text-white font-medium rounded-full hover:bg-white/5 transition-all flex items-center gap-2"
          >
            <HiOutlineDocumentText className="w-4 h-4" />
            Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex flex-col items-center gap-2 text-gray-500 text-xs tracking-widest uppercase"
          >
            <span>Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-gray-500 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
