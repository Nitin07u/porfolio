import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-white/[0.05] py-10 px-6 bg-[#050505]"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-[#8A8A8A] text-sm font-medium">
          © {year} <span className="text-[#EAEAEA]">Nitin Upadhyaya</span>. Crafted with intention.
        </p>
        <div className="flex items-center gap-8">
          <a
            href="https://linkedin.com/in/nitinupadhyaya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8A8A8A] text-sm font-medium hover:text-white transition-colors relative group"
          >
            LinkedIn
            <span className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </a>
          <a
            href="https://github.com/Nitin07u"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8A8A8A] text-sm font-medium hover:text-white transition-colors relative group"
          >
            GitHub
            <span className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[#8A8A8A] text-sm font-medium hover:text-[#1ABCFE] transition-colors cursor-pointer flex items-center gap-2 group"
          >
            Back to top 
            <span className="group-hover:-translate-y-1 transition-transform inline-block">↑</span>
          </button>
        </div>
      </div>
    </motion.footer>
  )
}
