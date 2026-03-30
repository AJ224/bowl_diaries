import { FullBleedBackgroundSection } from "@/components/ui/FullBleedBackgroundSection";

export function ExcellenceShowcase() {
  return (
    <FullBleedBackgroundSection
      className="bg-[#fbf3df]"
      backgroundSrc="/excellence.png"
      backgroundWrapperClassName="z-0"
      backgroundImageClassName="object-contain object-left"
      minHeight="clamp(520px, 93.5vw, 644px)"
      contentClassName="relative z-10 mx-auto w-full max-w-6xl px-5 md:px-6"
    >
      <div className="grid h-full items-center md:grid-cols-[1fr_560px]">
        <div className="hidden md:block" />

        <div className="w-full max-w-[560px] py-16 pt-[clamp(280px,55vw,360px)] md:py-0 md:pt-0 ds-anim-fade-up">
          <h2 className="ds-baloo-54 text-left text-[#f6c200]">
            EXECELLENCE IN EVERY MEAL
          </h2>

          <p className="mt-6 whitespace-pre-line text-left ds-grift-26 text-[#002B2B]">
            Our mission is to create memorable food experiences by
            {"\n"}combining authentic flavors with modern convenience.
          </p>

          <div className="mt-8 text-left ds-grift-26 text-[#002B2B]">
            <div className="mb-3">We focus on:</div>
            <ul className="space-y-2">
              <li>• Ethical sourcing of ingredients</li>
              <li>• Maintaining strict hygiene standards</li>
              <li>• Delivering fresh and flavorful meals</li>
              <li>• Providing quick and reliable service</li>
            </ul>
          </div>
        </div>
      </div>
    </FullBleedBackgroundSection>
  );
}

