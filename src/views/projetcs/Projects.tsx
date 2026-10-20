import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion, easeOut } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    title: 'Shack Shine Online Booking Engine',
    tagline: 'From legacy PHP to a modern booking flow',
    category: 'Professional Work · Frontend Engineering',
    featured: true,
    imagePosition: 'left',
    role: 'Junior UX Engineer',
    image: '/shackshine-card.png',
    description: '',
    tech: ['Next.js', 'TypeScript', 'Salesforce', 'Moneris & TSYS', 'Playwright', 'New Relic'],
    caseStudy: '/projects/shack-shine-online-booking-engine',
  },
  {
    title: 'Fulbeeto',
    tagline: 'Following the World Cup in two languages',
    category: 'Personal Project · AI-Assisted Build',
    featured: true,
    imagePosition: 'center',
    role: 'Developer · AI-Assisted Personal Project',
    image: '/fulbeeto.png',
    description: '',
    tech: ['Next.js 16', 'TypeScript', 'Anthropic API', 'Tool Calling', 'Streaming Responses', 'next-intl'],
    live: 'https://fulbeeto.vercel.app/en',
    github: 'https://github.com/AnBLarsen/fulbeeto',
  },
  {
    title: 'SmartQR',
    tagline: 'Ordering from the table, no waiting',
    category: 'Group Project · Frontend & UX/UI',
    featured: true,
    imagePosition: 'center',
    role: 'Frontend Developer & UX/UI · Group Project',
    image: '/smartqr/hero-1.png',
    description: '',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Auth0', 'Stripe'],
    live: 'https://smart-qr-front.vercel.app/',
    github: 'https://github.com/SmartQrProject',
  },
  {
    title: 'Lotus Spa',
    tagline: 'Booking a spa day in a few taps',
    category: 'Personal Project · Full-Stack',
    featured: false,
    imagePosition: 'top',
    role: 'Full-Stack Developer · Personal Project',
    image: 'https://res.cloudinary.com/dirwvgura/image/upload/Screenshot_From_2025-07-07_17-04-38_cj3u5e.png',
    description: '',
    tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Formik & Yup'],
    live: 'https://lotus-spa-seven.vercel.app/',
    github: 'https://github.com/AnBLarsen/lotus_spa',
  },
  {
    title: 'Tech Mobile',
    tagline: 'A smooth path from browsing to cart',
    category: 'Personal Project · Frontend',
    featured: false,
    imagePosition: 'top',
    role: 'Frontend Developer · Personal Project',
    image: 'https://res.cloudinary.com/dirwvgura/image/upload/Screenshot_From_2025-07-07_17-04-01_w067hr.png',
    description: '',
    tech: ['Next.js', 'TypeScript', 'JWT Auth', 'React Context', 'Framer Motion'],
    live: 'https://tech-mobile-mocha.vercel.app/',
    github: 'https://github.com/AnBLarsen/tech-mobile',
  },
];

type ProjectLinkProps = {
  project: { caseStudy?: string; live?: string; prototype?: string };
  className?: string;
  tabIndex?: number;
  'aria-hidden'?: 'true';
  children: React.ReactNode;
};

// Opens the case study when there is one, otherwise the live site.
function ProjectLink({ project, children, ...rest }: ProjectLinkProps) {
  if (project.caseStudy) {
    return (
      <Link to={project.caseStudy} {...rest}>
        {children}
      </Link>
    );
  }
  const external = project.live ?? project.prototype;
  if (external) {
    return (
      <a href={external} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return <div className={rest.className}>{children}</div>;
}


type Project = (typeof projects)[number] & {
  caseStudy?: string;
  live?: string;
  prototype?: string;
  category?: string;
  tagline?: string;
  imagePosition?: string;
  github?: string;
  featured?: boolean;
};

const objectPosition: Record<string, string> = {
  left: 'object-left',
  center: 'object-center',
  top: 'object-top',
};

const linkClass =
  'inline-flex items-center gap-1 text-sm font-bold uppercase tracking-[0.12em] text-plum border-b-2 border-plum/30 hover:border-plum pb-0.5 transition-colors';

// Editorial, magazine-style card: big image first, then a small label, a large title,
// the outcome as a one-line tagline, and quiet text links.
function ProjectCard({
  project,
  index,
  aspect = 'aspect-square',
}: {
  project: Project;
  index: number;
  aspect?: string;
}) {
  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="group flex flex-col"
    >
      <ProjectLink
        project={project}
        tabIndex={-1}
        aria-hidden="true"
        className={`block ${aspect} overflow-hidden rounded-xl bg-lilac`}
      >
        <img
          src={project.image}
          alt=""
          className={`w-full h-full object-cover ${objectPosition[project.imagePosition ?? 'center']} transition-transform duration-700 group-hover:scale-[1.03]`}
        />
      </ProjectLink>

      <div className="mt-6 flex items-baseline justify-between gap-4 border-t border-plum/20 pt-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-orchid">
          {project.category}
        </p>
        <span className="text-xs font-bold tracking-[0.18em] text-plum/60">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-3 text-3xl md:text-4xl font-extrabold leading-tight text-plum">
        <ProjectLink project={project} className="hover:text-violet transition-colors">
          {project.title}
        </ProjectLink>
      </h3>

      {project.tagline && (
        <p className="mt-2 text-lg md:text-xl italic text-ink/80">{project.tagline}</p>
      )}

      <p className="mt-3 text-sm font-semibold text-ink">{project.role}</p>
      <p className="mt-1 text-sm text-muted">{project.tech.slice(0, 5).join(' · ')}</p>

      <div className="mt-5 flex flex-wrap gap-6">
        {project.caseStudy && (
          <Link to={project.caseStudy} className={linkClass}>
            Case study <span aria-hidden="true">→</span>
          </Link>
        )}
        {project.prototype && (
          <a href={project.prototype} target="_blank" rel="noopener noreferrer" className={linkClass}>
            Prototype <FaExternalLinkAlt className="text-[0.7em]" />
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className={linkClass}>
            Live site <FaExternalLinkAlt className="text-[0.7em]" />
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
            Code <FaGithub className="text-[0.8em]" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

const allProjects = projects as Project[];
const designProjects = allProjects.filter((p) => p.featured);
const codeProjects = allProjects.filter((p) => !p.featured);

export default function Projects() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto w-full relative z-10">
      <header className="max-w-3xl mb-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-orchid mb-4">Selected Work</p>
        <h2 className="text-5xl md:text-7xl font-extrabold leading-[1.05] text-plum">
          Built for real users, <span className="italic font-normal">designed with care.</span>
        </h2>
        <p className="mt-6 text-lg text-muted">
          Professional, group, and personal projects across frontend development, full-stack
          applications, integrations, and AI-powered experiences.
        </p>
        <p className="mt-3 text-lg text-muted">
          Want to explore my design work? Visit{' '}
          <a
            href="https://design.andrealarsen.me"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-violet underline decoration-violet/40 hover:decoration-violet"
          >
            design.andrealarsen.me
          </a>
          .
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
        {designProjects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      <div className="mt-32 border-t border-plum/20 pt-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-orchid mb-4">More projects</p>
        <h3 className="text-3xl md:text-5xl font-extrabold text-plum mb-12">Personal builds</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {codeProjects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={designProjects.length + i}
              aspect="aspect-[4/3]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
