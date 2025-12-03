export type Project = {
  title: string;
  src: string;
  href: string;
  description: string;
};

export const projects: Project[] = [
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
