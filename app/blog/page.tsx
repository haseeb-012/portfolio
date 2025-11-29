import Container from "@/components/Container";
import { Metadata } from "next";
import { getBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "All blogs - Haseeb Sajjad",
  description: "All my general wisdom and thoughts",
};
export default async function Blog() {
  const allBlog = await getBlogs();
  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          All blogs
        </h1>
        <p className="text-secondary max-w-lg text-sm md:text-sm">
          All my general wisdom and thoughts
        </p>
        <div className="flex flex-col gap-4 py-10">
          {allBlog.map((blog, index) => (
            <Link key={index} href={`/blog/${blog.slug}`}>
              <div className="flex items-center justify-between">
                <h2 className="text-primary text-base font-bold tracking-tight">
                  {blog.title}
                </h2>
                <p className="text-secondary text-sm md:text-sm">
                  { new Date(blog.date || "").toLocaleDateString('en-us', {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day:"numeric"
                })}</p>
              </div>
              <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
                {truncate(blog.description || "", 150)}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
