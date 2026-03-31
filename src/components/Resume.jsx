import { motion } from 'framer-motion'
import { HiOutlineArrowDownTray } from 'react-icons/hi2'
import MagneticButton from './MagneticButton'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const experience = [
  {
    role: 'UI/UX Designer',
    company: 'Freelance / Contract',
    period: '2023 — Present',
    highlights: [
      'Designed end-to-end product interfaces for SaaS, fintech, and Web3 clients',
      'Led design sprints and user research sessions for product discovery',
      'Shipped pixel-perfect designs with developer handoff and design systems',
    ],
  },
  {
    role: 'Product Design Intern',
    company: 'Startup Studio',
    period: '2022 — 2023',
    highlights: [
      'Contributed to 3 product launches across mobile and web platforms',
      'Created wireframes, prototypes, and user flows in Figma',
      'Collaborated with engineering to ensure design integrity in production',
    ],
  },
]

const skillGroups = [
  {
    category: 'Design',
    items: ['Figma', 'Adobe XD', 'Sketch', 'Framer', 'Principle', 'FigJam'],
  },
  {
    category: 'Product',
    items: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing', 'Information Architecture'],
  },
  {
    category: 'Development',
    items: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Solidity', 'Ethers.js'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Notion', 'Jira', 'Maze', 'Hotjar', 'VS Code'],
  },
]

export default function Resume() {
  return (
    <section id="resume" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[700px] h-[500px] bg-[radial-gradient(circle,rgba(242,78,30,0.05)_0%,rgba(0,0,0,0)_60%)] pointer-events-none blur-[60px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.span
            variants={fadeUp}
            className="text-[#FF7262] text-xs font-semibold tracking-widest uppercase border border-[#FF7262]/20 bg-[#FF7262]/10 px-4 py-1.5 rounded-full inline-block backdrop-blur-md"
          >
            Résumé
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-6 mb-6 text-[#EAEAEA]"
          >
            Experience &{' '}
            <span className="bg-gradient-to-r from-[#FF7262] to-[#A259FF] bg-clip-text text-transparent glow-text">
              skills
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#8A8A8A] text-lg sm:text-xl max-w-2xl mb-12 leading-relaxed"
          >
            A snapshot of my professional journey, tools, and the technical skills I bring to every project.
          </motion.p>

          <motion.div variants={fadeUp} className="mb-24">
            <MagneticButton className="inline-block">
              <a
                href="/Nitin_Upadhyaya_Resume.pdf"
                download
                className="flex items-center gap-3 px-8 py-4 bg-white/[0.03] text-white font-medium rounded-full border border-white/[0.1] hover:bg-white/[0.08] hover:border-[#FF7262]/50 transition-all duration-300 shadow-[0_0_20px_rgba(255,114,98,0)] hover:shadow-[0_0_30px_rgba(255,114,98,0.2)] glass-panel"
              >
                <HiOutlineArrowDownTray className="w-5 h-5 text-[#FF7262]" />
                Download Resume
              </a>
            </MagneticButton>
            <p className="text-[#666] text-xs mt-4 ml-6 font-medium tracking-wide">
              PDF · Last updated 2024
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Experience Column */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="lg:col-span-7"
          >
            <motion.h3
              variants={fadeUp}
              className="font-display text-2xl font-bold mb-8 text-[#EAEAEA]"
            >
              Experience
            </motion.h3>

            <div className="space-y-6">
              {experience.map((exp) => (
                <motion.div
                  key={exp.role + exp.company}
                  variants={fadeUp}
                  className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F24E1E] to-[#A259FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_10px_rgba(242,78,30,0.5)]" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div>
                      <h4 className="font-display font-bold text-xl text-[#EAEAEA] mb-1">{exp.role}</h4>
                      <p className="text-[#A259FF] text-sm font-medium tracking-wide uppercase">{exp.company}</p>
                    </div>
                    <span className="text-[#8A8A8A] text-sm bg-white/5 px-3 py-1 rounded-full border border-white/5 shrink-0 self-start sm:self-center">{exp.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-[#8A8A8A] text-sm flex gap-3 leading-relaxed">
                        <span className="text-[#FF7262] mt-1 shrink-0 text-lg leading-none">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            
            {/* Education inside left column */}
            <motion.div variants={fadeUp} className="mt-16">
              <h3 className="font-display text-2xl font-bold mb-8 text-[#EAEAEA]">Education</h3>
              <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/[0.03]">
                <h4 className="font-display font-bold text-lg text-[#EAEAEA] mb-1">Bachelor&apos;s Degree</h4>
                <p className="text-[#FF7262] text-sm font-medium tracking-wide uppercase mb-3">University Name · Grad Year</p>
                <p className="text-[#8A8A8A] text-sm leading-relaxed">
                  Relevant coursework in design, computer science, and human-computer interaction.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Column */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="lg:col-span-5"
          >
            <motion.h3
              variants={fadeUp}
              className="font-display text-2xl font-bold mb-8 text-[#EAEAEA]"
            >
              Skills & Tools
            </motion.h3>

            <div className="space-y-10">
              {skillGroups.map((g) => (
                <motion.div
                  key={g.category}
                  variants={fadeUp}
                  className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05]"
                >
                  <h4 className="text-sm font-semibold text-[#1ABCFE] uppercase tracking-widest mb-5 flex items-center gap-3">
                    {g.category}
                    <div className="h-[1px] flex-1 bg-white/[0.05]" />
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 text-sm font-medium text-[#D1D1D1] bg-white/[0.03] border border-white/[0.05] rounded-xl hover:border-white/[0.2] hover:bg-white/[0.08] transition-all cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
