"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { Project ,projects as defaultProject} from "@/constant/project";
import SectionHeading from "./section-heading";

function Projects({ projects = defaultProject }: { projects?: Project[] }) {
  return (
    <div className="py-10">
      <SectionHeading>
        I love Building things
      </SectionHeading>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
        {projects.map((project, index) => (
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
            className="group relative mb-4" // fixed h-82 if needed
            key={index}
          >
            <Link href={project.href}>
              <Image
                src={project.src}
                width={300}
                height={300}
                alt={project.title}
                className="h-68 w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
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
