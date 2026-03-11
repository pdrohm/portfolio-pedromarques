import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PhoneScreen } from './PhoneScreen';
import { usePhoneNavigation } from '../hooks/usePhoneNavigation';

const PHONE_W = 390;
const PHONE_H = 844;
const BEZEL = 14;
const CORNER = 52;
const SCREEN_CORNER = 42;
const DI_W = 126;
const DI_H = 37;

export function PhoneMockup() {
  const [scale, setScale] = useState(1);
  const { current, direction, navigate, goBack } = usePhoneNavigation();

  useEffect(() => {
    const update = () => {
      const scaleH = (window.innerHeight - 40) / PHONE_H;
      const scaleW = (window.innerWidth - 120) / PHONE_W;
      setScale(Math.min(1, Math.min(scaleH, scaleW)));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 24, delay: 0.3 }}
      style={{
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Ambient glow beneath phone */}
      <div
        style={{
          position: 'absolute',
          bottom: -60 * scale,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 300 * scale,
          height: 100 * scale,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.35) 0%, rgba(34,211,238,0.15) 50%, transparent 70%)',
          filter: 'blur(20px)',
          pointerEvents: 'none',
        }}
      />

      {/* Phone outer frame */}
      <div
        style={{
          width: PHONE_W * scale,
          height: PHONE_H * scale,
          borderRadius: CORNER * scale,
          background: 'linear-gradient(160deg, #2a2a2e 0%, #1a1a1e 35%, #141416 65%, #1e1e22 100%)',
          boxShadow: [
            `0 0 0 ${0.5 * scale}px rgba(255,255,255,0.12)`,
            `0 0 0 ${1.5 * scale}px rgba(255,255,255,0.04)`,
            `0 ${40 * scale}px ${100 * scale}px rgba(0,0,0,0.85)`,
            `0 ${20 * scale}px ${50 * scale}px rgba(0,0,0,0.6)`,
            `0 0 ${80 * scale}px rgba(124,58,237,0.12)`,
            `inset 0 ${1 * scale}px 0 rgba(255,255,255,0.14)`,
            `inset 0 ${-1 * scale}px 0 rgba(255,255,255,0.04)`,
            `inset ${1 * scale}px 0 0 rgba(255,255,255,0.06)`,
            `inset ${-1 * scale}px 0 0 rgba(0,0,0,0.3)`,
          ].join(', '),
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Side highlight */}
        <div
          style={{
            position: 'absolute',
            top: CORNER * scale,
            left: 0,
            bottom: CORNER * scale,
            width: 2 * scale,
            background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.08) 70%, transparent 100%)',
            borderRadius: 2,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: CORNER * scale,
            right: 0,
            bottom: CORNER * scale,
            width: 1.5 * scale,
            background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.04) 40%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 60%, transparent 100%)',
          }}
        />

        {/* Left side buttons */}
        {/* Volume up */}
        <div
          style={{
            position: 'absolute',
            left: -3 * scale,
            top: 130 * scale,
            width: 4 * scale,
            height: 34 * scale,
            borderRadius: `0 0 ${2 * scale}px ${2 * scale}px`,
            background: 'linear-gradient(90deg, #0f0f11, #1e1e22)',
            boxShadow: `inset ${1 * scale}px 0 0 rgba(255,255,255,0.06), 0 0 0 ${0.5 * scale}px rgba(0,0,0,0.5)`,
          }}
        />
        {/* Volume down */}
        <div
          style={{
            position: 'absolute',
            left: -3 * scale,
            top: 178 * scale,
            width: 4 * scale,
            height: 34 * scale,
            borderRadius: `0 0 ${2 * scale}px ${2 * scale}px`,
            background: 'linear-gradient(90deg, #0f0f11, #1e1e22)',
            boxShadow: `inset ${1 * scale}px 0 0 rgba(255,255,255,0.06), 0 0 0 ${0.5 * scale}px rgba(0,0,0,0.5)`,
          }}
        />
        {/* Silent toggle */}
        <div
          style={{
            position: 'absolute',
            left: -3 * scale,
            top: 96 * scale,
            width: 4 * scale,
            height: 24 * scale,
            borderRadius: `0 0 ${2 * scale}px ${2 * scale}px`,
            background: 'linear-gradient(90deg, #0f0f11, #1e1e22)',
            boxShadow: `inset ${1 * scale}px 0 0 rgba(255,255,255,0.06), 0 0 0 ${0.5 * scale}px rgba(0,0,0,0.5)`,
          }}
        />

        {/* Right side power button */}
        <div
          style={{
            position: 'absolute',
            right: -3 * scale,
            top: 168 * scale,
            width: 4 * scale,
            height: 56 * scale,
            borderRadius: `0 ${2 * scale}px ${2 * scale}px 0`,
            background: 'linear-gradient(270deg, #0f0f11, #1e1e22)',
            boxShadow: `inset ${-1 * scale}px 0 0 rgba(255,255,255,0.06), 0 0 0 ${0.5 * scale}px rgba(0,0,0,0.5)`,
          }}
        />

        {/* Bottom USB-C port area */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 60 * scale,
            height: BEZEL * scale,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2 * scale,
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 1.5 * scale,
                height: 4 * scale,
                borderRadius: 1,
                background: 'rgba(0,0,0,0.6)',
              }}
            />
          ))}
        </div>

        {/* Screen */}
        <div
          style={{
            position: 'absolute',
            top: BEZEL * scale,
            left: BEZEL * scale,
            right: BEZEL * scale,
            bottom: BEZEL * scale,
            borderRadius: SCREEN_CORNER * scale,
            overflow: 'hidden',
            background: '#0a0a10',
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: 'absolute',
              top: 12 * scale,
              left: '50%',
              transform: 'translateX(-50%)',
              width: DI_W * scale,
              height: DI_H * scale,
              borderRadius: (DI_H / 2) * scale,
              background: '#000',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingLeft: 18 * scale,
              paddingRight: 12 * scale,
              boxShadow: '0 0 0 1px rgba(255,255,255,0.04)',
            }}
          >
            {/* Camera dot */}
            <div
              style={{
                width: 10 * scale,
                height: 10 * scale,
                borderRadius: '50%',
                background: '#0a0a0a',
                boxShadow: `inset 0 0 0 ${1.5 * scale}px #111, 0 0 0 ${1 * scale}px rgba(34,211,238,0.15)`,
              }}
            />
            {/* Face ID sensors */}
            <div style={{ display: 'flex', gap: 3 * scale }}>
              {[5, 7, 5].map((h, i) => (
                <div
                  key={i}
                  style={{
                    width: 2.5 * scale,
                    height: h * scale,
                    borderRadius: 2,
                    background: 'rgba(255,255,255,0.06)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Home indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: 8 * scale,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 134 * scale,
              height: 5 * scale,
              borderRadius: 3 * scale,
              background: 'rgba(255,255,255,0.28)',
              zIndex: 100,
            }}
          />

          {/* Screen glass reflection */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '35%',
              background: 'linear-gradient(160deg, rgba(255,255,255,0.03) 0%, transparent 60%)',
              pointerEvents: 'none',
              zIndex: 99,
              borderTopLeftRadius: SCREEN_CORNER * scale,
              borderTopRightRadius: SCREEN_CORNER * scale,
            }}
          />

          {/* Phone Screen content */}
          <PhoneScreen
            current={current}
            direction={direction}
            navigate={navigate}
            goBack={goBack}
          />
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: -36 * scale,
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: 10,
          fontFamily: 'var(--font-mono)',
          color: 'rgba(255,255,255,0.2)',
          whiteSpace: 'nowrap',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}
      >
        tap app icons to explore ·  scroll inside the phone
      </motion.div>
    </motion.div>
  );
}
