import Container from "@/components/Container";
import { Metadata } from "next";
import { compileMDX, MDXRemote } from "next-mdx-remote/rsc";
import { getBlogContent, getBlogForntmatterBySlug } from "@/utils/mdx";
import { redirect } from "next/navigation";
import { log } from "console";

export async function generateMetaData({
  params,
}: {
  params: Promise<{ slug: string }>;
  }) {
   const { slug } = await params;
  const frontmatter = await getBlogForntmatterBySlug(slug);
  if (!frontmatter) {
    return {
      title: "Blog NOt Found",
    };
  }
  return {
    title: frontmatter.title + " by Haseeb Sajjad",
    description:frontmatter.description,
  };
}
export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogContent(slug);
  if (!blog) {
    redirect("/blog");
  }
  const { content, frontmatter } = blog;

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <div className="prose dark:prose-invert">{content}</div>
      </Container>
    </div>
  );
}
