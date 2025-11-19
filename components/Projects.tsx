"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

function Projects() {
  const Projects = [
    {
      title: "Internet Infrastructure",
      src: "/1.jpg",
      href: "#internet",
      description:
        "Built scalable network infrastructure supporting millions of concurrent connections.",
    },
    {
      title: "E‑Commerce Platform",
      src: "/2.jpg",
      href: "#ecommerce",
      description:
        "Developed full-stack e-commerce solution with payment integration and inventory management.",
    },
    {
      title: "Social Network",
      src: "/3.jpg",
      href: "#social",
      description:
        "Created real-time social platform with messaging, notifications, and user engagement features.",
    },
    {
      title: "Analytics Dashboard",
      src: "/4.jpg",
      href: "#analytics",
      description:
        "Built interactive analytics dashboard with data visualization and real-time metrics tracking.",
    },
  ];
  return (
    <div className="py-10">
      <p className="text-secondary">
        I Love Building web App and product that can impact million lives
      </p>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
        {Projects.map((project, index) => (
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className="group relative mb-4  "// fixed h-82 if needed
            key={index}
          >
            <Link href={project.href}>
              <Image
                src={project.src}
                width={300}
                height={300}
                alt={project.title}
                className="w-full h-68 rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
              />
              <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-400 dark:text-neutral-500">
                {project.title}
              </h2>
              <p className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-400">
                {project.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
