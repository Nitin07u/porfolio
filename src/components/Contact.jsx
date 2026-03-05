import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineEnvelope, HiOutlinePaperAirplane } from 'react-icons/hi2'
import { FaLinkedinIn, FaGithub, FaDribbble } from 'react-icons/fa6'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

const socials = [
  {
    icon: <FaLinkedinIn className="w-5 h-5" />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/nitinupadhyaya', // PLACEHOLDER: Update with real URL
  },
  {
    icon: <FaGithub className="w-5 h-5" />,
    label: 'GitHub',
    href: 'https://github.com/Nitin07u',
  },
  {
    icon: <FaDribbble className="w-5 h-5" />,
    label: 'Dribbble',
    href: 'https://dribbble.com/nitinupadhyaya', // PLACEHOLDER: Update with real URL
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // PLACEHOLDER: Integrate with a form service (Formspree, EmailJS, etc.)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] bg-[#A259FF]/4 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-[#1ABCFE] text-sm font-medium tracking-widest uppercase"
          >
            Get in Touch
          </motion.span>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-4 text-[#1E1E1E]"
          >
            Let&apos;s build something{' '}
            <span className="bg-gradient-to-r from-[#1ABCFE] to-[#0ACF83] bg-clip-text text-transparent">
              together
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-[#636363] text-lg max-w-xl mx-auto"
          >
            Have a project in mind, a product challenge to solve, or just want to say hi? I&apos;d love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <label htmlFor="contact-name" className="block text-sm font-medium text-[#1E1E1E] mb-2">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#1E1E1E] placeholder-gray-400 focus:outline-none focus:border-[#1ABCFE]/50 focus:ring-1 focus:ring-[#1ABCFE]/20 transition-all"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <label htmlFor="contact-email" className="block text-sm font-medium text-[#1E1E1E] mb-2">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#1E1E1E] placeholder-gray-400 focus:outline-none focus:border-[#1ABCFE]/50 focus:ring-1 focus:ring-[#1ABCFE]/20 transition-all"
                placeholder="you@email.com"
              />
            </motion.div>

            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <label htmlFor="contact-message" className="block text-sm font-medium text-[#1E1E1E] mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#1E1E1E] placeholder-gray-400 focus:outline-none focus:border-[#1ABCFE]/50 focus:ring-1 focus:ring-[#1ABCFE]/20 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </motion.div>

            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <button
                type="submit"
                disabled={submitted}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#1E1E1E] text-white font-medium rounded-full hover:shadow-lg hover:shadow-black/10 transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
              >
                {submitted ? (
                  'Message Sent ✓'
                ) : (
                  <>
                    <HiOutlinePaperAirplane className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </motion.div>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-8"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-white border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#F24E1E]/10 flex items-center justify-center text-[#F24E1E]">
                  <HiOutlineEnvelope className="w-5 h-5" />
                </div>
                <span className="font-medium text-[#1E1E1E]">Email</span>
              </div>
              {/* PLACEHOLDER: Replace with real email */}
              <a
                href="mailto:nitin.upadhyaya@email.com"
                className="text-[#636363] text-sm hover:text-[#F24E1E] transition-colors"
              >
                nitin.upadhyaya@email.com
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <h4 className="font-display font-semibold text-[#1E1E1E] mb-4">Connect</h4>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[#636363] hover:text-[#1E1E1E] hover:border-gray-200 hover:bg-gray-100 transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#F24E1E]/5 to-[#A259FF]/5 border border-[#F24E1E]/10"
            >
              <p className="text-[#636363] text-sm leading-relaxed">
                &quot;I believe the best products come from genuine collaboration between design, product, and engineering. 
                If you share that belief, let&apos;s talk.&quot;
              </p>
              <p className="text-[#F24E1E] text-sm font-medium mt-3">— Nitin</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
