import { useState } from 'react';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin, FaPaw } from 'react-icons/fa';

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

const photos = [
  {
    id: 'me',
    src: 'https://res.cloudinary.com/dirwvgura/image/upload/profile_gkbmyv.png',
    alt: 'Andrea Larsen, UX Engineer',
    label: 'Me',
  },
  {
    id: 'cuddles',
    src: '/cuddles.png',
    alt: "Cuddles, Andrea's Bernedoodle, sitting on a sidewalk covered in red fall leaves",
    label: 'Cuddles, enjoying fall',
  },
];

export default function About() {
  const [front, setFront] = useState('me');


  const [showAllSkills, setShowAllSkills] = useState(false);



  return (
    <div className="relative flex flex-col items-center justify-center px-4 py-20 transition-all duration-500">
      {/* Decorative shapes scattered around the About section */}
      <img
        src="/blob-pink.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none hidden md:block absolute z-0 right-[6%] top-10 w-28 rotate-12"
      />
      <img
        src="/blob-blue.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute z-0 left-[3%] bottom-4 w-12 md:w-16 -rotate-6"
      />

      <motion.section
        transition={{ duration: 0.6, ease: easeOut }}
        className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full z-10"
      >
      
        <div className="relative w-64 h-64 shrink-0 mb-12 md:mb-0 md:mr-10">
          {/* Decorative gold line art behind the photo */}
          <img
            src="/about-lines.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute left-1/2 top-1/2 w-[380px] max-w-none -translate-x-[58%] -translate-y-1/2 opacity-90"
          />
          {/* Photo stack: click the photo in the back to bring it to the front */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="relative z-10 w-64 h-64"
          >
            {photos.map((photo) => {
              const isFront = photo.id === front;
              return (
                <motion.button
                  key={photo.id}
                  type="button"
                  onClick={() => setFront(front === 'me' ? 'cuddles' : 'me')}
                  aria-label={
                    isFront
                      ? `${photo.alt}. Click to see the other photo.`
                      : `Show photo: ${photo.label}`
                  }
                  animate={
                    isFront
                      ? { rotate: -3, x: 0, y: 0, scale: 1 }
                      : { rotate: 7, x: 48, y: 14, scale: 0.92 }
                  }
                  transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                  style={{ zIndex: isFront ? 20 : 10 }}
                  className="absolute inset-0 bg-cream p-2 pb-9 rounded-xl shadow-xl text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac"
                >
                  <img
                    src={photo.src}
                    alt={isFront ? photo.alt : ''}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <span className="absolute bottom-2 left-0 right-0 text-center text-sm font-semibold text-plum">
                    {photo.label}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
          <p className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-center text-xs uppercase tracking-[0.15em] text-lilac/80">
            {front === 'me' ? (
              <>
                Click on the photo to meet Cuddles{' '}
                <FaPaw aria-hidden="true" className="inline-block ml-1 -mt-0.5 text-lilac" />
              </>
            ) : (
              'Click to go back to me'
            )}
          </p>
        </div>
        {/* About section ------------------------------------------------------*/}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-xl text-center md:text-left space-y-6"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-cream">
            About <span className="text-lilac">Me</span>
          </h2>

          <div className="space-y-6 text-cream/90 leading-relaxed">
            <p>
              Hi, I’m Andrea! I’m a UX engineer: I build frontend experiences with a strong focus on the people using them.
              I aim for web applications that are clear, accessible, and easy to use, and I
              care as much about how something works for people as how it’s built.
            </p>

            <p>
              Before tech, I was a pastry chef. I loved the creativity and the joy of
              making something for someone, and I still work the same way: understand
              who you’re building for, sweat the details, and refine until it’s right.
              That curiosity took me to Humber College’s Multimedia Design and Development
              program, then Henry’s Full-Stack Development bootcamp, and on to Shack Shine,
              where I modernized the customer booking engine and worked across payments,
              authentication, testing, and production support.
            </p>

            <p>
              I’m originally from Argentina, so Spanish is my first language, and I’ve
              called Canada home for almost nine years. I love it here, and fall is my
              favourite season. Outside of work, you’ll find me on long walks with my dog
              Cuddles, a 100&nbsp;lb Bernedoodle, at ballet class, or in the kitchen
              baking something nice.
            </p>

            <p>
              I’m looking for design-minded frontend or UX engineering roles where I can
              build thoughtful experiences and work closely with design and product.
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
            className="relative z-10 mt-16 w-full max-w-5xl bg-cream/10 text-cream border border-cream/20 rounded-xl mx-auto px-8 py-8 space-y-8"
          >
            <h3 className="text-2xl font-bold text-lilac">My Skills</h3>

            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'REST APIs', 'Playwright', 'Vitest', 'Figma', 'UX/UI', 'Accessibility'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-cream text-plum rounded-md text-sm">
                  {skill}
                </span>
              ))}
              {!showAllSkills && (
                <button
                  onClick={() => setShowAllSkills(true)}
                  className="px-3 py-1 border border-lilac text-lilac rounded-md text-sm hover:bg-cream hover:text-plum transition-colors"
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
                    <h4 className="text-sm font-semibold text-lilac uppercase tracking-wide mb-2">
                      {label}
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-cream text-plum rounded-md text-sm"
                        >
                          {skill}
                        </span>
                      ))}

                      {i === arr.length - 1 && (
                        <button
                          onClick={() => setShowAllSkills(false)}
                          className="px-3 py-1 border border-lilac text-lilac rounded-md text-sm hover:bg-cream hover:text-plum transition-colors"
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
              <h3 className="text-2xl font-bold text-lilac mb-4">Contact Info</h3>
              <div className="flex items-center gap-2 mb-2 text-cream/90">
                <MapPin size={18} className="text-lilac" />
                <span>Toronto, Canada</span>
              </div>

              <a
                href="https://github.com/AnBLarsen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mb-2 text-cream/90 hover:underline "
              >
                <FaGithub className="text-lilac" size={18} />
                github.com/AnBLarsen
              </a>


              <a
                href="https://linkedin.com/in/andreablarsen/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/90 hover:underline"
              >
                <FaLinkedin className="text-lilac" size={18} />
                linkedin.com/in/andreablarsen
              </a>
            </div>

            {/* Languages section ------------------------------------------------------*/}

            <div>
              <h3 className="text-2xl font-bold text-lilac mb-4">
                Languages
              </h3>

              <div className="space-y-1 text-cream/90">
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
