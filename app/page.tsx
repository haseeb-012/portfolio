import Container from "@/components/Container";
import Heading from "@/components/heading";
import LandingBlogs from "@/components/Landing-Blog";
import Projects from "@/components/Projects";
import SubHeading from "@/components/subheading";
import { projects } from "@/constant/project";



export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
        <Heading>Haseeb Sajjad</Heading>
        <SubHeading>
          A full‑stack developer builds both the user interface (frontend) and
          the server/database (backend).
        </SubHeading>
        <Projects projects={projects.slice(0, 3)} />
        <LandingBlogs />
      </Container>
    </div>
  );
}
