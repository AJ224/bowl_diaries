import { BowlieWelcomeShowcase } from "@/components/landing/BowlieWelcomeShowcase";
import { ExploreMenuShowcase } from "@/components/landing/ExploreMenuShowcase";
import { ExcellenceShowcase } from "@/components/landing/ExcellenceShowcase";
import { Footer } from "@/components/landing/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { HeroPromoBar } from "@/components/landing/HeroPromoBar";
import { Navbar } from "@/components/landing/Navbar";
import { WhyBowlDiariesBar } from "@/components/landing/WhyBowlDiariesBar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <HeroSection />
        <HeroPromoBar />
        <BowlieWelcomeShowcase />
        <WhyBowlDiariesBar />
        <ExploreMenuShowcase />
        <ExcellenceShowcase />
      </main>

      <Footer />
    </div>
  );
}
