import Container from "@/components/Container";
import LandingBlogs from "@/components/Landing-Blog";
import Projects from "@/components/Projects";
import { Collage } from "../../components/collage";
import TimeLine from "@/components/TimeLine";
import Heading from "@/components/heading";
import SubHeading from "@/components/subheading";
import SectionHeading from "@/components/section-heading";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <Heading>About Me</Heading>
        <SubHeading>
          A full‑stack developer builds both the user interface (frontend) and
          the server/database (backend).
        </SubHeading>
        <p className="text-secondary max-w-lg pt-4 px-4 text-sm md:text-sm">
          I love to travel and expolre new places.I'm a big fan of nature and
          adventaure. I'm also a big fan of technology and innovation.
        </p>
        <Collage />
        <SectionHeading className="px-6">
          Here's a timeline of my life achievements.
        </SectionHeading>
        <TimeLine />
      </Container>
    </div>
  );
}
