import Container from "@/components/Container";
import { Metadata } from "next";
import { compileMDX, MDXRemote } from "next-mdx-remote/rsc";
import { getBlogContent, getBlogForntmatterBySlug } from "@/utils/mdx";
import { redirect } from "next/navigation";

import Image from "next/image";

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
    description: frontmatter.description,
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
      <Container className="min-h-screen px-20 md:pt-20 md:pb-10">
        <Image
          src={frontmatter.image}
          alt={frontmatter.title}
          width={500}
          height={500}
          className="mx-auto mb-20 max-h-96 w-full max-w-2xl rounded-2xl border border-neutral-200 object-cover shadow-xl"
        ></Image>
        <div className="prose dark:prose-invert">{content}</div>
      </Container>
    </div>
  );
}
