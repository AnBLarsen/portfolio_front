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
    role: 'Frontend & AI Developer',
    image: 'https://res.cloudinary.com/dirwvgura/image/upload/fulbeeto3_twpojt.png',
    description:
      'A World Cup 2026 fixture app powered by an agentic AI. BeeBot, a Claude-powered agent with tool use answers questions about matches, standings, and predictions in natural language. Built in English and Spanish.',
    tech: [
      'Next.js',
      'Claude API',
      'AI Agents',
      'Tool Use',
      'football-data.org',
      'next-intl',
      'Framer Motion',
    ],
    live: 'https://fulbeeto.vercel.app/en',
    github: 'https://github.com/AnBLarsen/fulbeeto',
  },
  {
    title: 'SmartQR',
    role: 'UX/UI and Frontend Developer',
    image: 'https://res.cloudinary.com/dirwvgura/image/upload/Screenshot_From_2025-07-07_17-05-50_ysmsdl.png',
    description:
      'SmartQR is a full-stack self-ordering web app for the restaurant industry. Customers scan a QR code to browse the menu, place orders, and pay. Includes real-time order tracking, chatbot support, dynamic QR generation, Stripe integration, and role-based dashboards.',
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
    role: 'UX/UI and Full Stack Developer',
    image: 'https://res.cloudinary.com/dirwvgura/image/upload/Screenshot_From_2025-07-07_17-04-38_cj3u5e.png',
    description:
    'A soothing full-stack spa booking platform. Clients can register, log in, and schedule services. Features a dynamic booking system, form validation, weekday-only date picker, and upcoming backend deployment.',
    tech: [
      'React Vite',
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
    role: 'UX/UI and Frontend Developer',
    image: 'https://res.cloudinary.com/dirwvgura/image/upload/Screenshot_From_2025-07-07_17-04-01_w067hr.png',
    description:
      'A fully responsive e-commerce site for electronics. Users can register, log in, browse products, and manage their cart. Features protected routes, JWT authentication, persistent state with React Context, and animations.',
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
    title: 'Projects | Andrea Larsen',
    description: 'Web projects by Andrea Larsen, responsive web apps built with React, TypeScript, Next.js, and Tailwind CSS.',
    canonical: 'https://www.andrealarsen.me/projects',
  });

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative z-10 scrollbar-hide">
      <h2 className="text-4xl font-bold text-center mb-4 text-neutral-900 dark:text-white">
        Featured <span className="text-purple-light">Projects</span>
      </h2>
      <p className="text-center text-neutral-600 dark:text-neutral-400">
        Here are some of my recent projects that showcase my skills and creativity as a developer. 
      </p>
      <p className="text-center italic text-neutral-600 dark:text-neutral-400 mb-10">
        Note: For <strong>Tech Mobile</strong> only the frontend is currently deployed. I'm building the backend with NextJS.
      </p>

      <div className="overflow-x-auto md:overflow-x-hidden scrollbar-hide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4 }}
              className="w-[300px] min-w-[300px] bg-white dark:bg-neutral-900 shadow-xl rounded-xl overflow-hidden"
            >
              <div className="h-48 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
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

                <div className="flex gap-4 ">
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-md text-purple-dark dark:text-purple-light hover:underline cursor-pointer"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-md text-purple-dark dark:text-purple-light hover:underline cursor-pointer"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
