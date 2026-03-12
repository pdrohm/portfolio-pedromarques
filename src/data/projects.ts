import zumbaIcon from '../assets/icon/zumba-icon.webp';
import pelvtimeIcon from '../assets/icon/pelvtime-icon.webp';
import saudeAmDigitalIcon from '../assets/icon/saudeamdigital-icon.webp';
import zubaleIcon from '../assets/icon/zubale-icon.webp';
import estanteVirtualIcon from '../assets/icon/estante-virtual-icon.webp';

const zumbaPreview1 = new URL('../assets/preview/zumba-1.PNG', import.meta.url).href;
const zumbaPreview2 = new URL('../assets/preview/zumba-2.PNG', import.meta.url).href;
const pelvtimePreview1 = new URL('../assets/preview/pelvtime-1.PNG', import.meta.url).href;
const pelvtimePreview2 = new URL('../assets/preview/pelvtime-2.PNG', import.meta.url).href;
const saudeAmDigitalPreview1 = new URL('../assets/preview/saudeamdigital-1.PNG', import.meta.url).href;
const saudeAmDigitalPreview2 = new URL('../assets/preview/saudeamdigital-2.PNG', import.meta.url).href;

export interface ProjectMedia {
  label: string;
  description: string;
  gradient: string;
  accent: string;
  previewImage?: string;
  mockElements?: string[];
}

export interface Project {
  id: string;
  name: string;
  emoji: string;
  iconUrl?: string;
  tagline: string;
  description: string;
  stack: string[];
  features: string[];
  iconGradient: string;
  color: string;
  category: string;
  year: string;
  demoVideo?: string;
  links: {
    github?: string;
    demo?: string;
    appStore?: string;
    playStore?: string;
  };
  media: ProjectMedia[];
}

