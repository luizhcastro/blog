import { getThought, getThoughts } from "@/src/lib/thoughts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const thoughts = getThoughts();
  return thoughts.map((thought) => ({ slug: thought.slug }));
}

export default async function ThoughtPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const thought = await getThought(slug);

    return (
      <>
        <header className="mb-12 mt-4">
          <h1 className="text-center text-5xl max-sm:text-4xl">
            {thought.title}
          </h1>
          <time className="mt-4 block text-center text-sm text-zinc-400">
            {thought.date}
          </time>
        </header>
        <article dangerouslySetInnerHTML={{ __html: thought.contentHtml }} />
      </>
    );
  } catch {
    notFound();
  }
}
