// app/types/project.ts

export interface Project {
  id: number;
  title: string;
  about: string;
  img: string;
  details: string;
  href: string;
}

export interface ProjectShow {
  id: string;
  main: string;
  second: string;
  third: string;
  fourth: string;
  video: string;
}
