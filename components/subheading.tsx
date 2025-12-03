"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

function SubHeading({
  as: Tag = "h2",
  children,
}: {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
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
        delay: 0.2,
      }}
    >
      <Tag className={cn("text-secondary dark:text-shadow-gray-400 max-w-lg pt-4 text-sm md:text-sm")}>
        {children}
      </Tag>
    </motion.div>
  );
}

export default SubHeading;