export const projects: Project[] = [
  {
    id: 'zumba',
    name: 'Zumba',
    emoji: '💃',
    iconUrl: zumbaIcon,
    tagline: 'Dance fitness workouts worldwide',
    description:
      'The official Zumba app bringing the global fitness party to mobile. I worked on the migration from native iOS/Android (Swift & Kotlin) to a unified React Native codebase. Built the streaming video player with AirPlay & Google Cast integration, enabling seamless workout sessions across devices.',
    stack: ['React Native', 'TypeScript', 'AirPlay SDK', 'Google Cast', 'Video Streaming', 'Swift', 'Kotlin'],
    features: [
      'Cross-platform video streaming with adaptive bitrate',
      'AirPlay & Google Cast for TV casting',
      'Native-to-React Native migration architecture',
      'Offline workout downloads with background sync',
      'Real-time activity tracking with HealthKit/Google Fit',
    ],
    iconGradient: 'linear-gradient(145deg, #87FE36 0%, #5cb824 100%)',
    color: '#87FE36',
    category: 'Fitness · Health',
    year: '2025',
    demoVideo: 'https://vimeo.com/1172916269?share=copy&fl=sv&fe=ci',
    links: {
      appStore: 'https://apps.apple.com/br/app/zumba-dance-exercicios-em-casa/id6447769025',
      playStore: 'https://play.google.com/store/apps/details?id=com.zumba.consumerapp.tv',
    },
    media: [
      {
        label: 'Class Workout',
        description: 'Full-screen video player with casting support',
        gradient: 'linear-gradient(145deg, #0a1a06 0%, #1a3d0f 50%, #2d5a1a 100%)',
        accent: '#87FE36',
        previewImage: zumbaPreview1,
      },
      {
        label: 'Class Player',
        description: 'Browse 100+ on-demand dance fitness classes',
        gradient: 'linear-gradient(145deg, #081408 0%, #163610 50%, #2a5220 100%)',
        accent: '#a8ff6b',
        previewImage: zumbaPreview2,
      },
    ],
  },
  {
    id: 'pelvtime',
    name: 'PelvTime',
    emoji: '🩺',
    iconUrl: pelvtimeIcon,
    tagline: 'Pelvic physiotherapy care platform',
    description:
      'PelvTime is the app I co-founded and built to help pelvic physiotherapists manage patients and guide treatment plans with better adherence. The product supports therapists and patients with structured exercise programs, progress tracking, and offline-first workflows, reaching 700+ users, 50K exercise logs, and a 4.9 rating.',
    stack: ['React Native', 'TypeScript', 'Firebase', 'Offline Sync', 'Health & Fitness UX', 'CI/CD'],
    features: [
      'Patient management and personalized training plans',
      'Exercise prescription with frequency and adherence tracking',
      'Progress history for therapist follow-up',
      'Offline mode for workouts and sync when back online',
      'Fast, simple interface designed for daily clinic usage',
    ],
    iconGradient: 'linear-gradient(145deg, #004A2E 0%, #0A6B43 100%)',
    color: '#004A2E',
    category: 'Health Tech · Physiotherapy',
    year: '2026',
    links: {
      appStore: 'https://apps.apple.com/br/app/pelvtime/id6742499632',
      playStore: 'https://play.google.com/store/apps/details?id=br.com.pelvtime',
    },
    demoVideo: 'https://vimeo.com/1172916166?share=copy',
    media: [
      {
        label: 'Physio Dashboard',
        description: 'Dashboard for physiotherapists to manage patients and treatments',
        gradient: 'linear-gradient(145deg, #04160F 0%, #0A3D29 50%, #0A6B43 100%)',
        accent: '#004A2E',
        previewImage: pelvtimePreview1,

      },
      {
        label: 'Exercise Progress Tracking',
        description: 'Animated exercises to keep the patient engaged and motivated',
        gradient: 'linear-gradient(145deg, #03140D 0%, #093321 50%, #0E7A4D 100%)',
        accent: '#23A36B',
        previewImage: pelvtimePreview2,
      },

    ],
  },
  {
    id: 'saude-am-digital',
    name: 'Saude AM Digital',
    emoji: '🏥',
    iconUrl: saudeAmDigitalIcon,
    tagline: 'SUS telemedicine for Amazonas',
    description:
      'Saude AM Digital is a teleconsultation app used by citizens in Amazonas through SUS, built in partnership with state government initiatives. I helped launch the product from scratch, rebuilt the home experience, and created specialist medical consultation flows. The same core architecture also supports white-label health apps with shared modules and custom branding per client.',
    stack: ['React Native', 'TypeScript', 'Telemedicine', 'White-Label Architecture', 'Secure Health Data', 'Crashlytics'],
    features: [
      'Launched core telemedicine product from scratch',
      'Rebuilt home screen experience for faster patient navigation',
      'Created specialist consultation flows and appointment journeys',
      'Digital prescription and medical document visualization',
      'White-label foundation reused across multiple health apps',
    ],
    iconGradient: 'linear-gradient(145deg, #2C9BE8 0%, #1464C9 100%)',
    color: '#2C9BE8',
    category: 'Healthcare · Public Sector',
    year: '2026',
    demoVideo: 'https://vimeo.com/1172916228?share=copy&fl=sv&fe=ci',
    links: {
      appStore: 'https://apps.apple.com/br/app/sa%C3%BAde-am-digital/id6742512883',
      playStore: 'https://play.google.com/store/apps/details?id=com.ptm.amazonas&hl=pt_BR',
    },
    media: [
      {
        label: 'Dashboard',
        description: 'Prescription and exam document access within the app',
        gradient: 'linear-gradient(145deg, #091A2F 0%, #0F315B 50%, #1B72DB 100%)',
        accent: '#7EC0FF',
        previewImage: saudeAmDigitalPreview2,
      },
      {
        label: 'Teleconsultation flow',
        description: 'Remote consultation flow for SUS citizens in Amazonas',
        gradient: 'linear-gradient(145deg, #07172A 0%, #103663 50%, #1464C9 100%)',
        accent: '#2C9BE8',
        previewImage: saudeAmDigitalPreview1,
      },
     
    ],
  },
  {
    id: 'zubale',
    name: 'Zubale',
    emoji: '🛒',
    iconUrl: zubaleIcon,
    tagline: 'Gig-economy retail operations platform',
    description:
      'Zubale is a large-scale app for autonomous workers handling in-store operations, picking, packing, and deliveries for major retailers. I contributed to mobile improvements that supported logistics workflows, reliability, and better operational visibility in day-to-day execution.',
    stack: ['React Native', 'TypeScript', 'Geolocation', 'Logistics Workflows', 'Performance', 'Crashlytics'],
    features: [
      'Store task and order fulfillment workflows',
      'Operational tools for picking, packing, and delivery routines',
      'Location-aware experiences for field operations',
      'Scheduling and shift flow improvements',
      'Stability and performance tuning for high daily usage',
    ],
    iconGradient: 'linear-gradient(145deg, #0043FB 0%, #1F63FF 100%)',
    color: '#0043FB',
    category: 'Logistics · Retail',
    year: '2025',
    links: {
      appStore: 'https://apps.apple.com/br/app/zubale/id1403846238',
      playStore: 'https://play.google.com/store/apps/details?id=mx.com.topup&hl=pt_BR',
    },
    media: [
      {
        label: 'Operations',
        description: 'Daily task execution for retail and fulfillment teams',
        gradient: 'linear-gradient(145deg, #050F2E 0%, #0B2F86 50%, #0043FB 100%)',
        accent: '#0043FB',
      },
      {
        label: 'Shift Flow',
        description: 'Scheduling and execution flow for workers in the field',
        gradient: 'linear-gradient(145deg, #040D29 0%, #103078 50%, #225CFF 100%)',
        accent: '#76A1FF',
      },
    ],
  },
  {
    id: 'estante-virtual-meu-senai',
    name: 'Estante de Livros SENAI',
    emoji: '📚',
    iconUrl: estanteVirtualIcon,
    tagline: 'Digital library for SENAI students',
    description:
      'Educational app from SENAI giving free access to a large digital book catalog with offline reading support. I contributed to mobile improvements focused on stability, UX refinements, and performance for a high-scale learning experience.',
    stack: ['React Native', 'TypeScript', 'Offline Content', 'Education UX', 'Performance', 'Crashlytics'],
    features: [
      'Access to 1000+ educational books in one app',
      'Offline reading support for low-connectivity scenarios',
      'Improved layout and reading flow experience',
      'Stability upgrades across core navigation paths',
      'Optimized performance for daily student usage',
    ],
    iconGradient: 'linear-gradient(145deg, #148080 0%, #1CA3A3 100%)',
    color: '#148080',
    category: 'Education · Digital Library',
    year: '2025',
    links: {
      appStore: 'https://apps.apple.com/us/app/estante-virtual-meu-senai/id1579556773',
      playStore: 'https://play.google.com/store/apps/details?id=com.estantevirtual&hl=pt_BR',
    },
    media: [
      {
        label: 'Book Catalog',
        description: 'Digital shelf and discovery of SENAI learning materials',
        gradient: 'linear-gradient(145deg, #062323 0%, #0B4F4F 50%, #148080 100%)',
        accent: '#148080',
      },
      {
        label: 'Offline Reading',
        description: 'Saved books available even without internet connection',
        gradient: 'linear-gradient(145deg, #072626 0%, #0D4545 50%, #1CA3A3 100%)',
        accent: '#7FD3D3',
      },
    ],
  },
  {
    id: 'brok-ai',
    name: 'Brok AI',
    emoji: '🥦',
    tagline: 'AI nutrition and training guide',
    description:
      'Brok AI is a health companion app focused on practical daily guidance for nutrition and workouts. The app helps users stay consistent by turning food photos into calorie insights, suggesting training paths, and acting as a go-to coach throughout the routine.',
    stack: ['React Native', 'Expo', 'TypeScript', 'AI Vision', 'Calorie Estimation', 'Fitness Guidance', 'Mobile UX'],
    features: [
      'Photo-based meal analysis with AI calorie estimation',
      'Daily workout and nutrition guidance in one flow',
      'Personalized recommendations to keep user consistency',
      'Progress-driven experience built as a go-to health coach',
      'End-to-end mobile product currently in pre-store phase',
    ],
    iconGradient: 'linear-gradient(145deg, #22c55e 0%, #166534 100%)',
    color: '#22c55e',
    category: 'AI · Health & Fitness',
    year: '2026',
    links: {},
    media: [
      {
        label: 'Meal Scan',
        description: 'Capture food photos and estimate calories with AI',
        gradient: 'linear-gradient(145deg, #06190D 0%, #124825 50%, #15803D 100%)',
        accent: '#22c55e',
      },
      {
        label: 'Coach Flow',
        description: 'Actionable guidance for workouts and daily habits',
        gradient: 'linear-gradient(145deg, #081A10 0%, #0F3D24 50%, #166534 100%)',
        accent: '#4ade80',
      },
    ],
  },
];
