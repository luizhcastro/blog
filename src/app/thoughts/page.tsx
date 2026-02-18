import Link from "next/link";
import { getThoughts } from "@/src/lib/thoughts";

export default function ThoughtsPage() {
  const thoughts = getThoughts();

  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Thoughts
      </h1>
      <div className="divide-y divide-zinc-500 overflow-hidden rounded ring-1 ring-zinc-500">
        {thoughts.map((thought) => (
          <Link
            key={thought.slug}
            href={`/thoughts/${thought.slug}`}
            className="flex items-center justify-between p-4 transition-colors sm:hover:bg-zinc-800"
          >
            <span>{thought.title}</span>
            <time className="text-sm text-zinc-400">{thought.date}</time>
          </Link>
        ))}
      </div>
    </>
  );
}
