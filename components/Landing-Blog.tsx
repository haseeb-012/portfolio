import { getBlogs } from '@/utils/mdx'
import Link from 'next/link';
// import { Link } from 'next-view-transitions';
import React from 'react'
import SectionHeading from './section-heading';

async function LandingBlogs() {
  const allBlog = await getBlogs();
  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };
  return (
    <div className="px-4 shadow-section-inset dark:shadow-section-dark">
      <SectionHeading delay={0.3}>
        Sharing knowledge as I learn
      </SectionHeading>
      <div className="flex flex-col gap-4 mt-1">
        {allBlog.map((blog, index) => (
          <Link key={index} href={`/blog/${blog.slug}`}>
            <div className="flex items-center justify-between">
              <h2 className="text-primary text-base font-bold tracking-tight">
                {blog.title}
              </h2>
              <p className="text-secondary text-sm mx-1 md:mx-0 md:text-sm">
                {new Date(blog.date || "").toLocaleDateString("en-us", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
            <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
              {truncate(blog.description || "", 150)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LandingBlogs;