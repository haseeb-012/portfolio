import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

type FrontMatter = {
  title: string;
  description: string;
  date: string ;
  image: string;
};
export async function getBlogContent(slug: string) {
  try {
    const signleBlog = await fs.readFile(
      path.join(process.cwd(), "data", `${slug}.mdx`),
      "utf8",
    );
    if (!signleBlog) {
      return null;
    }
    const { content, frontmatter } = await compileMDX<{ title: string }>({
      source: signleBlog,
      options: { parseFrontmatter: true },
    });
    return { content, frontmatter };
  } catch (error) {
    console.error("Error reading blog file:", error);
    return null;
  }
}

export const getBlogs = async () => {
  const files = await fs.readdir(path.join(process.cwd(), "data"));
  const allBLogs = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      const frontmatter = await getBlogForntmatterBySlug(slug);
      return {
        slug,
        ...frontmatter,
      };
    }),
  );

  return allBLogs;
};

export const getBlogForntmatterBySlug = async (slug: string) => {
  try {
    const signleBlog = await fs.readFile(
      path.join(process.cwd(), "data", `${slug}.mdx`),
      "utf8",
    );
    if (!signleBlog) {
      return null;
    }
    const { frontmatter } = await compileMDX<FrontMatter>({
      source: signleBlog,
      options: { parseFrontmatter: true },
    });
    return  frontmatter;
  } catch (error) {
    console.error("Error reading blog file:", error);
    return null;
  }
};
