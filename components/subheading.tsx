"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

function SubHeading({
  as: Tag = "h2",
  children,
  delay=0.2,
}: {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  delay?: number;
}) {
  return (
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
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      <Tag
        className={cn(
          "text-secondary max-w-lg px-4 pt-4 text-sm md:text-sm dark:text-shadow-gray-400",
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
}

export default SubHeading;
