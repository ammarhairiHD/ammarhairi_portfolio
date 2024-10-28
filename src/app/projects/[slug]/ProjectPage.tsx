import { projects, projectshows } from "@/app/constants/ProjectsLists";
import { notFound } from "next/navigation";
import ProjectContent from "./ProjectContent";
import { Project, ProjectShow } from "@/app/types/Project";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(
    (p) => p.href === `/projects/${params.slug}`
  ) as Project | undefined;
  const projectShow = projectshows.find(
    (p) => p.id.toLowerCase() === params.slug
  ) as ProjectShow | undefined;

  if (!project || !projectShow) {
    notFound();
  }

  return <ProjectContent project={project} projectShow={projectShow} />;
}
