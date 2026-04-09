import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <div className="max-w-6xl mx-auto px-6 relative py-10 opacity-50">
      {/* Background glow behind divider */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-24 bg-[radial-gradient(ellipse_at_center,rgba(162,89,255,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none blur-xl" />
      
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent overflow-hidden">
        {/* Animated shimmer sweep running through the line */}
        <motion.div 
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          animate={{ x: ['-200%', '300%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </div>
  )
}
