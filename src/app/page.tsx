import { FloatingNavDemo } from "@/components/floating-nav-demo";
import { HeroSection } from "@/components/hero-section";
import { ProblemSolutionSection } from "@/components/problem-solution-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { FeaturesSection } from "@/components/features-section";
import { ComparisonSection } from "@/components/comparison-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      <SmoothCursor />
      <FloatingNavDemo />
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ComparisonSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
