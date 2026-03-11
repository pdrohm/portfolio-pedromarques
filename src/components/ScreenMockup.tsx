import { motion } from 'framer-motion';
import type { ProjectMedia } from '../data/projects';

interface ScreenMockupProps {
  media: ProjectMedia;
  index: number;
}

export function ScreenMockup({ media, index }: ScreenMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.12, type: 'spring', stiffness: 300, damping: 28 }}
      style={{
        borderRadius: 18,
        overflow: 'hidden',
        background: media.gradient,
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)`,
        position: 'relative',
        aspectRatio: '9/16',
        minHeight: 160,
      }}
    >
      {/* Fake phone status bar */}
      <div
        style={{
          height: 28,
          padding: '0 14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(0,0,0,0.3)',
        }}
      >
        <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>
          9:41
        </span>
        <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
          {[3, 4, 5].map((h) => (
            <div key={h} style={{ width: 3, height: h, background: 'rgba(255,255,255,0.6)', borderRadius: 1 }} />
          ))}
          <div style={{ width: 10, height: 6, border: '1px solid rgba(255,255,255,0.5)', borderRadius: 2, marginLeft: 3 }}>
            <div style={{ width: '70%', height: '100%', background: media.accent, borderRadius: 1 }} />
          </div>
        </div>
      </div>

      {/* Simulated app header */}
      <div
        style={{
          padding: '14px 14px 10px',
          background: 'rgba(0,0,0,0.2)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div
          style={{
            width: '60%',
            height: 13,
            borderRadius: 7,
            background: `linear-gradient(90deg, ${media.accent}80, ${media.accent}30)`,
            marginBottom: 6,
          }}
        />
        <div
          style={{
            width: '40%',
            height: 9,
            borderRadius: 5,
            background: 'rgba(255,255,255,0.15)',
          }}
        />
      </div>

      {/* Content blocks */}
      <div style={{ padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {/* Main content block */}
        <div
          style={{
            borderRadius: 12,
            overflow: 'hidden',
            background: `linear-gradient(135deg, ${media.accent}18, ${media.accent}08)`,
            border: `1px solid ${media.accent}25`,
            padding: 12,
          }}
        >
          <div style={{ width: '100%', height: 10, borderRadius: 5, background: `${media.accent}50`, marginBottom: 8 }} />
          <div style={{ width: '75%', height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.2)', marginBottom: 5 }} />
          <div style={{ width: '55%', height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.15)' }} />
        </div>

        {/* Row of small cards */}
        <div style={{ display: 'flex', gap: 6 }}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: 44,
                borderRadius: 10,
                background: i === 1 ? `${media.accent}22` : 'rgba(255,255,255,0.05)',
                border: `1px solid ${i === 1 ? `${media.accent}40` : 'rgba(255,255,255,0.06)'}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 8,
                gap: 4,
              }}
            >
              <div style={{ width: '80%', height: 7, borderRadius: 4, background: i === 1 ? `${media.accent}70` : 'rgba(255,255,255,0.2)' }} />
              <div style={{ width: '50%', height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.1)' }} />
            </div>
          ))}
        </div>

        {/* Long list items */}
        {[1, 2].map((i) => (
          <div
            key={i}
            style={{
              height: 36,
              borderRadius: 10,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              padding: '0 10px',
              gap: 10,
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: 6,
                background: `${media.accent}30`,
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ width: '60%', height: 7, borderRadius: 4, background: 'rgba(255,255,255,0.2)' }} />
              <div style={{ width: '40%', height: 5, borderRadius: 3, background: 'rgba(255,255,255,0.1)' }} />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom action bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 52,
          background: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '0 14px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              width: 22,
              height: 22,
              borderRadius: 6,
              background: i === 0 ? `${media.accent}40` : 'rgba(255,255,255,0.08)',
            }}
          />
        ))}
      </div>

      {/* Accent glow */}
      <div
        style={{
          position: 'absolute',
          top: -40,
          right: -40,
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: media.accent,
          opacity: 0.08,
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      {/* Label overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: 52,
          left: 0,
          right: 0,
          textAlign: 'center',
          padding: '4px 0',
        }}
      >
      </div>
    </motion.div>
  );
}
