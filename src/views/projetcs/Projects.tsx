import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion, easeOut } from 'framer-motion';
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

const projects = [
  {
    title: 'Fulbeeto',
    role: 'AI-Assisted Full-Stack Developer',
    image: 'https://res.cloudinary.com/dirwvgura/image/upload/fulbeeto3_twpojt.png',
    description:
      'A bilingual World Cup companion featuring live fixtures, standings, and knockout-stage data. BeeBot uses the Anthropic API, tool calling, and streaming responses to retrieve live match information before answering user questions.',
    tech: [
      'Next.js 16',
      'TypeScript',
      'Anthropic API',
      'Tool Calling',
      'Streaming Responses',
      'next-intl',
      'football-data.org',
      'Vercel',
    ],
    live: 'https://fulbeeto.vercel.app/en',
    github: 'https://github.com/AnBLarsen/fulbeeto',
  },
  {
    title: 'SmartQR',
    role: 'Frontend Developer & UX/UI Designer',
    image: 'https://res.cloudinary.com/dirwvgura/image/upload/Screenshot_From_2025-07-07_17-05-50_ysmsdl.png',
    description:
      'A mobile-first self-ordering platform for restaurants. Customers can scan a QR code, browse menus, place orders, and move through a streamlined ordering flow. I focused on the frontend experience, authentication, dynamic QR generation, session state, and UX/UI design.',
    tech: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Auth0',
      'Stripe',
      'React Hook Form',
      'Zod',
      'Cloudinary',
      'Framer Motion',
    ],
    live: 'https://www.smart-qr.tech/',
    github: 'https://github.com/SmartQrProject',
  },
  {
    title: 'Lotus Spa',
    role: 'Full-Stack Developer & UX/UI Designer',
    image: 'https://res.cloudinary.com/dirwvgura/image/upload/Screenshot_From_2025-07-07_17-04-38_cj3u5e.png',
    description:
    'A full-stack spa booking platform with user authentication, appointment scheduling, PostgreSQL-backed data, and form validation. Booking rules restrict appointments to valid weekdays and help improve data accuracy.',
    tech: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Formik',
      'Yup',
      'Axios',
      'Node.js',
      'PostgreSQL',
      'Express.js',
    ],
    live: 'https://lotus-spa-seven.vercel.app/',
    github: 'https://github.com/AnBLarsen/lotus_spa',
  },
  {
    title: 'Tech Mobile',
    role: 'Frontend Developer & UX/UI Designer',
    image: 'https://res.cloudinary.com/dirwvgura/image/upload/Screenshot_From_2025-07-07_17-04-01_w067hr.png',
    description:
      'A responsive electronics e-commerce frontend with authentication, protected routes, product browsing, cart management, persistent state, and animated interactions. The deployed version currently includes the frontend experience only.',
    tech: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'JWT Auth',
      'Zod',
      'React Hook Form',
      'React Context',
      'Framer Motion',
      'Swiper',
    ],
    live: 'https://tech-mobile-mocha.vercel.app/',
    github: 'https://github.com/AnBLarsen/tech-mobile',
  },
];

export default function Projects() {
  usePageMeta({
    title: 'Projects | Andrea Larsen, F Software Engineer',
    description: 'Selected projects by Andrea Larsen, a Frontend-Focused Software Engineer in Toronto building frontend, full-stack, UX-focused, and AI-powered web applications with Next.js, React, TypeScript, Node.js, and PostgreSQL.',
    canonical: 'https://www.andrealarsen.me/projects',
  });

  return (
    <section className="py-10 md:py-20 px-6 max-w-7xl mx-auto relative z-10 scrollbar-hide">
      <h2 className="text-4xl font-bold text-center mb-4 text-neutral-900 dark:text-white">
        Featured <span className="text-purple-light">Projects</span>
      </h2>
      <p className="text-center text-neutral-600 dark:text-neutral-400 mb-10">
        Selected projects that showcase my work across frontend development,
        full-stack applications, UX/UI, authentication, payments, data workflows, and AI-powered experiences.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 justify-items-center">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4 }}
            className="w-full max-w-[340px] bg-white dark:bg-neutral-900 shadow-xl rounded-xl overflow-hidden flex flex-col"
          >
            <div className="h-48 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-white">
                {project.title}
              </h3>
              <h4 className="text-sm font-semibold mb-2 text-neutral-800 dark:text-white">
                {project.role}
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-dark text-purple-dark dark:text-white rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap justify-between gap-4 mt-auto pt-4">
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm whitespace-nowrap text-purple-dark dark:text-purple-light hover:underline cursor-pointer"
                >
                  <FaGithub /> View Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm whitespace-nowrap text-purple-dark dark:text-purple-light hover:underline cursor-pointer"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
