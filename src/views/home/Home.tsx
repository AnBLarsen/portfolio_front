import { useEffect, useState } from 'react';
import { AnimatePresence, motion, easeOut } from 'framer-motion';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';

const specialties = [
  'UX-Minded',
  'Product-Driven',
];

const titleVariants = {
  initial: { rotateX: 90, opacity: 0, y: -10 },
  animate: { rotateX: 0, opacity: 1, y: 0 },
  exit: { rotateX: -90, opacity: 0, y: 10 },
};

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
  jobTitle: 'Frontend-Focused Software Engineer',
  description: 'Frontend-focused Software Engineer based in Toronto with UX/UI background and full-stack experience building user-centered web applications with Next.js, React, TypeScript, Node.js, PostgreSQL, and AWS.',
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
  const [index, setIndex] = useState(0);

  usePageMeta({
    title: 'Andrea Larsen | Frontend-Focused Software Engineer',
    description: 'Portfolio of Andrea Larsen, a frontend-focused Software Engineer in Toronto with UX/UI background and full-stack experience building user-centered web applications with Next.js, React, TypeScript, Node.js, PostgreSQL, and AWS.',
    canonical: 'https://www.andrealarsen.me/',
    jsonLd,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % specialties.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 text-center relative z-10 flex flex-col items-center justify-center">

      <motion.h1
        className="text-5xl md:text-8xl leading-tight font-extrabold font-pacifico bg-gradient-to-r from-purple-light to-purple-dark text-transparent bg-clip-text"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        Andrea <span className="font-pacifico dark:text-neutral-300 text-neutral-700">Larsen</span>
      </motion.h1>

      <motion.p
        className="mt-4 text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-bold"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        Frontend-Focused Software Engineer
      </motion.p>

      <motion.div
        className="mt-3 min-h-7 w-44 text-base md:text-lg text-gray-600 dark:text-gray-400 flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={specialties[index]}
            variants={titleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="inline-block"
          >
            {specialties[index]}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      <motion.p
        className="mt-5 max-w-2xl text-base md:text-lg text-gray-600 dark:text-gray-400"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        I build intuitive, accessible web applications across frontend interfaces,
        user flows, APIs, authentication, payments, data workflows, and production tooling.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-col md:flex-row gap-4"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <Link
          to="/projects"
          className="group px-6 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-purple-light to-purple-dark hover:from-purple-dark hover:to-purple-light transition-all duration-300"
        >
          Explore My Projects
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-md font-semibold border text-purple-light border-purple-light hover:bg-purple-light hover:text-white transition"
        >
          View My Resume
        </a>
      </motion.div>
    </section>
  );
}
