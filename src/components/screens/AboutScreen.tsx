import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { profile } from '../../data/profile';

interface AboutScreenProps {
  goBack: () => void;
}

export function AboutScreen({ goBack }: AboutScreenProps) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(180deg, #0d0d1a 0%, #07070f 100%)',
      }}
    >
      <StatusBar />

      {/* Nav bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '4px 16px 12px',
          flexShrink: 0,
          gap: 8,
        }}
      >
        <motion.button
          onClick={goBack}
          whileTap={{ scale: 0.9 }}
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: 'none',
            borderRadius: 20,
            padding: '6px 14px 6px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            cursor: 'pointer',
            color: '#22d3ee',
          }}
        >
          <ChevronLeft size={16} strokeWidth={2.5} />
          <span style={{ fontSize: 13, fontWeight: 500, fontFamily: 'var(--font-body)' }}>Back</span>
        </motion.button>
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            fontFamily: 'var(--font-display)',
            color: 'rgba(255,255,255,0.9)',
            letterSpacing: '-0.02em',
          }}
        >
          About Me
        </span>
      </div>

      {/* Scrollable content */}
      <div
        className="phone-scroll"
        style={{ flex: 1, paddingBottom: 40, paddingLeft: 18, paddingRight: 18 }}
      >
        {/* Profile hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 8,
            paddingBottom: 28,
            position: 'relative',
          }}
        >
          {/* Glow behind avatar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 160,
              height: 160,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(34,211,238,0.2) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Avatar */}
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #22d3ee 0%, #7c3aed 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              color: '#fff',
              letterSpacing: '-0.02em',
              boxShadow: '0 0 0 3px rgba(34,211,238,0.25), 0 8px 32px rgba(0,0,0,0.5)',
              marginBottom: 14,
              position: 'relative',
              zIndex: 1,
              overflow: 'hidden',
            }}
          >
            {profile.avatarUrl ? (
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              profile.initials
            )}
          </div>

          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              color: '#f1f5f9',
              letterSpacing: '-0.03em',
              marginBottom: 4,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              fontSize: 12,
              color: '#22d3ee',
              fontFamily: 'var(--font-mono)',
              fontWeight: 500,
              letterSpacing: '0.04em',
              marginBottom: 4,
            }}
          >
            {profile.title}
          </div>
          <div
            style={{
              fontSize: 11,
              color: 'rgba(255,255,255,0.4)',
              fontFamily: 'var(--font-body)',
            }}
          >
            📍 {profile.location}
          </div>
        </motion.div>

        {/* Bio card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          style={{
            borderRadius: 18,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '16px 16px',
            marginBottom: 16,
          }}
        >
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              margin: 0,
            }}
          >
            {profile.bio}
          </p>
        </motion.div>

        {/* Stack */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24 }}
          style={{ marginBottom: 16 }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-mono)',
              marginBottom: 10,
            }}
          >
            Tech Stack
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {Object.entries(profile.stack).map(([category, items], ci) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.28 + ci * 0.06 }}
                style={{
                  borderRadius: 14,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  padding: '10px 12px',
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: '#22d3ee',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: 8,
                  }}
                >
                  {category}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {items.map((item: string) => (
                    <span
                      key={item}
                      style={{
                        fontSize: 11,
                        fontFamily: 'var(--font-mono)',
                        color: 'rgba(255,255,255,0.65)',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 6,
                        padding: '3px 8px',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42 }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-mono)',
              marginBottom: 10,
            }}
          >
            Experience
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {profile.experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.46 + i * 0.08 }}
                style={{
                  display: 'flex',
                  gap: 12,
                  paddingBottom: i < profile.experience.length - 1 ? 16 : 0,
                  paddingLeft: 0,
                }}
              >
                {/* Timeline line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: i === 0 ? '#22d3ee' : 'rgba(255,255,255,0.25)',
                      flexShrink: 0,
                      marginTop: 4,
                      boxShadow: i === 0 ? '0 0 8px #22d3ee80' : 'none',
                    }}
                  />
                  {i < profile.experience.length - 1 && (
                    <div
                      style={{
                        flex: 1,
                        width: 1,
                        background: 'rgba(255,255,255,0.08)',
                        marginTop: 6,
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div style={{ flex: 1, paddingBottom: i < profile.experience.length - 1 ? 8 : 0 }}>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.9)',
                      fontFamily: 'var(--font-display)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {exp.role}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: 'rgba(255,255,255,0.4)',
                      fontFamily: 'var(--font-mono)',
                      marginTop: 2,
                      marginBottom: 4,
                    }}
                  >
                    {exp.company} · {exp.period}
                  </div>
                  <div
                    style={{
                      fontSize: 11.5,
                      color: 'rgba(255,255,255,0.5)',
                      fontFamily: 'var(--font-body)',
                      lineHeight: 1.5,
                      fontWeight: 300,
                    }}
                  >
                    {exp.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
