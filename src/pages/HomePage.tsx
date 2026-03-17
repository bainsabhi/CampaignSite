import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { AccordionIssues } from "../components/AccordionIssues";
import { About } from "../components/About";
import { CallToAction } from "../components/CallToAction";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen campaign-page">
      <Hero />
      <Stats />
      <AccordionIssues />
      <About />
      <CallToAction />
      <Footer />
    </div>
  );
}
