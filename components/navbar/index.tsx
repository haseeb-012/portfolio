"use client";
import React, { useState } from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

function Navbar() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  const navitems = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Project",
      href: "/project",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];
  return (
    <Container>
      <motion.nav
        animate={{
          boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
          width: scrolled ? "50%" : "100%",
          y: scrolled ? 10 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className="item-cennter fixed inset-x-0 top-0 z-50 mx-auto flex max-w-4xl justify-between rounded-full bg-white px-3 py-2 dark:bg-neutral-900"
      >
        <Image
          className="h-10 w-10 rounded-full"
          src={"/avatar.jpg"}
          height="100"
          width={"100"}
          alt="Avatar"
        />

        <div className="flex items-center">
          {navitems.map((item, index) => (
            <Link
              className="relative px-2 py-1 text-sm"
              href={item.href}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <motion.span
                  layoutId="hovered-span"
                  className="rounde-full absolute inset-0 h-full w-full bg-neutral-100 dark:bg-neutral-900"
                ></motion.span>
              )}
              {<span className="relative z-10">{item.title}</span>}
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
}

export default Navbar;
