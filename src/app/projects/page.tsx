// app/projects/page.tsx
import Image from "next/image";
import ProjectList from "../components/projects/ProjectsLists";

export default function Projects() {
  return (
    <div className="lg:h-[75vh]">
      <div className="flex flex-col items-center gap-10">
        <h1 className="font-semibold text-4xl text-main-color text-center typewriter">
          PROJECTS
        </h1>
        <Image
          src="/project/background.jpg"
          alt="Rahul Pandit Pexels"
          width={400}
          height={400}
          className="animate-pulse"
        />
      </div>
      <ProjectList />
    </div>
  );
}
