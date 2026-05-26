import { useMemo, useRef, useState } from 'react';
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
            src="https://res.cloudinary.com/dirwvgura/image/upload/profile_gkbmyv.png"
            alt="Profile"
            className="w-full h-full object-cover dark:hidden"
          />
          <img
            src="https://res.cloudinary.com/dirwvgura/image/upload/profile_gkbmyv.png"
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
            <p>
              <span className="text-xl font-bold">👋 Hi there,</span> I’m a Software Developer with hands-on experience building user-centered web applications using{" "}
              <span className="font-semibold text-purple-light">
                React, Next.js, TypeScript, Tailwind CSS, and Figma
              </span>.
            </p>

            <p>
              In my first tech role as a Software Engineer, I contributed to customer-facing web applications, user portal functionality, authentication flows, service recommendation experiences, frontend testing, analytics, monitoring, and cloud-based workflows.
            </p>

            <p>
              I’ve worked with tools and technologies including{" "}
              <strong className="text-purple-dark dark:text-purple-light">
                AWS Cognito, Playwright, Vitest, New Relic, CloudWatch, GitHub Actions, Docker, PostgreSQL, Salesforce, Jira, Notion, Cursor, and Claude
              </strong>.
            </p>

            <p>
              My background combines UX/UI design, frontend development, accessibility, and customer experience. Before transitioning into tech, I spent several years as a pastry cook, where I developed precision, creativity, time management, and strong attention to detail.
            </p>

            <p>
              That experience still shapes how I build software: with care for the user, the process, and the final experience. Right now, I’m focused on expanding into full-stack development and creating thoughtful digital experiences that are clean, accessible, and genuinely useful.
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
            <h3 className="text-2xl font-bold text-purple-light">My Skills</h3>

            <div className="flex flex-wrap gap-2">
              {['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'REST APIs', 'Figma', 'AWS Cognito', 'Vitest', 'Playwright', 'GitHub Actions', 'Docker', 'CI/CD', 'Agile/Scrum'].map((skill) => (
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

            <AnimatePresence>
              {showAllSkills && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: easeOut }}
                  className="overflow-hidden space-y-6"
                >
                  {[
                    { label: 'Frontend', skills: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Framer Motion', 'Responsive Design'] },
                    { label: 'UX / UI', skills: ['Figma', 'FigJam', 'User Flows', 'Wireframing', 'Prototyping', 'Accessibility', 'WCAG'] },
                    { label: 'Backend & APIs', skills: ['Next.js API Routes', 'Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'SQL', 'MongoDB', 'TypeORM'] },
                    { label: 'Authentication', skills: ['AWS Cognito', 'AWS Amplify', 'Auth0', 'JWT', 'Role-Based Access'] },
                    { label: 'Testing', skills: ['Vitest', 'Playwright', 'Unit Testing', 'E2E Testing'] },
                    { label: 'Cloud & DevOps', skills: ['GitHub Actions', 'Docker', 'Vercel', 'AWS ECS', 'S3', 'Aurora RDS', 'API Gateway', 'Secrets Manager', 'CloudWatch', 'CI/CD'] },
                    { label: 'Observability & Analytics', skills: ['New Relic', 'Pino Logger', 'Google Tag Manager'] },
                    { label: 'Integrations & Tools', skills: ['Salesforce', 'Moneris', 'TSYS', 'Strapi', 'Unleash', 'Git', 'GitHub', 'Jira', 'Notion', 'Cursor', 'Claude'] },
                    { label: 'Practices', skills: ['Agile/Scrum', 'Feature Flags', 'Cross-Browser Compatibility', 'API Integration', 'Production Support'] },
                  ].map(({ label, skills }, i, arr) => (
                    <div key={label}>
                      <h4 className="text-sm font-semibold text-purple-light uppercase tracking-wide mb-2">{label}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-purple-dark text-white rounded-md text-sm">
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

            <div>
              <h3 className="text-2xl font-bold text-purple-light mb-4">Languages</h3>
              <p className='text-neutral-800 dark:text-neutral-200'>English, Spanish</p>
            </div>
          </motion.div>
        
      </AnimatePresence>
    </div>
  );
}
