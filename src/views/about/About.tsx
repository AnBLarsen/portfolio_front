import { useMemo, useRef } from 'react';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import Aurora from '../../components/Aurora';
import { MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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

export default function About() {
  
  const sectionRef = useRef<HTMLDivElement>(null);

  const isDark = document.documentElement.classList.contains('dark');

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
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 transition-all duration-500">
      <Aurora {...auroraProps} isDark={isDark} />

      <motion.section
        ref={sectionRef}
        transition={{ duration: 0.6, ease: easeOut }}
        className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full z-10"
      >
      
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="w-64 h-64 rounded-xl overflow-hidden shadow-lg  dark:border-purple-light"
        >
          <img
            src="https://res.cloudinary.com/dirwvgura/image/upload/piclight_haymgb.png"
            alt="Profile"
            className="w-full h-full object-cover dark:hidden"
          />
          <img
            src="https://res.cloudinary.com/dirwvgura/image/upload/picdark_b9zh36.png"
            alt="Profile dark"
            className="w-full h-full object-cover hidden dark:block"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-xl text-center md:text-left space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white">
            About <span className="text-purple-light">Me</span>
          </h2>

          <div className="space-y-6 text-neutral-800 dark:text-neutral-300 leading-relaxed">
            <p >
              <span className='text-xl font-bold '> 👋 Hi there,</span> I’m a Full Stack Developer with a strong focus on <span className='font-semibold text-purple-light'>Frontend Development</span> and a background in design.
            </p>

            <p>
              My journey into tech started in an unexpected place, the kitchen 🍰. After several years working as a pastry cook, I discovered a passion for thoughtful design and building user-friendly digital experiences.
              That led me to earn a <strong className="text-purple-dark dark:text-purple-light">Diploma in Multimedia Design & Development</strong> from Humber College, graduating with honours, where I gained a deep understanding of UX/UI principles, visual design, and responsive workflows.
            </p>

            <p>
              To expand my technical skills, I completed an intensive Full Stack Web Development Bootcamp, where I built real-world projects that combine design thinking with scalable code.
              I’m especially drawn to creating interfaces that are clean, accessible, and genuinely useful.
            </p>

            <p>
              Right now, I’m focused on growing as a frontend developer and working on projects that blend <em>creativity</em>, <em>empathy</em>, and <em>performance</em> into thoughtful user experiences.
            </p>
          </div>
        </motion.div>

      </motion.section>

      <AnimatePresence>
        
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="mt-16 w-full max-w-5xl bg-white/40 dark:bg-black/40 text-white dark:text-white backdrop-blur-md rounded-xl mx-auto px-8 py-8 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-purple-light mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'HTML', 'CSS', 'JavaScript', 'React', 'TypeScript',
                  'Next.js', 'Tailwind', 'Node.js', 'Express.js',
                  'TypeORM', 'PostgreSQL', 'Figma', 'Git', 'GitHub',
                  'Framer Motion', 'Vite', 'Axios',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-dark text-white rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-purple-light mb-4">Contact Info</h3>
              <div className="flex items-center gap-2 mb-2 text-neutral-800 dark:text-neutral-200">
                <MapPin size={18} className="text-purple-light" />
                <span>Toronto, Canada</span>
              </div>

              <a
                href="https://github.com/AnBLarsen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mb-2 text-neutral-800 dark:text-neutral-200 hover:underline "
              >
                <FaGithub className="text-purple-light" size={18} />
                github.com/AnBLarsen
              </a>


              <a
                href="https://linkedin.com/in/andreablarsen/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-800 dark:text-neutral-200 hover:underline"
              >
                <FaLinkedin className="text-purple-light" size={18} />
                linkedin.com/in/andreablarsen
              </a>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-light mb-4">Languages</h3>
              <p className='text-neutral-800 dark:text-neutral-200'>English, Spanish</p>
            </div>
          </motion.div>
        
      </AnimatePresence>
    </div>
  );
}
