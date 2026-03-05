import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-gray-200 py-8 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#636363] text-sm">
          © {year} Nitin Upadhyaya. Crafted with intention.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/nitinupadhyaya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#636363] text-sm hover:text-[#F24E1E] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Nitin07u"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#636363] text-sm hover:text-[#F24E1E] transition-colors"
          >
            GitHub
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[#636363] text-sm hover:text-[#F24E1E] transition-colors cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </motion.footer>
  )
}
