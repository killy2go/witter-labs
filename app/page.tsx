// app/page.tsx
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { WhyWitter } from "@/sections/WhyWitter";
import { Projects } from "@/sections/Projects";
import { Pricing } from "@/sections/Pricing";
import { TechStack } from "@/sections/TechStack";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyWitter />
      <Projects />
      <Pricing />
      <TechStack />
      <About />
      <Contact />
    </>
  );
}
