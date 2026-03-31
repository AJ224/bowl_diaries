import { CtaButtonLink } from "@/components/ui/CtaButtonLink";
import urls from "@/config/urls.json";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden scroll-mt-16">
      <div className="relative h-[72vh] min-h-[520px] w-full bg-[url('/hero_section.png')] bg-cover bg-center md:h-[calc(100vh-5rem)] md:min-h-0">
        <div className="absolute inset-0 ds-anim-fade-in bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-6 flex flex-col items-center justify-center gap-4 px-5 sm:flex-row sm:gap-9 md:bottom-10">
          <CtaButtonLink href={urls.orderNowUrl} variant="hero" className="ds-anim-fade-up w-full sm:w-auto">
            Order Now
          </CtaButtonLink>
          <CtaButtonLink
            href={urls.exploreMenuUrl}
            variant="hero"
            className="ds-anim-fade-up [animation-delay:90ms] w-full sm:w-auto"
          >
            Explore Menu
          </CtaButtonLink>
        </div>
      </div>
    </section>
  );
}

