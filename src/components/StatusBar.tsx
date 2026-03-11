import { useState, useEffect } from 'react';

function BatteryIcon() {
  return (
    <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
      <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="currentColor" strokeOpacity="0.8" />
      <rect x="2" y="2" width="17" height="8" rx="2" fill="currentColor" />
      <path d="M23 4v4a2 2 0 0 0 0-4z" fill="currentColor" fillOpacity="0.5" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
      <path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
      <path d="M8 6a5 5 0 0 1 3.54 1.46.75.75 0 0 1-1.06 1.06A3.5 3.5 0 0 0 8 7.5a3.5 3.5 0 0 0-2.48 1.02A.75.75 0 0 1 4.46 7.46 5 5 0 0 1 8 6z" opacity="0.7" />
      <path d="M8 2.5a8.5 8.5 0 0 1 6.01 2.49.75.75 0 1 1-1.06 1.06A7 7 0 0 0 8 4a7 7 0 0 0-4.95 2.05A.75.75 0 0 1 1.99 4.99 8.5 8.5 0 0 1 8 2.5z" opacity="0.4" />
    </svg>
  );
}

function SignalIcon() {
  return (
    <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
      <rect x="0" y="8" width="3" height="4" rx="1" />
      <rect x="4.5" y="5.5" width="3" height="6.5" rx="1" />
      <rect x="9" y="3" width="3" height="9" rx="1" />
      <rect x="13.5" y="0" width="3" height="12" rx="1" opacity="0.3" />
    </svg>
  );
}

interface StatusBarProps {
  compact?: boolean;
}

export function StatusBar({ compact = false }: StatusBarProps) {
  const [time, setTime] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        height: compact ? 44 : 54,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingBottom: 8,
        paddingLeft: 24,
        paddingRight: 18,
        flexShrink: 0,
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Time */}
      <span
        style={{
          fontSize: 15,
          fontWeight: 600,
          fontFamily: 'var(--font-body)',
          color: 'rgba(255,255,255,0.92)',
          letterSpacing: '-0.02em',
        }}
      >
        {time}
      </span>

      {/* Icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.85)' }}>
        <SignalIcon />
        <WifiIcon />
        <BatteryIcon />
      </div>
    </div>
  );
}
