import { motion } from 'framer-motion'

const shapes = [
  // Circles
  { type: 'circle', size: 60, x: '8%', y: '12%', color: '#F24E1E', opacity: 0.12, duration: 22, delay: 0 },
  { type: 'circle', size: 40, x: '85%', y: '8%', color: '#A259FF', opacity: 0.10, duration: 26, delay: 2 },
  { type: 'circle', size: 80, x: '75%', y: '55%', color: '#1ABCFE', opacity: 0.08, duration: 30, delay: 1 },
  { type: 'circle', size: 35, x: '20%', y: '70%', color: '#0ACF83', opacity: 0.12, duration: 24, delay: 3 },
  { type: 'circle', size: 50, x: '55%', y: '85%', color: '#F24E1E', opacity: 0.07, duration: 28, delay: 4 },
  // Squares (rotated)
  { type: 'square', size: 40, x: '90%', y: '30%', color: '#0ACF83', opacity: 0.10, duration: 25, delay: 1 },
  { type: 'square', size: 55, x: '12%', y: '45%', color: '#F24E1E', opacity: 0.08, duration: 20, delay: 2 },
  { type: 'square', size: 30, x: '65%', y: '15%', color: '#A259FF', opacity: 0.12, duration: 27, delay: 0 },
  // Triangles
  { type: 'triangle', size: 50, x: '40%', y: '20%', color: '#1ABCFE', opacity: 0.10, duration: 23, delay: 3 },
  { type: 'triangle', size: 35, x: '80%', y: '75%', color: '#0ACF83', opacity: 0.09, duration: 29, delay: 1 },
  { type: 'triangle', size: 45, x: '5%', y: '85%', color: '#A259FF', opacity: 0.08, duration: 21, delay: 2 },
  // Crosses
  { type: 'cross', size: 30, x: '50%', y: '5%', color: '#F24E1E', opacity: 0.14, duration: 26, delay: 0 },
  { type: 'cross', size: 25, x: '30%', y: '55%', color: '#1ABCFE', opacity: 0.10, duration: 22, delay: 4 },
  { type: 'cross', size: 20, x: '95%', y: '60%', color: '#A259FF', opacity: 0.12, duration: 24, delay: 1 },
  // More scattered shapes
  { type: 'circle', size: 25, x: '45%', y: '40%', color: '#FF7262', opacity: 0.06, duration: 32, delay: 5 },
  { type: 'square', size: 20, x: '35%', y: '92%', color: '#1ABCFE', opacity: 0.09, duration: 19, delay: 3 },
  { type: 'triangle', size: 30, x: '60%', y: '60%', color: '#F24E1E', opacity: 0.07, duration: 25, delay: 2 },
]

function ShapeElement({ type, size, color }) {
  if (type === 'circle') {
    return (
      <div
        className="rounded-full"
        style={{ width: size, height: size, backgroundColor: color }}
      />
    )
  }

  if (type === 'square') {
    return (
      <div
        className="rounded-md"
        style={{ width: size, height: size, backgroundColor: color }}
      />
    )
  }

  if (type === 'triangle') {
    return (
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: `${size / 2}px solid transparent`,
          borderRight: `${size / 2}px solid transparent`,
          borderBottom: `${size}px solid ${color}`,
        }}
      />
    )
  }

  if (type === 'cross') {
    const thick = Math.max(size * 0.25, 4)
    return (
      <div className="relative" style={{ width: size, height: size }}>
        <div
          className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full"
          style={{ width: size, height: thick, backgroundColor: color }}
        />
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full"
          style={{ width: thick, height: size, backgroundColor: color }}
        />
      </div>
    )
  }

  return null
}

function getRotationKeyframes(type) {
  if (type === 'square') return [0, 45, 90, 135, 180]
  return [0, 15, -10, 20, 0]
}

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: shape.x, top: shape.y, opacity: shape.opacity }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 20, 0],
            rotate: getRotationKeyframes(shape.type),
            scale: [1, 1.08, 0.95, 1.05, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay,
          }}
        >
          <ShapeElement type={shape.type} size={shape.size} color={shape.color} />
        </motion.div>
      ))}
    </div>
  )
}
