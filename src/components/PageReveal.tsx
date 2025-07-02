import { motion, circOut } from 'framer-motion';

const panelVariants = (direction: 'left' | 'right') => {
  const from = {
    left: { x: '0%' },
    right: { x: '0%' },
  };
  const to = {
    left: { x: '-100%' },
    right: { x: '100%' },
  };

  return {
    initial: from[direction],
    animate: to[direction],
  };
};

const transition = (delay: number) => ({
  duration: 1,
  ease: circOut,
  delay,
});

export default function PageReveal() {
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex">
     
      <motion.div
        variants={panelVariants('left')}
        initial="initial"
        animate="animate"
        transition={transition(0)}
        className="w-1/2 h-full bg-purple-dark/30"
      />
      <motion.div
        variants={panelVariants('right')}
        initial="initial"
        animate="animate"
        transition={transition(0)}
        className="w-1/2 h-full bg-purple-light/60"
      />
    </div>
  );
}
