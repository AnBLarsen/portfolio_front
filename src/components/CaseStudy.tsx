import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaSearchPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ImageLightbox from './ImageLightbox';
import type { CaseStudy as CaseStudyType, CaseStudyMedia } from '../data/caseStudies';

type CaseStudyProps = {
  caseStudy: CaseStudyType;
};

export default function CaseStudy({ caseStudy }: CaseStudyProps) {
  return (
    <article className="py-10 md:py-20 px-6 max-w-5xl mx-auto relative z-10">
      <Link
        to="/work"
        className="group inline-flex items-center gap-2 mb-8 text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:text-violet transition-colors"
      >
        <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
        Back to Work
      </Link>

      <header className="mb-12">
        <p className="text-sm font-semibold text-violet uppercase tracking-wide mb-3">
          {caseStudy.type}
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white mb-4">
          {caseStudy.title}
        </h1>

        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl">
          {caseStudy.subtitle}
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-neutral-700 dark:text-neutral-300">
          <InfoCard label="Role" value={caseStudy.role} />
          <InfoCard label="Timeline" value={caseStudy.timeline} />
          {caseStudy.status && <InfoCard label="Status" value={caseStudy.status} />}
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {caseStudy.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-orchid/30 dark:bg-plum text-plum dark:text-white rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      <img
        src={caseStudy.heroImage}
        alt={`${caseStudy.title} preview`}
        className="w-full rounded-xl shadow-xl mb-10"
      />

      {caseStudy.disclaimer && (
        <aside className="mb-10 rounded-xl border border-violet/30 bg-lilac/30 dark:bg-plum/20 p-4 text-sm text-neutral-700 dark:text-neutral-200">
          {caseStudy.disclaimer}
        </aside>
      )}

      <Section title="Overview">
        <p>{caseStudy.overview}</p>
      </Section>

      <Section title="Project Objective">
        <p>{caseStudy.objective}</p>
      </Section>

      <Section title="My Role">
        <p>{caseStudy.myRole}</p>
      </Section>

      {caseStudy.designSections && caseStudy.designSections.length > 0 && (
        <Section title="Design Process">
          <div className="space-y-14">
            {caseStudy.designSections.map((section) => (
              <div key={section.title}>
                <TextBlock title={section.title} body={section.body} />
                {section.images && section.images.length > 0 && (
                  <div className="mt-6 space-y-8">
                    {section.images.map((item) => (
                      <MediaFigure key={item.src} item={item} fallbackAlt={caseStudy.title} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}

      {(caseStudy.palette || caseStudy.typography) && (
        <Section title="Visual Identity">
          {caseStudy.palette && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-8">
              {caseStudy.palette.map((swatch) => (
                <div key={swatch.hex}>
                  <div
                    className="h-20 rounded-lg shadow border border-black/10 dark:border-white/10"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  {swatch.label && (
                    <p className="mt-2 text-sm font-semibold text-neutral-900 dark:text-white">
                      {swatch.label}
                    </p>
                  )}
                  <p className="text-xs font-mono">{swatch.hex}</p>
                </div>
              ))}
            </div>
          )}
          {caseStudy.typography && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.typography.map((font) => (
                <div key={font.family} className="rounded-xl bg-white dark:bg-neutral-900 shadow p-5">
                  <p className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">
                    {font.family}
                  </p>
                  <p className="text-sm">{font.usage}</p>
                </div>
              ))}
            </div>
          )}
        </Section>
      )}

      {caseStudy.media && caseStudy.media.length > 0 && (
        <Section title="A Peek Into the Work">
          <div className="space-y-8">
            {caseStudy.media.map((item) => (
              <MediaFigure key={item.src} item={item} fallbackAlt={caseStudy.title} />
            ))}
          </div>
        </Section>
      )}

      {caseStudy.process && caseStudy.process.length > 0 && (
        <Section title="Process">
          <div className="space-y-6">
            {caseStudy.process.map((section) => (
              <TextBlock
                key={section.title}
                title={section.title}
                body={section.body}
              />
            ))}
          </div>
        </Section>
      )}

      {caseStudy.technicalApproach && caseStudy.technicalApproach.length > 0 && (
        <Section title="Technical Approach">
          <div className="space-y-6">
            {caseStudy.technicalApproach.map((section) => (
              <TextBlock
                key={section.title}
                title={section.title}
                body={section.body}
              />
            ))}
          </div>
        </Section>
      )}

      {caseStudy.uxProductDecisions && (
        <Section title="UX & Product Decisions">
          <BulletList items={caseStudy.uxProductDecisions} />
        </Section>
      )}

      <Section title="Outcome">
        <p>{caseStudy.outcome}</p>
      </Section>

      {caseStudy.learnings && (
        <Section title="What I Learned">
          <BulletList items={caseStudy.learnings} />
        </Section>
      )}

      {(caseStudy.links?.live || caseStudy.links?.prototype || caseStudy.links?.github) && (
        <div className="flex flex-wrap gap-4 mt-12">
          {caseStudy.links.prototype && (
            <a
              href={caseStudy.links.prototype}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-plum dark:text-violet hover:underline"
            >
              <FaExternalLinkAlt /> View Prototype
            </a>
          )}
          {caseStudy.links.github && (
            <a
              href={caseStudy.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-plum dark:text-violet hover:underline"
            >
              <FaGithub /> View Code
            </a>
          )}
          {caseStudy.links.live && (
            <a
              href={caseStudy.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-plum dark:text-violet hover:underline"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}

function MediaFigure({ item, fallbackAlt }: { item: CaseStudyMedia; fallbackAlt: string }) {
  return (
    <figure className={item.narrow ? 'max-w-md mx-auto' : undefined}>
      {item.type === 'video' ? (
        <video controls className="w-full rounded-xl shadow-lg" src={item.src} />
      ) : (
        <ZoomableImage src={item.src} alt={item.alt ?? `${fallbackAlt} screenshot`} caption={item.caption} />
      )}
      <figcaption className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
        {item.caption}
      </figcaption>
    </figure>
  );
}

function ZoomableImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge image: ${alt}`}
        className="group relative block w-full cursor-zoom-in rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum"
      >
        <img src={src} alt={alt} className="w-full rounded-xl shadow-lg" loading="lazy" />
        <span className="pointer-events-none absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-ink/70 text-cream opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
          <FaSearchPlus aria-hidden="true" />
        </span>
      </button>
      {open && <ImageLightbox src={src} alt={alt} caption={caption} onClose={() => setOpen(false)} />}
    </>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white dark:bg-neutral-900 shadow p-4">
      <strong className="block text-neutral-900 dark:text-white mb-1">
        {label}
      </strong>
      <span>{value}</span>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12 text-neutral-700 dark:text-neutral-300 leading-relaxed">
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}

function TextBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
        {title}
      </h3>
      <p>{body}</p>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}