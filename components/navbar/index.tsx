"use client";
import React, { useState } from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValueEvent, useScroll, useTransform } from "motion/react";

function Navbar() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const y = useTransform(scrollY, [ 0, 100 ], [0,10]);
  const width = useTransform(scrollY, [ 0, 100 ], [ "100%", "50%" ]);
  const opacity = useTransform(scrollY, [ 0, 100 ], [ 1, 0.8 ]);


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
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Project",
      href: "/project",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];
  return (
    <Container>
      <motion.nav
        style={{
          boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
          width,
          y,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className="item-cennter fixed inset-x-0 top-0 z-50 mx-auto flex max-w-4xl justify-between rounded-full bg-white px-3 py-2 dark:bg-neutral-900"
      >
        <Link href={"/"}>
          <Image
            className="h-10 w-10 rounded-full"
            src={"/avatar.jpg"}
            height="100"
            width={"100"}
            alt="Avatar"
          />
        </Link>

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
