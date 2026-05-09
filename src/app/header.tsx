"use client";

import { ChevronLeft } from "lucide-react";
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
            <span className="text-zinc-500">Software Engineer</span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/thoughts/what-am-i-looking-for"
            className="rounded px-2 py-px ring-sky-600 transition-transform sm:hover:ring-1"
          >
            <span className="font-italic italic font-normal">
              What I&apos;m looking for?
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
