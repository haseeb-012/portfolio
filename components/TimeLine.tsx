"use client";
import { motion, useInView } from "motion/react";
import { div } from "motion/react-client";
import React, { useRef } from "react";

import { cn } from "@/lib/utils";

type Data = {
  title: string;
  content: {
    title: string;
    description?: string;
  }[];
}[];

function TimeLine() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const data: Data = [
    {
      title: "2025",
      content: [
        {
          title: "complete my bacholar Degree in Computer Science",
          description:
            "complete the degree from MUST(Mirpur University of Science of Technology.",
        },
      ],
    },
    {
      title: "2024",
      content: [
        {
          title: "complete my bacholar Degree in Computer Science",
          description:
            "complete the degree from MUST(Mirpur University of Science of Technology.",
        },
      ],
    },
    {
      title: "2023",
      content: [
        {
          title: "complete my bacholar Degree in Computer Science",
          description:
            "complete the degree from MUST(Mirpur University of Science of Technology.",
        },
      ],
    },
    {
      title: "2022",
      content: [
        {
          title: "complete my bacholar Degree in Computer Science",
          description:
            "complete the degree from MUST(Mirpur University of Science of Technology.",
        },
      ],
    },
    {
      title: "2021",
      content: [
        {
          title: "complete my bacholar Degree in Computer Science",
          description:
            "complete the degree from MUST(Mirpur University of Science of Technology.",
        },
        {
          title: "complete my bacholar Degree in Computer Science",
          description:
            "complete the degree from MUST(Mirpur University of Science of Technology.",
        },
      ],
    },
    {
      title: "2020",
      content: [
        {
          title: "Complete my bacholar Degree in Computer Science",
          description:
            "complete the degree from MUST(Mirpur University of Science of Technology.",
        },
      ],
    },
  ];
  return (
    <div ref={ref} className="py-10">
      {data.map((year, idx) => (
        <div key={idx} className="mb-4" content="px-4 py-1">
          <motion.h2
            animate={{
              filter: isInView ? "blur(0px)" : "blur(10px)",
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.1 * idx,
            }}
            className="shadow-aceternity mb-2 w-fit rounded-md px-2 py-0.5 font-bold text-black"
          >
            {year.title}
          </motion.h2>
          <div className="flex flex-col gap-4">
            {year.content.map((item, index) => (
              <div className="pl-4" key={index}>
                <Step isInView={isInView} index={index}>
                  <motion.h3
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.2 * index,
                    }}
                    className="text-neutral-600"
                  >
                    {item.title}
                  </motion.h3>
                </Step>
                {item.description && (
                  <motion.p
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.3 * index,
                    }}
                    className="pt-1 pl-6 text-sm text-neutral-400"
                  >
                    {item.description}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const Step = ({
  className,
  children,
  isInView,
  index,
}: {
  className?: string;
  children?: React.ReactNode;
  isInView: boolean;
  index: number;
}) => {
  return (
    <motion.div
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -10,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.2 * index,
      }}
      className={cn("flex items-start gap-2", className)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="icon icon-tabler icons-tabler-filled icon-tabler-circle-check mt-1 h-4 w-4 text-neutral-500"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
      </svg>
      {children}
    </motion.div>
  );
};

export default TimeLine;
