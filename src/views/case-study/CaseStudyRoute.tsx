import { useLayoutEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import CaseStudy from '../../components/CaseStudy';
import { caseStudies, type CaseStudy as CaseStudyType } from '../../data/caseStudies';
import { usePageMeta } from '../../hooks/usePageMeta';

export default function CaseStudyRoute() {
  const { slug } = useParams();

  const caseStudy = caseStudies.find((study) => study.slug === slug);

  if (!caseStudy) {
    return <Navigate to="/work" replace />;
  }

  return <CaseStudyPage caseStudy={caseStudy} />;
}

function CaseStudyPage({ caseStudy }: { caseStudy: CaseStudyType }) {
  usePageMeta({
    title: `${caseStudy.title} | Andrea Larsen Case Study`,
    description: caseStudy.subtitle,
    canonical: `https://www.andrealarsen.me/projects/${caseStudy.slug}`,
  });

  // Always open a case study at the top, not at the scroll position of the previous page.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [caseStudy.slug]);

  return <CaseStudy caseStudy={caseStudy} />;
}
