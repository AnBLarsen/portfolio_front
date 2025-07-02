import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, easeOut } from 'framer-motion';

import Aurora from '../../components/Aurora';

function useIsDark() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    setIsDark(document.documentElement.classList.contains('dark'));

    return () => observer.disconnect();
  }, []);

  return isDark;
}

const titles = ['Web', 'Frontend', 'UX/UI'];

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
  const isDark = useIsDark();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const auroraProps = useMemo(
    () => ({
      colorStops: isDark
        ? ['#3A29FF', '#FF94B4', '#FF3232']
        : ['#FFC4EC', '#b64dff', '#8c4dff'],
      amplitude: 1.0,
      blend: 0.5,
      speed: 0.5,
    }),
    [isDark]
  );

  return (
    <>
      <div
        className="relative w-full h-full min-h-screen bg-cover bg-center dark:bg-[url('https://res.cloudinary.com/dirwvgura/image/upload/dark_aspcze.jpg')] bg-[url('https://cdn.pixabay.com/photo/2017/02/18/01/27/background-2076337_960_720.jpg')]"
      >
        <Aurora {...auroraProps} isDark={isDark} />
        <section className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center px-4">
          
          <motion.h2
            className="text-5xl md:text-8xl font-extrabold font-pacifico bg-gradient-to-r from-purple-light to-purple-dark text-transparent bg-clip-text"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Andrea <span className="font-permanent-marker dark:text-neutral-300 text-neutral-700">Larsen</span>
          </motion.h2>

          <motion.p
            className="mt-4 text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-bold flex items-center gap-2"
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
            <a
              href="#portfolio"
              className="group px-6 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-purple-light to-purple-dark hover:from-purple-dark hover:to-purple-light transition-all duration-300"
            >
              Checkout My Work
            </a>
            <a
              href="https://drive.google.com/file/d/1Y6jUIt5_3GX12gInQSFibEZjN8ls4xsr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 rounded-md font-semibold border transition
                ${isDark
                  ? 'text-purple-light border-purple-light hover:bg-purple-light hover:text-white'
                  : 'text-purple-dark border-purple-dark hover:bg-purple-light hover:text-white hover:border-purple-light'}`}
            >
              Checkout My Resume
            </a>
          </motion.div>
        </section>
      </div>  
    </>
  );
}
