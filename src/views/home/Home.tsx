import { useEffect, useState } from 'react';
import { AnimatePresence, motion, easeOut } from 'framer-motion';
import { Link } from 'react-router-dom';

const titles = ['Frontend', 'UX', 'Full Stack'];

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

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 text-center relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">

      <motion.h2
        className="text-5xl md:text-8xl leading-40 font-extrabold font-pacifico bg-gradient-to-r from-purple-light to-purple-dark text-transparent bg-clip-text"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        Andrea <span className="font-permanent-marker dark:text-neutral-300 text-neutral-700">Larsen</span>
      </motion.h2>

      <motion.p
        className="mt-4 text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-bold flex items-center justify-center gap-2"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <span className="block w-[8ch] text-right tabular-nums">
          <AnimatePresence mode="wait">
            <motion.span
              key={titles[index]}
              variants={titleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="inline-block w-full text-right"
            >
              {titles[index]}
            </motion.span>
          </AnimatePresence>
        </span>
        <span>Developer</span>
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
          Checkout My Work
        </Link>
        <a
          href="https://drive.google.com/file/d/1hCSFpM-NSdg_h4TXxV12mB7Eoht20Fw6/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-md font-semibold border text-purple-light border-purple-light hover:bg-purple-light hover:text-white transition"
        >
          Checkout My Resume
        </a>
      </motion.div>
    </section>
  );
}
