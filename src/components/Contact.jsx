import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineEnvelope, HiOutlinePaperAirplane } from 'react-icons/hi2'
import { FaLinkedinIn, FaGithub, FaDribbble } from 'react-icons/fa6'
import MagneticButton from './MagneticButton'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const socials = [
  {
    icon: <FaLinkedinIn className="w-5 h-5" />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/nitinupadhyaya',
  },
  {
    icon: <FaGithub className="w-5 h-5" />,
    label: 'GitHub',
    href: 'https://github.com/Nitin07u',
  },
  {
    icon: <FaDribbble className="w-5 h-5" />,
    label: 'Dribbble',
    href: 'https://dribbble.com/nitinupadhyaya', 
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[500px] bg-[radial-gradient(circle,rgba(162,89,255,0.06)_0%,rgba(0,0,0,0)_60%)] pointer-events-none blur-[60px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="text-center mb-20"
        >
          <motion.span
            variants={fadeUp}
            className="text-[#A259FF] text-xs font-semibold tracking-widest uppercase border border-[#A259FF]/20 bg-[#A259FF]/10 px-4 py-1.5 rounded-full inline-block backdrop-blur-md"
          >
            Get in Touch
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-6 mb-6 text-[#EAEAEA]"
          >
            Let&apos;s build something{' '}
            <span className="bg-gradient-to-r from-[#A259FF] to-[#1ABCFE] bg-clip-text text-transparent glow-text">
              together
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#8A8A8A] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Have a project in mind, a product challenge to solve, or just want to say hi? I&apos;d love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Contact Form */}
          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/[0.01] p-8 sm:p-10 rounded-3xl border border-white/[0.03] backdrop-blur-xl relative group focus-within:border-white/[0.1] transition-colors duration-500"
          >
            {/* Animated subtle border trace */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
               <div className="absolute -inset-[100%] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(0,0,0,0)_50%,rgba(162,89,255,0.1)_100%)] animate-spin [animation-duration:8s] opacity-0 group-focus-within:opacity-100 transition-opacity duration-1000" />
            </div>

            <motion.div variants={fadeUp} className="relative z-10">
              <label htmlFor="contact-name" className="block text-xs font-semibold tracking-widest uppercase text-[#8A8A8A] mb-3">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/[0.05] rounded-2xl px-5 py-4 text-[#EAEAEA] placeholder-white/20 focus:outline-none focus:border-[#A259FF]/50 focus:bg-white/[0.05] transition-all duration-300"
                placeholder="Example: Jane Doe"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="relative z-10">
              <label htmlFor="contact-email" className="block text-xs font-semibold tracking-widest uppercase text-[#8A8A8A] mb-3">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/[0.05] rounded-2xl px-5 py-4 text-[#EAEAEA] placeholder-white/20 focus:outline-none focus:border-[#A259FF]/50 focus:bg-white/[0.05] transition-all duration-300"
                placeholder="hello@example.com"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="relative z-10">
              <label htmlFor="contact-message" className="block text-xs font-semibold tracking-widest uppercase text-[#8A8A8A] mb-3">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/[0.05] rounded-2xl px-5 py-4 text-[#EAEAEA] placeholder-white/20 focus:outline-none focus:border-[#A259FF]/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </motion.div>

            <motion.div variants={fadeUp} className="relative z-10 pt-2">
              <MagneticButton
                disabled={submitted}
                className="w-full w-auto"
              >
                <div className={`w-full sm:w-auto px-10 py-4 font-semibold tracking-wide rounded-full flex items-center justify-center gap-3 transition-all duration-500 ${submitted ? 'bg-[#0ACF83]/10 text-[#0ACF83] border border-[#0ACF83]/30 shadow-[0_0_20px_rgba(10,207,131,0.2)]' : 'bg-white text-[#0A0A0B] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02]'}`}>
                  {submitted ? (
                    'Message Sent ✓'
                  ) : (
                    <>
                      <HiOutlinePaperAirplane className="w-5 h-5 -rotate-45 -mt-1" />
                      Send Message
                    </>
                  )}
                </div>
              </MagneticButton>
            </motion.div>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
            className="space-y-10"
          >
            <motion.div
              variants={fadeUp}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-[#1ABCFE]/30 transition-colors duration-500 group"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#1ABCFE]/10 flex items-center justify-center text-[#1ABCFE] group-hover:bg-[#1ABCFE] group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(26,188,254,0.1)]">
                  <HiOutlineEnvelope className="w-6 h-6" />
                </div>
                <span className="font-semibold text-[#EAEAEA] text-lg">Email</span>
              </div>
              <a
                href="mailto:nitin.upadhyaya@email.com"
                className="text-2xl font-display font-medium bg-gradient-to-r from-[#EAEAEA] to-[#8A8A8A] hover:to-[#1ABCFE] bg-clip-text text-transparent transition-all duration-500 break-all"
              >
                nitin.upadhyaya@email.com
              </a>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h4 className="font-semibold text-xs tracking-widest uppercase text-[#8A8A8A] mb-6">Socials</h4>
              <div className="flex flex-wrap gap-4">
                {socials.map((s) => (
                  <MagneticButton key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-16 h-16 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-[#EAEAEA] hover:text-[#A259FF] hover:border-[#A259FF]/30 hover:bg-[#A259FF]/5 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(162,89,255,0.2)]"
                    >
                      {s.icon}
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="p-8 rounded-3xl bg-gradient-to-br from-[#F24E1E]/10 to-[#A259FF]/10 border border-[#F24E1E]/20 relative overflow-hidden group"
            >
              {/* Subtle animated sheen */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-150%] skew-x-[-30deg] group-hover:animate-[sheen_1.5s_ease-in-out_infinite]" />
              
              <p className="text-[#EAEAEA] text-base leading-relaxed italic relative z-10">
                &quot;I believe the best products come from genuine collaboration between design, product, and engineering. 
                If you share that belief, let&apos;s talk.&quot;
              </p>
              <p className="text-[#F24E1E] text-sm font-bold mt-4 tracking-widest uppercase relative z-10">— Nitin</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <style>{`
        @keyframes sheen {
          100% { transform: translateX(150%) skewX(-30deg); }
        }
      `}</style>
    </section>
  )
}
