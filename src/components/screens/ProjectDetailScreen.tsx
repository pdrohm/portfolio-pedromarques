import { motion } from 'framer-motion';
import { ChevronLeft, Github, ExternalLink, Check } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { ScreenMockup } from '../ScreenMockup';
import { projects } from '../../data/projects';

interface ProjectDetailScreenProps {
  projectId: string;
  goBack: () => void;
}

function hexToRgb(hex: string): [number, number, number] | null {
  const clean = hex.replace('#', '').trim();
  if (!/^[0-9a-fA-F]{6}$/.test(clean)) return null;
  return [
    Number.parseInt(clean.slice(0, 2), 16),
    Number.parseInt(clean.slice(2, 4), 16),
    Number.parseInt(clean.slice(4, 6), 16),
  ];
}

function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function getLuminance(r: number, g: number, b: number): number {
  const toLinear = (channel: number) => {
    const srgb = channel / 255;
    return srgb <= 0.04045 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

function getReadableAccent(hex: string): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return '#93c5fd';
  const [r, g, b] = rgb;
  const luminance = getLuminance(r, g, b);
  if (luminance >= 0.42) return hex;
  const lift = Math.min(0.58, Math.max(0.2, (0.42 - luminance) * 1.8));
  return rgbToHex(r + (255 - r) * lift, g + (255 - g) * lift, b + (255 - b) * lift);
}

export function ProjectDetailScreen({ projectId, goBack }: ProjectDetailScreenProps) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return null;
  const accentColor = getReadableAccent(project.color);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        background: `radial-gradient(ellipse at 70% -10%, ${project.color}18 0%, transparent 55%), linear-gradient(180deg, #0d0d1a 0%, #07070f 100%)`,
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
            color: accentColor,
          }}
        >
          <ChevronLeft size={16} strokeWidth={2.5} />
          <span style={{ fontSize: 13, fontWeight: 500, fontFamily: 'var(--font-body)', color: accentColor }}>
            Back
          </span>
        </motion.button>
      </div>

      {/* Scrollable content */}
      <div
        className="phone-scroll"
        style={{ flex: 1, paddingBottom: 40, paddingLeft: 18, paddingRight: 18 }}
      >
        {/* Project header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, type: 'spring', stiffness: 350 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: project.iconUrl ? 'transparent' : project.iconGradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 30,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: `0 6px 24px ${project.color}40, 0 2px 8px rgba(0,0,0,0.5)`,
              flexShrink: 0,
            }}
          >
            {!project.iconUrl && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 100%)',
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                }}
              />
            )}
            {project.iconUrl ? (
              <img
                src={project.iconUrl}
                alt={`${project.name} icon`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 16,
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            ) : (
              <span style={{ position: 'relative', zIndex: 1 }}>{project.emoji}</span>
            )}
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: 22,
                fontWeight: 800,
                fontFamily: 'var(--font-display)',
                color: '#f1f5f9',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: 4,
              }}
            >
              {project.name}
            </div>
            <div
              style={{
                fontSize: 11,
                color: accentColor,
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.02em',
                marginBottom: 4,
              }}
            >
              {project.category}
            </div>
            <div
              style={{
                fontSize: 12,
                color: 'rgba(255,255,255,0.45)',
                fontFamily: 'var(--font-body)',
              }}
            >
              {project.tagline}
            </div>
          </div>
        </motion.div>

        {/* Divider with year badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 16,
          }}
        >
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
          <span
            style={{
              fontSize: 10,
              fontFamily: 'var(--font-mono)',
              color: 'rgba(255,255,255,0.3)',
              padding: '3px 8px',
              borderRadius: 20,
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {project.year}
          </span>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            fontSize: 13,
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.65)',
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            marginBottom: 18,
          }}
        >
          {project.description}
        </motion.div>

        {/* Stack */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
          style={{ marginBottom: 18 }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-mono)',
              marginBottom: 8,
            }}
          >
            Tech Stack
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {project.stack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.16 + i * 0.04 }}
                style={{
                  fontSize: 11,
                  fontFamily: 'var(--font-mono)',
                  color: accentColor,
                  background: `${accentColor}18`,
                  border: `1px solid ${accentColor}40`,
                  borderRadius: 6,
                  padding: '4px 9px',
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ marginBottom: 20 }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-mono)',
              marginBottom: 8,
            }}
          >
            Features
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {project.features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.22 + i * 0.06 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                  padding: '10px 12px',
                  borderRadius: 12,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 6,
                    background: `${accentColor}24`,
                    border: `1px solid ${accentColor}4D`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: 0.5,
                  }}
                >
                  <Check size={10} color={accentColor} strokeWidth={3} />
                </div>
                <span
                  style={{
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.65)',
                    fontFamily: 'var(--font-body)',
                    lineHeight: 1.45,
                    fontWeight: 300,
                  }}
                >
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Media previews */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ marginBottom: 20 }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-mono)',
              marginBottom: 8,
            }}
          >
            Previews
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {project.media.map((media, i) => (
              <div key={media.label}>
                <ScreenMockup media={media} index={i} />
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 10,
                    color: 'rgba(255,255,255,0.4)',
                    fontFamily: 'var(--font-body)',
                    textAlign: 'center',
                  }}
                >
                  {media.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        {(project.links.github || project.links.demo || project.links.appStore || project.links.playStore) && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
          >
            {/* Store buttons row */}
            {(project.links.appStore || project.links.playStore) && (
              <div style={{ display: 'flex', gap: 8 }}>
                {project.links.appStore && (
                  <a
                    href={project.links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      height: 48,
                      borderRadius: 13,
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 9,
                      cursor: 'pointer',
                      textDecoration: 'none',
                    }}
                  >
                    {/* Apple logo SVG */}
                    <svg width="16" height="18" viewBox="0 0 814 1000" fill="rgba(255,255,255,0.85)">
                      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 696 0 583.4 0 474.9c0-176 114.5-269.3 227-269.3 59.9 0 109.8 39.4 147.2 39.4 35.7 0 91.7-41.9 159.2-41.9 28.6 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
                    </svg>
                    <div>
                      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-body)', lineHeight: 1 }}>Download on the</div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-body)', lineHeight: 1.3 }}>App Store</div>
                    </div>
                  </a>
                )}
                {project.links.playStore && (
                  <a
                    href={project.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      height: 48,
                      borderRadius: 13,
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 9,
                      cursor: 'pointer',
                      textDecoration: 'none',
                    }}
                  >
                    {/* Google Play triangle SVG */}
                    <svg width="16" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M3.18 23.5c.37.2.8.2 1.18 0L15.5 12 4.36.5C3.98.3 3.55.3 3.18.5A1.5 1.5 0 0 0 2.5 1.8v20.4c0 .55.28 1.04.68 1.3z" fill="#4CAF50"/>
                      <path d="M20.5 10.27L17.5 8.6l-3.17 3.4 3.17 3.4 3.03-1.68A1.7 1.7 0 0 0 21.5 12c0-.7-.38-1.33-1-1.73z" fill="#FFD600"/>
                      <path d="M4.36.5L15.5 12 17.5 8.6 5.36-.17A1.7 1.7 0 0 0 4.36.5z" fill="#F44336"/>
                      <path d="M4.36 23.5a1.7 1.7 0 0 0 1-.67L17.5 15.4 15.5 12 4.36 23.5z" fill="#2196F3"/>
                    </svg>
                    <div>
                      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-body)', lineHeight: 1 }}>Get it on</div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-body)', lineHeight: 1.3 }}>Google Play</div>
                    </div>
                  </a>
                )}
              </div>
            )}

            {/* GitHub / Demo row */}
            {(project.links.github || project.links.demo) && (
              <div style={{ display: 'flex', gap: 8 }}>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      height: 42,
                      borderRadius: 12,
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.09)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      cursor: 'pointer',
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                    }}
                  >
                    <Github size={14} />
                    <span style={{ fontSize: 12, fontFamily: 'var(--font-body)', fontWeight: 500 }}>GitHub</span>
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      height: 42,
                      borderRadius: 12,
                      background: `${accentColor}1A`,
                      border: `1px solid ${accentColor}4A`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      cursor: 'pointer',
                      color: accentColor,
                      textDecoration: 'none',
                    }}
                  >
                    <ExternalLink size={14} />
                    <span style={{ fontSize: 12, fontFamily: 'var(--font-body)', fontWeight: 500 }}>Live Demo</span>
                  </a>
                )}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
