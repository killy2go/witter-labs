// app/(marketing)/page.tsx
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { WhyWitter } from "@/sections/WhyWitter";
import { Projects } from "@/sections/Projects";
import { Pricing } from "@/sections/Pricing";
import { TechStack } from "@/sections/TechStack";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";

export default function MarketingPage() {
  return (
    <>
      <span id="top" className="block scroll-mt-16" />
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
