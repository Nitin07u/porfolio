import { motion } from 'framer-motion'
import { HiOutlineArrowDownTray } from 'react-icons/hi2'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
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
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-[#F24E1E]/4 rounded-full blur-[120px]" />

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
            className="text-[#A259FF] text-sm font-medium tracking-widest uppercase"
          >
            Resume
          </motion.span>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-4 text-[#1E1E1E]"
          >
            Experience &{' '}
            <span className="bg-gradient-to-r from-[#F24E1E] to-[#A259FF] bg-clip-text text-transparent">
              skills
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-[#636363] text-lg max-w-xl mb-6"
          >
            A snapshot of my professional journey, tools, and the skills I bring to every project.
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            {/* Placeholder: replace href with actual resume PDF */}
            <a
              href="/Nitin_Upadhyaya_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E1E1E] text-white font-medium rounded-full hover:shadow-lg hover:shadow-black/10 transition-all"
            >
              <HiOutlineArrowDownTray className="w-5 h-5" />
              Download Resume
            </a>
            <p className="text-[#999] text-xs mt-2">
              {/* PLACEHOLDER: Add your actual resume PDF to /public/Nitin_Upadhyaya_Resume.pdf */}
              PDF · Last updated 2024
            </p>
          </motion.div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-16"
        >
          <motion.h3
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl font-bold mb-8 text-[#1E1E1E]"
          >
            Experience
          </motion.h3>

          <div className="space-y-6">
            {experience.map((exp) => (
              <motion.div
                key={exp.role + exp.company}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h4 className="font-display font-semibold text-[#1E1E1E]">{exp.role}</h4>
                    <p className="text-[#636363] text-sm">{exp.company}</p>
                  </div>
                  <span className="text-[#F24E1E] text-sm font-medium shrink-0">{exp.period}</span>
                </div>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-[#636363] text-sm flex gap-2">
                      <span className="text-[#F24E1E] mt-1.5 shrink-0">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-16"
        >
          <motion.h3
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl font-bold mb-8 text-[#1E1E1E]"
          >
            Skills & Tools
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((g) => (
              <motion.div
                key={g.category}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-sm font-medium text-[#F24E1E] uppercase tracking-wide mb-3">{g.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm text-[#636363] bg-gray-50 border border-gray-100 rounded-lg hover:border-gray-200 hover:bg-gray-100 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-16"
        >
          <motion.h3
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl font-bold mb-8 text-[#1E1E1E]"
          >
            Education
          </motion.h3>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-white border border-gray-100"
          >
            {/* PLACEHOLDER: Replace with actual education details from resume */}
            <h4 className="font-display font-semibold text-[#1E1E1E]">Bachelor&apos;s Degree</h4>
            <p className="text-[#636363] text-sm mt-1">University Name · Graduation Year</p>
            <p className="text-[#636363] text-sm mt-2">
              Relevant coursework in design, computer science, and human-computer interaction.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
