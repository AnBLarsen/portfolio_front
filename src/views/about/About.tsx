import { useMemo, useState } from 'react';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import Aurora from '../../components/Aurora';
import { MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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

const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML',
      'CSS',
      'Framer Motion',
      'Responsive Design',
    ],
  },
  {
    label: 'UX/UI',
    skills: [
      'Figma',
      'FigJam',
      'User Flows',
      'Wireframing',
      'Prototyping',
      'Accessibility',
      'WCAG',
    ],
  },
  {
    label: 'Backend & Data',
    skills: [
      'Node.js',
      'Express',
      'Next.js API Routes',
      'REST APIs',
      'PostgreSQL',
      'MongoDB',
    ],
  },
  {
    label: 'Authentication & Integrations',
    skills: [
      'AWS Cognito',
      'Auth0',
      'Moneris',
      'TSYS',
      'Salesforce',
      'Role-Based Access',
    ],
  },
  {
    label: 'Testing & Production',
    skills: [
      'Vitest',
      'Playwright',
      'New Relic',
      'Pino Logger',
      'AWS CloudWatch',
      'Unleash',
      'Google Tag Manager',
    ],
  },
  {
    label: 'Cloud & Tooling',
    skills: [
      'Docker',
      'GitHub Actions',
      'Vercel',
      'Git',
      'GitHub',
      'Jira',
      'Claude',
      'Cursor',
    ],
  }
];

export default function About() {

  usePageMeta({
    title: 'About Andrea Larsen | Frontend-Focused Software Engineer',
    description: 'Learn about Andrea Larsen, a frontend-focused Software Engineer in Toronto with production experience in Next.js, React, TypeScript, Node.js, PostgreSQL, AWS, and UX/UI.',
    canonical: 'https://www.andrealarsen.me/about',
  });

  const [showAllSkills, setShowAllSkills] = useState(false);

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
    <div className="relative flex flex-col items-center justify-center px-4 py-20 transition-all duration-500">
      <Aurora {...auroraProps} isDark={isDark} />

      <motion.section
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
            src="https://res.cloudinary.com/dirwvgura/image/upload/profile_gkbmyv.png"
            alt="Andrea Larsen, Frontend-Focused Software Engineer"
            className="w-full h-full object-cover dark:hidden"
          />
          <img
            src="https://res.cloudinary.com/dirwvgura/image/upload/profile_gkbmyv.png"
            alt="Andrea Larsen, Frontend-Focused Software Engineer"
            className="w-full h-full object-cover hidden dark:block"
          />
        </motion.div>
        {/* About section ------------------------------------------------------*/}

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
            <p>
              I’m a frontend-focused Software Engineer with a UX/UI background and
              full-stack experience. I build customer-facing web applications using{' '}
              <span className="font-semibold text-purple-light">
                Next.js, React, TypeScript, Node.js, and Tailwind CSS
              </span>
              , bringing a user-centered mindset to the way I design and implement product experiences.
            </p>

            <p>
              At Shack Shine, I worked across online booking, payments,
              authentication, customer portals, operational reporting, testing, and
              production monitoring. My experience includes modernizing a legacy
              booking engine, integrating Moneris and TSYS payments, developing AWS
              Cognito authentication flows, and connecting frontend reporting
              interfaces to PostgreSQL-backed workflows.
            </p>

            <p>
              My background in UX/UI and multimedia design shapes how I approach
              engineering. I care about building software that is intuitive,
              accessible, maintainable, and ready for real users.
            </p>

            <p>
              I also enjoy exploring AI-assisted development and AI-powered product
              experiences. Most recently, I built Fulbeeto, a bilingual World Cup
              companion featuring live match data and an Anthropic-powered assistant
              using tool calling and streaming responses.
            </p>

            <p>
              My strongest area is frontend engineering, but I’m comfortable contributing
              across APIs, authentication, integrations, data workflows, testing, and
              production support. I’m especially interested in roles where I can build
              thoughtful frontend experiences and collaborate closely with design and product.
            </p>
          </div>
        </motion.div>

      </motion.section>

      <AnimatePresence>
        
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="mt-16 w-full max-w-5xl bg-white/40 dark:bg-black/40 text-white dark:text-white backdrop-blur-md rounded-xl mx-auto px-8 py-8 space-y-8"
          >
            <h3 className="text-2xl font-bold text-purple-light">My Skills</h3>

            <div className="flex flex-wrap gap-2">
              {['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'UX/UI', 'Accessibility', 'Node.js', 'PostgreSQL', 'REST APIs', 'Figma', 'AWS Cognito', 'Vitest', 'Playwright', 'GitHub Actions', 'Docker'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-purple-dark text-white rounded-md text-sm">
                  {skill}
                </span>
              ))}
              {!showAllSkills && (
                <button
                  onClick={() => setShowAllSkills(true)}
                  className="px-3 py-1 border border-purple-light text-purple-light rounded-md text-sm hover:bg-purple-light hover:text-white transition-colors"
                >
                  + Show all
                </button>
              )}
            </div>

            {/* Skills section ------------------------------------------------------*/}

            <AnimatePresence>
              {showAllSkills && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: easeOut }}
                  className="overflow-hidden space-y-6"
                >
                {skillGroups.map(({ label, skills }, i, arr) => (
                  <div key={label}>
                    <h4 className="text-sm font-semibold text-purple-light uppercase tracking-wide mb-2">
                      {label}
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-purple-dark text-white rounded-md text-sm"
                        >
                          {skill}
                        </span>
                      ))}

                      {i === arr.length - 1 && (
                        <button
                          onClick={() => setShowAllSkills(false)}
                          className="px-3 py-1 border border-purple-light text-purple-light rounded-md text-sm hover:bg-purple-light hover:text-white transition-colors"
                        >
                          − Show less
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                </motion.div>
              )}
            </AnimatePresence>
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

            {/* Languages section ------------------------------------------------------*/}

            <div>
              <h3 className="text-2xl font-bold text-purple-light mb-4">
                Languages
              </h3>

              <div className="space-y-1 text-neutral-800 dark:text-neutral-200">
                <p>
                  <strong>Spanish:</strong> Native
                </p>
                <p>
                  <strong>English:</strong> Fluent, EF SET C2 Proficient
                </p>
              </div>
            </div>
          </motion.div>
        
      </AnimatePresence>
    </div>
  );
}
