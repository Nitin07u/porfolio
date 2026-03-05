import { motion } from 'framer-motion'
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
  show: { opacity: 1, y: 0 },
}

const hobbies = [
  {
    icon: <HiOutlineMusicalNote className="w-6 h-6" />,
    title: 'Music',
    desc: 'Lo-fi beats, ambient soundscapes, and the occasional guitar session.',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: <HiOutlineCamera className="w-6 h-6" />,
    title: 'Photography',
    desc: 'Capturing light, textures, and urban geometry through a minimal lens.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <HiOutlineBookOpen className="w-6 h-6" />,
    title: 'Reading',
    desc: 'Design thinking, behavioral psychology, and the occasional sci-fi novel.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: <HiOutlineGlobeAlt className="w-6 h-6" />,
    title: 'Exploring Tech',
    desc: 'Deep-diving into Web3, AI tools, and emerging design technologies.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: <HiOutlinePuzzlePiece className="w-6 h-6" />,
    title: 'Strategy Games',
    desc: 'Chess, puzzles, and systems thinking — design for the mind.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: <HiOutlineFilm className="w-6 h-6" />,
    title: 'Cinema',
    desc: 'Visual storytelling, cinematography, and the art of framing narratives.',
    color: 'from-indigo-500 to-purple-500',
  },
]

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-32 px-6 relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] -translate-y-1/2" />

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
            Beyond Work
          </motion.span>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-4"
          >
            When I&apos;m not{' '}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              designing
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-gray-400 text-lg max-w-xl mb-16"
          >
            The things that fuel my creativity and keep my perspective fresh.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {hobbies.map((h) => (
            <motion.div
              key={h.title}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2 } }}
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all overflow-hidden"
            >
              {/* Subtle gradient glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${h.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br ${h.color} text-white mb-4 opacity-80 group-hover:opacity-100 transition-opacity`}>
                  {h.icon}
                </div>
                <h3 className="font-display font-semibold text-white mb-2">{h.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
