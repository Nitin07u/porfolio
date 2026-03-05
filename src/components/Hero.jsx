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
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#F24E1E]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#A259FF]/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-[#1ABCFE]/4 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #ccc 1px, transparent 0)',
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
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-[#F24E1E] border border-[#F24E1E]/20 rounded-full bg-[#F24E1E]/5">
            UI/UX Designer · Product Thinker · Solidity
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
        >
          <span className="text-[#1E1E1E]">Nitin</span>{' '}
          <span className="bg-gradient-to-r from-[#F24E1E] via-[#A259FF] to-[#1ABCFE] bg-clip-text text-transparent">
            Upadhyaya
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg sm:text-xl text-[#636363] max-w-2xl mx-auto leading-relaxed"
        >
          I design thoughtful digital products that merge intuitive interfaces,
          product strategy, and technical precision — from pixel-perfect UIs to smart contract systems.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('projects')}
            className="group relative px-7 py-3.5 bg-[#1E1E1E] text-white font-medium rounded-full overflow-hidden transition-all hover:shadow-lg hover:shadow-black/10 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <HiArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </span>
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="px-7 py-3.5 border border-gray-300 text-[#1E1E1E] font-medium rounded-full hover:bg-gray-50 hover:border-gray-400 transition-all flex items-center gap-2 cursor-pointer"
          >
            <HiOutlineEnvelope className="w-4 h-4" />
            Contact Me
          </button>

          <a
            href="#resume"
            onClick={(e) => { e.preventDefault(); scrollTo('resume'); }}
            className="px-7 py-3.5 text-[#636363] hover:text-[#1E1E1E] font-medium rounded-full hover:bg-gray-50 transition-all flex items-center gap-2"
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
            className="inline-flex flex-col items-center gap-2 text-[#636363] text-xs tracking-widest uppercase"
          >
            <span>Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-[#636363] to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
