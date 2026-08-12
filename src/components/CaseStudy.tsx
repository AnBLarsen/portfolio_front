import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import type { CaseStudy as CaseStudyType } from '../data/caseStudies';

type CaseStudyProps = {
  caseStudy: CaseStudyType;
};

export default function CaseStudy({ caseStudy }: CaseStudyProps) {
  return (
    <article className="py-10 md:py-20 px-6 max-w-5xl mx-auto relative z-10">
      <header className="mb-12">
        <p className="text-sm font-semibold text-purple-light uppercase tracking-wide mb-3">
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
              className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-dark text-purple-dark dark:text-white rounded-full"
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
        <aside className="mb-10 rounded-xl border border-purple-light/30 bg-purple-50 dark:bg-purple-dark/20 p-4 text-sm text-neutral-700 dark:text-neutral-200">
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

      {caseStudy.media && caseStudy.media.length > 0 && (
        <Section title="A Peek Into the Work">
          <div className="space-y-8">
            {caseStudy.media.map((item) => (
              <figure key={item.src}>
                {item.type === 'video' ? (
                  <video
                    controls
                    className="w-full rounded-xl shadow-lg"
                    src={item.src}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt ?? `${caseStudy.title} screenshot`}
                    className="w-full rounded-xl shadow-lg"
                    loading="lazy"
                  />
                )}

                <figcaption className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      )}

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

      {(caseStudy.links?.live || caseStudy.links?.github) && (
        <div className="flex flex-wrap gap-4 mt-12">
          {caseStudy.links.github && (
            <a
              href={caseStudy.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-dark dark:text-purple-light hover:underline"
            >
              <FaGithub /> View Code
            </a>
          )}

          {caseStudy.links.live && (
            <a
              href={caseStudy.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-dark dark:text-purple-light hover:underline"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      )}
    </article>
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