"use client";

import { ChevronLeft, Triangle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  const isHome = path === "/";

  return (
    <header className="mx-auto max-w-prose py-8 max-sm:pt-4">
      <nav className="flex items-center justify-between max-sm:flex-col max-sm:gap-6">
        <Link
          className={`group relative -m-12 -my-2 -mr-4 flex items-center rounded py-2 pl-12 pr-4 ${isHome ? "ring-0" : "sm:hover:ring-1"} ring-sky-500 transition-transform max-sm:text-center`}
          href="/"
          aria-label="Back to home"
        >
          <div
            className={`${isHome ? "hidden" : "absolute"} left-1 flex size-4 h-full w-12 items-center px-2`}
          >
            <ChevronLeft strokeWidth={1.4} />
          </div>
          <div className="flex flex-col max-sm:items-center">
            Luiz Castro
            <span className="text-zinc-400">Software Engineer</span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            className="group relative rounded px-2 py-px ring-sky-600 transition-transform sm:hover:ring-1"
            href="/projects"
            aria-label="View projects"
            aria-current={path === "/projects" ? "page" : undefined}
          >
            /projects
            <Triangle
              aria-hidden="true"
              className="absolute left-1/2 mt-1 hidden size-2 fill-sky-600 text-transparent group-aria-[current=page]:block"
            />
          </Link>
          <Link
            className="group relative rounded px-2 py-px ring-sky-600 transition-transform sm:hover:ring-1"
            href="/thoughts"
            aria-label="View thoughts"
            aria-current={path.startsWith("/thoughts") ? "page" : undefined}
          >
            /thoughts
            <Triangle
              aria-hidden="true"
              className="absolute left-1/2 mt-1 hidden size-2 fill-sky-600 text-transparent group-aria-[current=page]:block"
            />
          </Link>
          {/*<Link
            className="group relative rounded px-2 py-px ring-sky-600 transition-transform sm:hover:ring-1"
            href="/articles"
            aria-label="View articles"
            aria-current={path.startsWith("/articles") ? "page" : undefined}
          >
            /articles
            <Triangle
              aria-hidden="true"
              className="absolute left-1/2 mt-1 hidden size-2 fill-sky-600 text-transparent group-aria-[current=page]:block"
            />
          </Link>*/}
        </div>
      </nav>
    </header>
  );
}
