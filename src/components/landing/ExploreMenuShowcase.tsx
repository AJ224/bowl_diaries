import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { CtaButtonLink } from "@/components/ui/CtaButtonLink";
import { FullBleedBackgroundSection } from "@/components/ui/FullBleedBackgroundSection";

type MenuCard = {
  title: string;
  imageSrc: string;
};

export function ExploreMenuShowcase() {
  const cards: MenuCard[] = [
    { title: "RICE BOWLS", imageSrc: "/menu_1.png" },
    { title: "INDIAN BOWLS", imageSrc: "/menu_2.png" },
    { title: "PASTA BOWLS", imageSrc: "/menu_3.png" },
  ];

  return (
    <FullBleedBackgroundSection
      className="bg-[#fbf3df]"
      backgroundSrc="/exploremenubg.png"
      backgroundWrapperClassName="z-0"
      backgroundImageClassName="object-cover object-[20%_40%]"
      minHeight="clamp(560px, 63.2vw, 910px)"
      contentClassName="relative z-10 py-12 md:py-16"
    >
      <Container>
        <h2 className="text-center font-black tracking-[0.08em] text-zinc-900 md:text-3xl">
          EXPLORE OUR DELICIOUS MENU
        </h2>

        <div className="relative mt-10">
          {/* arrows */}
          <button
            type="button"
            aria-label="Previous"
            className="absolute left-0 top-1/2 hidden size-11 -translate-x-6 -translate-y-1/2 items-center justify-center rounded-full bg-[#f6c200] text-zinc-900 shadow-[0_10px_20px_rgba(0,0,0,0.15)] md:flex"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next"
            className="absolute right-0 top-1/2 hidden size-11 translate-x-6 -translate-y-1/2 items-center justify-center rounded-full bg-[#f6c200] text-zinc-900 shadow-[0_10px_20px_rgba(0,0,0,0.15)] md:flex"
          >
            ›
          </button>

          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl bg-[#f7dd9b] p-5 shadow-[0_14px_0_rgba(0,0,0,0.08)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-900">
                  <Image
                    src={c.imageSrc}
                    alt={c.title}
                    fill
                    sizes="(min-width: 768px) 320px, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 text-center text-lg font-black tracking-wide text-zinc-900">
                  {c.title}
                </div>
                <CtaButtonLink href="#menu" variant="menuCard">
                  ORDER NOW
                </CtaButtonLink>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </FullBleedBackgroundSection>
  );
}

