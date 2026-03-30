import { CtaButtonLink } from "@/components/ui/CtaButtonLink";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden scroll-mt-16">
      <div className="relative h-[calc(100vh-5rem)] w-full bg-[url('/hero_section.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-9 px-5 md:bottom-10">
          <CtaButtonLink href="#menu" variant="hero">
            Order Now
          </CtaButtonLink>
          <CtaButtonLink href="#menu" variant="hero">
            Explore Menu
          </CtaButtonLink>
        </div>
      </div>
    </section>
  );
}

