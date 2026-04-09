import { motion } from 'framer-motion'
import { useMemo } from 'react'

export function AnimatedText({ text, className, once = true, delay = 0 }) {
  // Split text into lines, then words, then characters
  const lines = useMemo(() => {
    return text.split('\n').map(line => line.split(' '));
  }, [text]);

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.02, delayChildren: delay },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Custom easing for premium feel
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
    >
      {lines.map((words, lineIdx) => (
        <span key={lineIdx} className="block overflow-hidden relative">
          {words.map((word, wordIdx) => (
            <span key={wordIdx} className="inline-block whitespace-pre">
              {word.split('').map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  className="inline-block"
                  variants={child}
                >
                  {char}
                </motion.span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}
