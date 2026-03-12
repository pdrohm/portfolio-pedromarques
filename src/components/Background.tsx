import { motion } from 'framer-motion';

const blobs = [
  { color: '#22d3ee', x: '12%', y: '18%', size: 520, delay: 0, duration: 22 },
  { color: '#7c3aed', x: '74%', y: '62%', size: 600, delay: -8, duration: 28 },
  { color: '#3b82f6', x: '45%', y: '82%', size: 380, delay: -14, duration: 20 },
  { color: '#6366f1', x: '82%', y: '8%', size: 340, delay: -5, duration: 24 },
  { color: '#0ea5e9', x: '25%', y: '55%', size: 300, delay: -18, duration: 26 },
];

export function Background() {
  const currentYear = String(new Date().getFullYear());

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {/* Deep space base */}
      <div style={{ position: 'absolute', inset: 0, background: '#05050a' }} />

      {/* Subtle grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />

      {/* Aurora blobs */}
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: blob.x,
            top: blob.y,
            width: blob.size,
            height: blob.size,
            borderRadius: '50%',
            background: blob.color,
            opacity: 0.1,
            filter: 'blur(90px)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: [0, 40, -25, 15, 0],
            y: [0, -30, 40, -15, 0],
            scale: [1, 1.15, 0.9, 1.08, 1],
          }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* Desktop label — left side */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          position: 'absolute',
          left: 48,
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
        }}
      >
        {['React Native', 'TypeScript', 'Performance', 'Mobile UI/UX'].map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 + i * 0.1, duration: 0.6 }}
            style={{
              fontSize: 11,
              fontFamily: 'var(--font-mono)',
              color: 'rgba(255,255,255,0.42)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              textShadow: '0 1px 6px rgba(0,0,0,0.55)',
            }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>

      {/* Desktop label — right side */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          position: 'absolute',
          right: 48,
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          alignItems: 'flex-end',
        }}
      >
        {['Senior Engineer', '6+ years', 'Santa Catarina, BR', currentYear].map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 + i * 0.1, duration: 0.6 }}
            style={{
              fontSize: 11,
              fontFamily: 'var(--font-mono)',
              color: 'rgba(255,255,255,0.42)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              textShadow: '0 1px 6px rgba(0,0,0,0.55)',
            }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
