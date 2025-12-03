import Container from "@/components/Container";
import Heading from "@/components/heading";
import SubHeading from "@/components/subheading";
import ContactForm from "@/components/contactForm";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <Heading>Contact Me</Heading>
        <SubHeading>
          I'm open to freelancing offers.Reach out to me to inquire more about
          my work.
        </SubHeading>
        <ContactForm />
      </Container>
    </div>
  );
}
