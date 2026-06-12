import fs from 'node:fs';
import path from 'node:path';
import type { Post } from './post-meta';

export type PostEntry = Post & { slug: string; readingTime: number };

const POSTS_DIR = path.join(process.cwd(), 'src/app/blog/(posts)');

export const getAllPosts = async (): Promise<PostEntry[]> => {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const slugs = fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(POSTS_DIR, entry.name, 'page.mdx')))
    .map((entry) => entry.name);

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await import(`@/app/blog/(posts)/${slug}/page.mdx`);
      if (!mod.post?.title || !mod.post?.date || !mod.post?.description) {
        throw new Error(`Missing or incomplete \`post\` export in src/app/blog/(posts)/${slug}/page.mdx`);
      }
      const words = fs.readFileSync(path.join(POSTS_DIR, slug, 'page.mdx'), 'utf8').split(/\s+/).length;
      return { ...(mod.post as Post), slug, readingTime: Math.max(1, Math.round(words / 200)) };
    }),
  );

  return posts.sort((a, b) => b.date.localeCompare(a.date));
};
