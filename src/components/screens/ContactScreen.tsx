import { motion } from 'framer-motion';
import { ChevronLeft, Mail, Github, Linkedin, Twitter, Globe, MapPin } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { profile } from '../../data/profile';

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  color: string;
  gradient: string;
}

interface ContactScreenProps {
  goBack: () => void;
}

export function ContactScreen({ goBack }: ContactScreenProps) {
  const contactItems: ContactItem[] = [
    {
      icon: <Mail size={18} />,
      label: 'Email',
      value: profile.contact.email,
      href: `mailto:${profile.contact.email}`,
      color: '#22d3ee',
      gradient: 'linear-gradient(135deg, #0e7490, #155e75)',
    },
    {
      icon: <Github size={18} />,
      label: 'GitHub',
      value: profile.contact.github,
      href: `https://${profile.contact.github}`,
      color: '#e2e8f0',
      gradient: 'linear-gradient(135deg, #374151, #1f2937)',
    },
    {
      icon: <Linkedin size={18} />,
      label: 'LinkedIn',
      value: profile.contact.linkedin,
      href: `https://${profile.contact.linkedin}`,
      color: '#60a5fa',
      gradient: 'linear-gradient(135deg, #1d4ed8, #1e3a8a)',
    },
    {
      icon: <Twitter size={18} />,
      label: 'Twitter / X',
      value: profile.contact.twitter,
      href: `https://twitter.com/${profile.contact.twitter.replace('@', '')}`,
      color: '#94a3b8',
      gradient: 'linear-gradient(135deg, #1e293b, #0f172a)',
    },
    {
      icon: <Globe size={18} />,
      label: 'Website',
      value: profile.contact.website,
      href: `https://${profile.contact.website}`,
      color: '#a78bfa',
      gradient: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
    },
  ];

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        background:
          'radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.12) 0%, transparent 55%), linear-gradient(180deg, #0d0d1a 0%, #07070f 100%)',
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
          Contact
        </span>
      </div>

      <div
        className="phone-scroll"
        style={{ flex: 1, paddingBottom: 40, paddingLeft: 18, paddingRight: 18 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, type: 'spring', stiffness: 300 }}
          style={{
            textAlign: 'center',
            paddingTop: 8,
            paddingBottom: 28,
          }}
        >
          {/* Glowing orb */}
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #22d3ee 0%, #a78bfa 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 30,
              margin: '0 auto 16px',
              boxShadow: '0 0 0 8px rgba(34,211,238,0.1), 0 0 40px rgba(34,211,238,0.2)',
            }}
          >
            👋
          </div>

          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              fontFamily: 'var(--font-display)',
              color: '#f1f5f9',
              letterSpacing: '-0.03em',
              marginBottom: 8,
            }}
          >
            Let's build something
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #22d3ee, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              remarkable
            </span>
          </div>

          <div
            style={{
              fontSize: 12,
              color: 'rgba(255,255,255,0.45)',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.5,
              maxWidth: 220,
              margin: '0 auto',
            }}
          >
            Open to senior mobile roles, consulting, and interesting problems.
          </div>

          {/* Location pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              marginTop: 12,
              padding: '5px 12px',
              borderRadius: 20,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <MapPin size={10} color="#22d3ee" />
            <span
              style={{
                fontSize: 11,
                fontFamily: 'var(--font-mono)',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              {profile.location}
            </span>
          </div>
        </motion.div>

        {/* Contact cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12, x: -8 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.16 + i * 0.07, type: 'spring', stiffness: 350, damping: 28 }}
              whileTap={{ scale: 0.97 }}
              whileHover={{ x: 4 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                padding: '14px 14px',
                borderRadius: 16,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  background: item.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: item.color,
                  flexShrink: 0,
                  boxShadow: `0 3px 12px rgba(0,0,0,0.4)`,
                }}
              >
                {item.icon}
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
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.38)',
                    fontFamily: 'var(--font-mono)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.value}
                </div>
              </div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0 }}
              >
                <path
                  d="M3 7h8M7 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            marginTop: 28,
            textAlign: 'center',
            padding: '16px',
            borderRadius: 14,
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <p
            style={{
              fontSize: 11,
              color: 'rgba(255,255,255,0.3)',
              fontFamily: 'var(--font-mono)',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Built with React, Framer Motion,
            <br />
            Tailwind CSS & love for mobile UX.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
