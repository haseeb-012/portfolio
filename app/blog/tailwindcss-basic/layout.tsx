import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Container from "@/components/Container";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Freelancer Portfolio website",
  description:
    "A perfect website template that showcases your skill, minimal and smooth microinteractions, perfect for developers and designers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container className="min-h-screen px-10 md:mt-20 md:mb-10">
      {/* Wrap MDX content in prose for typography */}
      <div className="prose dark:prose-invert mx-auto">{children}</div>
    </Container>
  );
}
