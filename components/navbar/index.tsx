"use client";

import React, { useState } from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { ModeToggle } from "../darkmode";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Desktop-only animation
  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY, [0, 100], ["59%", "50%"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const navitems = [
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Project", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <Container>
      {/* Main Navbar */}
      <motion.nav
        style={{
          // Desktop only
          boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
          width:
            typeof window !== "undefined" && window.innerWidth >= 768
              ? width
              : "100%",
          y,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className="dark:text-primary-foreground /* Mobile override */ inset-x-0 top-0 z-50 mx-auto flex w-full max-w-5xl items-center justify-between rounded-none bg-white px-3 py-2 backdrop-blur-xl md:fixed md:w-auto md:rounded-full md:py-2 dark:bg-neutral-950"
      >
        {/* Logo */}
        <Link href="/">
          <Image
            className="h-10 w-10 rounded-full"
            src="/avatar.jpg"
            height="100"
            width="100"
            alt="Avatar"
          />
        </Link>

        {/* Desktop + Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Desktop Nav */}
          <div className="hidden items-center md:flex">
            <ModeToggle />

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
                    className="absolute inset-0 h-full w-full rounded-full bg-neutral-100 dark:bg-neutral-800"
                  ></motion.span>
                )}
                <span className="relative z-10">{item.title}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center">
            {mobileOpen && <ModeToggle />}
            <button
              className="rounded-md p-2 md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="top-14 right-0 left-0 z-40 w-full bg-white p-4 shadow-md md:hidden dark:bg-neutral-950">
          <div className="flex flex-col gap-3">
            {navitems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
}

export default Navbar;
