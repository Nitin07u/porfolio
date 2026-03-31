import { motion, useMotionValue } from 'framer-motion'
import {
  HiOutlineMusicalNote,
  HiOutlineCamera,
  HiOutlineBookOpen,
  HiOutlineGlobeAlt,
  HiOutlinePuzzlePiece,
  HiOutlineFilm,
} from 'react-icons/hi2'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const hobbies = [
  {
    icon: <HiOutlineMusicalNote className="w-6 h-6" />,
    title: 'Music',
    desc: 'Lo-fi beats, ambient soundscapes, and the occasional guitar session.',
    color: '#A259FF', // Swapped some colors around for better dark distribution
  },
  {
    icon: <HiOutlineCamera className="w-6 h-6" />,
    title: 'Photography',
    desc: 'Capturing light, textures, and urban geometry through a minimal lens.',
    color: '#1ABCFE',
  },
  {
    icon: <HiOutlineBookOpen className="w-6 h-6" />,
    title: 'Reading',
    desc: 'Design thinking, behavioral psychology, and the occasional sci-fi novel.',
    color: '#FF7262',
  },
  {
    icon: <HiOutlineGlobeAlt className="w-6 h-6" />,
    title: 'Exploring Tech',
    desc: 'Deep-diving into Web3, AI tools, and emerging design technologies.',
    color: '#0ACF83',
  },
  {
    icon: <HiOutlinePuzzlePiece className="w-6 h-6" />,
    title: 'Strategy Games',
    desc: 'Chess, puzzles, and systems thinking — design for the mind.',
    color: '#F24E1E',
  },
  {
    icon: <HiOutlineFilm className="w-6 h-6" />,
    title: 'Cinema',
    desc: 'Visual storytelling, cinematography, and the art of framing narratives.',
    color: '#A259FF',
  },
]

function HobbyCard({ h }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      variants={fadeUp}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -6, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="group relative p-8 rounded-3xl glass-panel border border-white/[0.05] bg-white/[0.01] hover:border-white/[0.1] transition-all overflow-hidden"
    >
      {/* Animated Radial Spotlight following mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), ${h.color}15, transparent 40%)`,
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
          e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        }}
      />

      <div className="relative z-10">
        <div
          className="w-14 h-14 flex items-center justify-center rounded-2xl mb-6 transition-all duration-500 glass-panel group-hover:bg-white/[0.1]"
          style={{ color: h.color, boxShadow: `0 0 20px ${h.color}10`, backgroundColor: `${h.color}15` }}
        >
          {h.icon}
        </div>
        <h3 className="font-display font-semibold text-[#EAEAEA] text-xl mb-3">{h.title}</h3>
        <p className="text-[#8A8A8A] text-sm leading-relaxed">{h.desc}</p>
      </div>
    </motion.div>
  )
}

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[600px] h-[500px] bg-[radial-gradient(circle,rgba(10,207,131,0.05)_0%,rgba(0,0,0,0)_60%)] -translate-y-1/2 pointer-events-none blur-[80px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.span
            variants={fadeUp}
            className="text-[#0ACF83] text-xs font-semibold tracking-widest uppercase border border-[#0ACF83]/20 bg-[#0ACF83]/10 px-4 py-1.5 rounded-full inline-block backdrop-blur-md"
          >
            Beyond Work
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-6 mb-6 text-[#EAEAEA]"
          >
            When I&apos;m not{' '}
            <span className="bg-gradient-to-r from-[#0ACF83] to-[#1ABCFE] bg-clip-text text-transparent glow-text">
              designing
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#8A8A8A] text-lg sm:text-xl max-w-2xl mb-20 leading-relaxed"
          >
            The things that fuel my creativity and keep my perspective fresh. Elements of curiosity outside the canvas.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {hobbies.map((h) => (
            <HobbyCard key={h.title} h={h} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
