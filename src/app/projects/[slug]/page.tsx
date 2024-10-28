import ProjectPage from "./ProjectPage";
import { projects } from "@/app/constants/ProjectsLists";

export default ProjectPage;

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.href.split("/").pop() || "",
  }));
}
