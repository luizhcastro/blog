import { GitBranch, Globe } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  url?: string;
  technologies: ReactNode;
}

const projects: Project[] = [
  {
    name: "Blaboard",
    description:
      "Open source app for project and issue management. Developed by the BeroLab community and maintained by me.",
    imageUrl: "/projects/blaboard.png",
    githubUrl: "https://github.com/BeroLab/blaboard",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-inherit px-2.5 py-0.5 text-sm text-zinc-200 ring-1 ring-zinc-500">
          TypeScript
        </span>
        <span className="rounded-full bg-inherit px-2.5 py-0.5 text-sm text-zinc-200 ring-1 ring-zinc-500">
          TailwindCSS
        </span>
        <span className="rounded-full bg-inherit px-2.5 py-0.5 text-sm text-zinc-200 ring-1 ring-zinc-500">
          Next.js
        </span>
        <span className="rounded-full bg-inherit px-2.5 py-0.5 text-sm text-zinc-200 ring-1 ring-zinc-500">
          Elysiajs
        </span>
      </div>
    ),
  },
  {
    name: "Ideatrace",
    description:
      "A smart tool that transforms meeting audio into structured documents.",
    imageUrl: "/projects/ideatrace.png",
    githubUrl: "https://github.com/ideatrace-ai/smartdocs",
    technologies: (
      <div className="flex items-center gap-x-3">
        <span className="rounded-full bg-inherit px-2.5 py-0.5 text-sm ring-1 ring-zinc-500">
          Typescript
        </span>
        <span className="rounded-full bg-inherit px-2.5 py-0.5 text-sm ring-1 ring-zinc-500">
          AI Integration
        </span>
        <span className="rounded-full bg-inherit px-2.5 py-0.5 text-sm ring-1 ring-zinc-500">
          RabbitMQ
        </span>
      </div>
    ),
  },
];

function ProjectCard({
  name,
  description,
  imageUrl,
  githubUrl,
  url,
  technologies,
}: Project) {
  return (
    <div className="flex-col divide-y divide-zinc-500 overflow-hidden rounded ring-1 ring-zinc-500">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
        <h2 className="text-xl">{name}</h2>
        {technologies}
      </div>
      <div>
        <p className="p-4">{description}</p>
      </div>
      <Image
        src={imageUrl}
        width={1200}
        height={630}
        alt="Logo for css2wind website"
      />
      <div className="flex w-full justify-between divide-x divide-zinc-500">
        {url && (
          <a
            href={url}
            target="_blank"
            className="flex grow items-center justify-center gap-2 py-4 transition-transform sm:hover:bg-zinc-800"
          >
            <Globe strokeWidth={1.4} className="size-5" /> Visit website
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            className="flex grow items-center justify-center gap-2 py-4 transition-transform sm:hover:bg-zinc-800"
          >
            <GitBranch strokeWidth={1.4} className="size-5" /> View code
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Projects
      </h1>
      <div className="space-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.url} {...project} />
        ))}
      </div>
    </>
  );
}
