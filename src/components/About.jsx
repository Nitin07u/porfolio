import { motion } from 'framer-motion'
import { HiOutlineLightBulb, HiOutlineCube, HiOutlineSparkles } from 'react-icons/hi2'
import { HiOutlineCode } from 'react-icons/hi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

const skills = [
  {
    icon: <HiOutlineLightBulb className="w-6 h-6" />,
    title: 'Product Thinking',
    desc: 'Translating complex user needs into elegant, structured design decisions rooted in research and empathy.',
  },
  {
    icon: <HiOutlineCube className="w-6 h-6" />,
    title: 'UI/UX Design',
    desc: 'Crafting pixel-perfect interfaces in Figma with strong visual hierarchy, consistency, and design systems.',
  },
  {
    icon: <HiOutlineCode className="w-6 h-6" />,
    title: 'Frontend Sensibility',
    desc: 'Bridging design and engineering — understanding component architecture, responsive layouts, and animation.',
  },
  {
    icon: <HiOutlineSparkles className="w-6 h-6" />,
    title: 'Smart Contracts',
    desc: 'Exploring decentralized application design with Solidity — from token systems to on-chain logic.',
  },
]

const journey = [
  { year: '2021', label: 'Started designing', detail: 'Discovered UI/UX through self-learning and design challenges' },
  { year: '2022', label: 'First real project', detail: 'Designed and shipped a production app for a real client' },
  { year: '2023', label: 'Product focus', detail: 'Shifted to product thinking — user research, flows, and strategy' },
  { year: '2024', label: 'Solidity + Web3', detail: 'Expanded into smart contract development and dApp interfaces' },
  { year: 'Now', label: 'Building & growing', detail: 'Designing products, shipping code, and crafting experiences' },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 w-[600px] h-[400px] -translate-x-1/2 bg-purple-600/5 rounded-full blur-[120px]" />

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
            About Me
          </motion.span>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-6"
          >
            Designing with{' '}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              purpose
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-16"
          >
            I&apos;m a product-focused UI/UX designer who believes great design is invisible — it
            just works. I combine user empathy with systematic thinking to build interfaces
            that are both beautiful and functional. Beyond design, I explore smart contract
            development with Solidity, giving me a unique perspective on building
            for decentralized systems.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {skills.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 hover:bg-white/[0.04] transition-all"
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 mb-4 group-hover:bg-purple-500/20 transition-colors">
                {s.icon}
              </div>
              <h3 className="font-display font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.h3
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl font-bold mb-8"
          >
            The Journey
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent hidden sm:block" />

            <div className="space-y-6">
              {journey.map((item) => (
                <motion.div
                  key={item.year}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="flex gap-6 items-start"
                >
                  <div className="hidden sm:flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-xs font-bold text-purple-400 shrink-0">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                    <span className="sm:hidden text-purple-400 text-xs font-bold">{item.year} · </span>
                    <span className="font-medium text-white">{item.label}</span>
                    <p className="text-gray-500 text-sm mt-1">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
