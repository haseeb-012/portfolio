"use client";
import React from "react";
import { motion } from "motion/react";

function SectionHeading({
  as: Tag = "h2",
  children,
  delay = 0.2,
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
      <Tag className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
        {children}
      </Tag>
    </motion.div>
  );
}

export default SectionHeading;
