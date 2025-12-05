import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/index";
// import { ViewTransitions } from "next-view-transitions";
import Footer from '../components/navbar/footer';
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

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
    // <ViewTransitions>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-neutral-100 antialiased dark:bg-neutral-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <Toaster position="top-center" />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        
      </body>
    </html>
    // </ViewTransitions>
  );
}
