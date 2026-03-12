import { motion } from 'framer-motion';
import { AppIcon } from '../AppIcon';
import { Dock } from '../Dock';
import { StatusBar } from '../StatusBar';
import type { ScreenName } from '../../hooks/usePhoneNavigation';
import { projects } from '../../data/projects';
import { profile } from '../../data/profile';

interface HomeScreenProps {
  navigate: (screen: ScreenName) => void;
}

export function HomeScreen({ navigate }: HomeScreenProps) {
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        background:
          'radial-gradient(ellipse at 60% 0%, rgba(124,58,237,0.22) 0%, transparent 55%), radial-gradient(ellipse at 20% 90%, rgba(14,165,233,0.18) 0%, transparent 50%), linear-gradient(180deg, #0d0d1a 0%, #060610 100%)',
      }}
    >
      <StatusBar />

      {/* Date/Time widget */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        style={{
          textAlign: 'center',
          paddingTop: 12,
          paddingBottom: 20,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 200,
            fontFamily: 'var(--font-body)',
            color: 'rgba(255,255,255,0.95)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
          }}
        >
          {now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
        </div>
        <div
          style={{
            fontSize: 13,
            color: 'rgba(255,255,255,0.55)',
            marginTop: 6,
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
          }}
        >
          {dateStr}
        </div>
      </motion.div>

      {/* Scrollable content */}
      <div
        className="phone-scroll"
        style={{
          flex: 1,
          paddingBottom: 130,
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-mono)',
            marginBottom: 14,
            paddingLeft: 4,
          }}
        >
          Some of My Work
        </motion.div>

        {/* Projects only — 4 columns, clean grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px 8px',
            marginBottom: 28,
            justifyItems: 'center',
          }}
        >
          {projects.map((project, i) => (
            <AppIcon
              key={project.id}
              name={project.name}
              emoji={project.emoji}
              iconUrl={project.iconUrl}
              gradient={project.iconGradient}
              color={project.color}
              size={62}
              delay={0.1 + i * 0.06}
              onClick={() => navigate({ type: 'project', id: project.id })}
            />
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: 'rgba(255,255,255,0.06)',
            marginBottom: 18,
            marginLeft: 4,
            marginRight: 4,
          }}
        />

        {/* Quick profile card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileTap={{ scale: 0.985 }}
          onClick={() => navigate('about')}
          style={{
            borderRadius: 18,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #22d3ee, #7c3aed)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 15,
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              color: '#fff',
              flexShrink: 0,
              letterSpacing: '-0.02em',
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
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: 'rgba(255,255,255,0.85)',
                fontFamily: 'var(--font-body)',
                marginBottom: 2,
              }}
            >
              {profile.name}
            </div>
            <div
              style={{
                fontSize: 11,
                color: 'rgba(255,255,255,0.4)',
                fontFamily: 'var(--font-mono)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {profile.title} · {profile.location}
            </div>
          </div>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#22c55e',
              boxShadow: '0 0 8px #22c55e80',
              flexShrink: 0,
            }}
          />
        </motion.div>
      </div>

      {/* Dock — About, Contact, Projects nav */}
      <Dock navigate={navigate} currentScreen="home" />
    </div>
  );
}
