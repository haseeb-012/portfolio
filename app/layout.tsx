import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/index";
import { ViewTransitions } from "next-view-transitions";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Freelancer Portfolio website",
  description:
    "A perfect website template that showcase your skill, minimal and smooth  microinterations, perfect for developer and designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-100 antialiased dark:bg-neutral-700`}
      >
        <Navbar />
        {children}
      </body>
      </html>
      </ViewTransitions>
  );
}
