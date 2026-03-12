import { motion } from 'framer-motion';
import { House, UserRound, Mail, type LucideIcon } from 'lucide-react';
import type { ScreenName } from '../hooks/usePhoneNavigation';

interface DockItem {
  name: string;
  icon: LucideIcon;
  gradient: string;
  color: string;
  screen: ScreenName;
}

const dockItems: DockItem[] = [
  {
    name: 'Home',
    icon: House,
    gradient: 'linear-gradient(145deg, #1e293b, #0f172a)',
    color: '#64748b',
    screen: 'home',
  },
  {
    name: 'About',
    icon: UserRound,
    gradient: 'linear-gradient(145deg, #1d4ed8, #1e40af)',
    color: '#3b82f6',
    screen: 'about',
  },
  {
    name: 'Contact',
    icon: Mail,
    gradient: 'linear-gradient(145deg, #0e7490, #155e75)',
    color: '#22d3ee',
    screen: 'contact',
  },
];

interface DockProps {
  navigate: (screen: ScreenName) => void;
  currentScreen: ScreenName;
}

export function Dock({ navigate, currentScreen }: DockProps) {
  const currentKey = typeof currentScreen === 'string' ? currentScreen : 'project';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5, type: 'spring', stiffness: 300 }}
      style={{
        position: 'absolute',
        bottom: 28,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 20,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: 14,
          padding: '12px 18px',
          borderRadius: 32,
          background: 'rgba(30, 30, 40, 0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          pointerEvents: 'all',
        }}
      >
      {dockItems.map((item) => {
        const isActive = item.screen === currentKey;
        const Icon = item.icon;
        return (
          <motion.div
            key={item.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 52,
              cursor: 'pointer',
              position: 'relative',
            }}
            onClick={() => navigate(item.screen)}
            whileTap={{ scale: 0.82 }}
            whileHover={{ scale: 1.12 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: item.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                lineHeight: 1,
                position: 'relative',
                overflow: 'hidden',
                flexShrink: 0,
                boxShadow: isActive
                  ? `0 0 0 2px ${item.color}, 0 4px 16px ${item.color}40`
                  : `0 3px 12px rgba(0,0,0,0.5)`,
                transition: 'box-shadow 0.2s',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 100%)',
                  borderTopLeftRadius: 14,
                  borderTopRightRadius: 14,
                }}
              />
              <Icon
                size={22}
                strokeWidth={2.4}
                color={isActive ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0.8)'}
                style={{ position: 'relative', zIndex: 1, display: 'block' }}
              />
            </div>

            {/* Active dot — absolutely positioned so it never affects icon alignment */}
            <motion.div
              animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              style={{
                width: 4,
                height: 4,
                borderRadius: '50%',
                background: item.color,
                boxShadow: `0 0 6px ${item.color}`,
                marginTop: 5,
                flexShrink: 0,
              }}
            />
          </motion.div>
        );
      })}
      </div>
    </motion.div>
  );
}
