import { motion, easeOut } from 'framer-motion';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Andrea Larsen',
  url: 'https://www.andrealarsen.me/',
  jobTitle: 'UX Engineer',
  description: 'UX Engineer based in Toronto who builds clear, accessible, user-centred web applications with React, Next.js, TypeScript, and Node.js.',
  sameAs: [
    'https://github.com/AnBLarsen',
    'https://linkedin.com/in/andreablarsen/',
  ],
  knowsAbout: 
  [
    'Frontend Engineering',
    'Next.js',
    'React',
    'TypeScript',
    'UX/UI Design',
    'Accessibility',
    'Node.js',
    'PostgreSQL',
    'AWS',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toronto',
    addressCountry: 'CA',
  },
};

export default function Home() {
  usePageMeta({
    title: 'Andrea Larsen | UX Engineer',
    description: 'Portfolio of Andrea Larsen, a UX Engineer in Toronto building clear, accessible, user-centred web applications with React, Next.js, TypeScript, and Node.js.',
    canonical: 'https://www.andrealarsen.me/',
    jsonLd,
  });

  return (
    <section className="py-20 px-6 md:px-12 w-full max-w-6xl mx-auto text-left relative z-10 flex flex-col items-start justify-center">

      <motion.p
        className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-orchid"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        UX Engineer
      </motion.p>

      <motion.h1
        className="mt-4 text-6xl md:text-8xl leading-[0.95] font-semibold font-bodoni text-plum tracking-tight"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        Andrea <span className="italic font-normal text-violet">Larsen</span>
      </motion.h1>

      <motion.p
        className="mt-6 max-w-xl text-lg md:text-2xl text-ink font-medium leading-snug"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        I build clear, accessible web apps with the people using them in mind.
      </motion.p>

      <motion.p
        className="mt-4 max-w-md text-base md:text-lg text-muted"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        A former pastry chef who still believes the small details are what people remember.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-col md:flex-row gap-4"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <Link
          to={{ pathname: '/', hash: '#work' }}
          className="group px-6 py-2 rounded-md font-semibold text-cream bg-plum hover:bg-violet transition-all duration-300"
        >
          Explore My Work
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-md font-semibold border text-plum border-plum hover:bg-plum hover:text-cream transition"
        >
          View My Resume
        </a>
      </motion.div>
    </section>
  );
}
