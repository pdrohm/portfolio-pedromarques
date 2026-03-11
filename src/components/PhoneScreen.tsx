import { AnimatePresence, motion } from 'framer-motion';
import type { ScreenName } from '../hooks/usePhoneNavigation';
import { screenKey } from '../hooks/usePhoneNavigation';
import { HomeScreen } from './screens/HomeScreen';
import { AboutScreen } from './screens/AboutScreen';
import { ProjectDetailScreen } from './screens/ProjectDetailScreen';
import { ContactScreen } from './screens/ContactScreen';

const variants = {
  enter: (dir: 'forward' | 'back') => ({
    x: dir === 'forward' ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: 'forward' | 'back') => ({
    x: dir === 'forward' ? '-18%' : '100%',
    opacity: dir === 'forward' ? 0.4 : 1,
    scale: dir === 'forward' ? 0.94 : 1,
  }),
};

const transition = {
  type: 'spring' as const,
  stiffness: 380,
  damping: 38,
  mass: 0.85,
};

interface PhoneScreenProps {
  current: ScreenName;
  direction: 'forward' | 'back';
  navigate: (screen: ScreenName) => void;
  goBack: () => void;
}

function renderScreen(
  current: ScreenName,
  navigate: (screen: ScreenName) => void,
  goBack: () => void
) {
  if (current === 'home') {
    return <HomeScreen navigate={navigate} />;
  }
  if (current === 'about') {
    return <AboutScreen goBack={goBack} />;
  }
  if (current === 'contact') {
    return <ContactScreen goBack={goBack} />;
  }
  if (typeof current === 'object' && current.type === 'project') {
    return <ProjectDetailScreen projectId={current.id} goBack={goBack} />;
  }
  return <HomeScreen navigate={navigate} />;
}

export function PhoneScreen({ current, direction, navigate, goBack }: PhoneScreenProps) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={screenKey(current)}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
          style={{
            position: 'absolute',
            inset: 0,
          }}
        >
          {renderScreen(current, navigate, goBack)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
