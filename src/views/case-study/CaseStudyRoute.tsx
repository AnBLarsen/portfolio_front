import { Navigate, useParams } from 'react-router-dom';
import CaseStudy from '../../components/CaseStudy';
import { caseStudies } from '../../data/caseStudies';
import { usePageMeta } from '../../hooks/usePageMeta';

export default function CaseStudyRoute() {
  const { slug } = useParams();

  const caseStudy = caseStudies.find((study) => study.slug === slug);

  if (!caseStudy) {
    return <Navigate to="/projects" replace />;
  }

  usePageMeta({
    title: `${caseStudy.title} | Andrea Larsen Case Study`,
    description: caseStudy.subtitle,
    canonical: `https://www.andrealarsen.me/projects/${caseStudy.slug}`,
  });

  return <CaseStudy caseStudy={caseStudy} />;
}