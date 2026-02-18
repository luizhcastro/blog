import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const thoughtsDirectory = path.join(process.cwd(), "/public/thoughts");

export interface ThoughtMeta {
  title: string;
  date: string;
  slug: string;
}

export function getThoughts(): ThoughtMeta[] {
  const files = fs.readdirSync(thoughtsDirectory);

  const thoughts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(thoughtsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        title: data.title,
        date: data.date,
        slug,
      };
    });

  return thoughts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getThought(slug: string) {
  const fullPath = path.join(thoughtsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html, { sanitize: false }).process(content);
  const contentHtml = processed.toString();

  return {
    title: data.title as string,
    date: data.date as string,
    slug,
    contentHtml,
  };
}
