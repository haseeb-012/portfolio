import Container from "@/components/Container";
import Heading from "@/components/heading";
import Projects from "@/components/Projects";
import SubHeading from "@/components/subheading";
import { projects } from "@/constant/project";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <Heading>Projects</Heading>
        <SubHeading>
          A full‑stack developer builds both the user interface (frontend) and
          the server/database (backend).
        </SubHeading>
        <Projects />
      </Container>
    </div>
  );
}
