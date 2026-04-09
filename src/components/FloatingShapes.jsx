import { motion } from 'framer-motion'

const particles = [
  { size: 300, x: '5%', y: '15%', color: '#F24E1E', blur: 120, duration: 25, delay: 0 },
  { size: 400, x: '85%', y: '10%', color: '#A259FF', blur: 150, duration: 30, delay: 2 },
  { size: 250, x: '75%', y: '50%', color: '#1ABCFE', blur: 100, duration: 20, delay: 4 },
  { size: 350, x: '10%', y: '70%', color: '#0ACF83', blur: 130, duration: 28, delay: 1 },
  { size: 450, x: '60%', y: '85%', color: '#FF7262', blur: 160, duration: 35, delay: 5 },
]

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen" aria-hidden="true">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
            backgroundColor: p.color,
            filter: `blur(${p.blur}px)`,
            opacity: 0.08,
          }}
          animate={{
            y: [0, -40, 20, -10, 0],
            x: [0, 30, -20, 15, 0],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  )
}
