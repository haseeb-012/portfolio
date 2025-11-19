import Container from "@/components/Container";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Haseeb Sajjad
        </h1>
        <p className="text-secondary  max-w-lg pt-4 text-sm md:text-base">
          A full‑stack developer builds both the user interface (frontend) and
          the server/database (backend).
        </p>
        <Projects />
      </Container>
    </div>
  );
}
