import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import useSEO from "../components/hooks/useSEO";
import ProjectDetailView from "../components/portfolio/ProjectDetailView";
import { getProjectById } from "../data/portfolioCaseStudies";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = useMemo(() => getProjectById(projectId), [projectId]);

  useSEO({
    title: project
      ? `${project.name} Case Study | Vsachi Tech`
      : "Project Case Study | Vsachi Tech",
    description: project?.summary ?? "Vsachi Tech client project case study.",
    canonical: project
      ? `https://vsachitech.com/our-work/${project.id}`
      : "https://vsachitech.com/our-work",
  });

  if (!project) {
    return <Navigate to="/our-work" replace />;
  }

  return <ProjectDetailView project={project} />;
}
