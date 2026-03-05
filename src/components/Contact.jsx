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
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px]" />

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
            className="text-purple-400 text-sm font-medium tracking-widest uppercase"
          >
            Get in Touch
          </motion.span>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-4"
          >
            Let&apos;s build something{' '}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              together
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-gray-400 text-lg max-w-xl mx-auto"
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
              <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                placeholder="you@email.com"
              />
            </motion.div>

            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </motion.div>

            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <button
                type="submit"
                disabled={submitted}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
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
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <HiOutlineEnvelope className="w-5 h-5" />
                </div>
                <span className="font-medium text-white">Email</span>
              </div>
              {/* PLACEHOLDER: Replace with real email */}
              <a
                href="mailto:nitin.upadhyaya@email.com"
                className="text-gray-400 text-sm hover:text-purple-400 transition-colors"
              >
                nitin.upadhyaya@email.com
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <h4 className="font-display font-semibold text-white mb-4">Connect</h4>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/30 hover:bg-white/[0.08] transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-indigo-500/5 border border-purple-500/10"
            >
              <p className="text-gray-300 text-sm leading-relaxed">
                &quot;I believe the best products come from genuine collaboration between design, product, and engineering. 
                If you share that belief, let&apos;s talk.&quot;
              </p>
              <p className="text-purple-400 text-sm font-medium mt-3">— Nitin</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
