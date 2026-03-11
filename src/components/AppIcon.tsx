import { motion } from 'framer-motion';

interface AppIconProps {
  name: string;
  emoji: string;
  iconUrl?: string;
  gradient: string;
  color: string;
  size?: number;
  onClick?: () => void;
  showLabel?: boolean;
  disabled?: boolean;
  delay?: number;
}

export function AppIcon({
  name,
  emoji,
  iconUrl,
  gradient,
  color,
  size = 62,
  onClick,
  showLabel = true,
  disabled = false,
  delay = 0,
}: AppIconProps) {
  const radius = Math.round(size * 0.225);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28, delay }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        cursor: disabled ? 'default' : 'pointer',
      }}
      onClick={disabled ? undefined : onClick}
      whileTap={disabled ? {} : { scale: 0.82 }}
      whileHover={disabled ? {} : { scale: 1.1 }}
    >
      {/* Icon square */}
      <motion.div
        style={{
          width: size,
          height: size,
          borderRadius: radius,
          background: iconUrl ? 'transparent' : gradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: Math.round(size * 0.44),
          position: 'relative',
          overflow: 'hidden',
          boxShadow: `0 4px 16px ${color}35, 0 2px 6px rgba(0,0,0,0.5)`,
        }}
        whileHover={disabled ? {} : { boxShadow: `0 6px 24px ${color}55, 0 3px 10px rgba(0,0,0,0.6)` }}
        transition={{ duration: 0.2 }}
      >
        {!iconUrl && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '52%',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 100%)',
              borderTopLeftRadius: radius,
              borderTopRightRadius: radius,
            }}
          />
        )}
        {iconUrl ? (
          <img
            src={iconUrl}
            alt={`${name} icon`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: radius,
              position: 'relative',
              zIndex: 1,
            }}
          />
        ) : (
          <span style={{ position: 'relative', zIndex: 1, lineHeight: 1 }}>{emoji}</span>
        )}
      </motion.div>

      {/* Label */}
      {showLabel && (
        <span
          style={{
            fontSize: 10,
            fontWeight: 500,
            fontFamily: 'var(--font-body)',
            color: 'rgba(255,255,255,0.88)',
            textAlign: 'center',
            maxWidth: size + 10,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            textShadow: '0 1px 4px rgba(0,0,0,0.9)',
            lineHeight: 1,
          }}
        >
          {name}
        </span>
      )}
    </motion.div>
  );
}
