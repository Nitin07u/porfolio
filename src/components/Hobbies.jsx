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
    color: '#F24E1E',
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
    color: '#A259FF',
  },
  {
    icon: <HiOutlineFilm className="w-6 h-6" />,
    title: 'Cinema',
    desc: 'Visual storytelling, cinematography, and the art of framing narratives.',
    color: '#F24E1E',
  },
]

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#0ACF83]/4 rounded-full blur-[120px] -translate-y-1/2" />

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
            className="text-[#0ACF83] text-sm font-medium tracking-widest uppercase"
          >
            Beyond Work
          </motion.span>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-4 text-[#1E1E1E]"
          >
            When I&apos;m not{' '}
            <span className="bg-gradient-to-r from-[#0ACF83] to-[#1ABCFE] bg-clip-text text-transparent">
              designing
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-[#636363] text-lg max-w-xl mb-16"
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
              className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/50 transition-all overflow-hidden"
            >
              {/* Subtle color glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"
                style={{ backgroundColor: h.color }}
              />

              <div className="relative z-10">
                <div
                  className="w-11 h-11 flex items-center justify-center rounded-xl text-white mb-4 opacity-90 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: h.color }}
                >
                  {h.icon}
                </div>
                <h3 className="font-display font-semibold text-[#1E1E1E] mb-2">{h.title}</h3>
                <p className="text-[#636363] text-sm leading-relaxed">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
