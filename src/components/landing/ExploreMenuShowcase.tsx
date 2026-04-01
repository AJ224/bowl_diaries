import Image from "next/image";

import urls from "@/config/urls.json";
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
      id="menu"
      className="bg-[#fbf3df]"
      backgroundSrc="/exploremenubg.png"
      backgroundWrapperClassName="z-0 -top-14"  // adjust -top-10 to taste
      backgroundImageClassName="object-cover object-[20%_40%]"
      contentClassName="relative z-10 pt-20 pb-6 md:pt-12 md:pb-12"
    >
      <Container className="max-w-none">
        <h2 className="text-center font-black tracking-[0.08em] text-zinc-900 text-2xl md:text-4xl ds-anim-fade-up">
          EXPLORE OUR DELICIOUS MENU
        </h2>

        <div className="relative mt-10 md:px-14">
          {/* arrows (desktop) */}
          <button
            type="button"
            aria-label="Previous"
            className="absolute left-0 top-1/2 hidden size-12 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f6c200] text-xl text-zinc-900 shadow-[0_10px_20px_rgba(0,0,0,0.15)] md:flex"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next"
            className="absolute right-0 top-1/2 hidden size-12 translate-x-2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f6c200] text-xl text-zinc-900 shadow-[0_10px_20px_rgba(0,0,0,0.15)] md:flex"
          >
            ›
          </button>

          {/* scroller on mobile, grid on lg+ */}
          <div className="-mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:grid lg:snap-none lg:overflow-visible lg:px-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {cards.map((c, idx) => (
              <div
                key={c.title}
                className="snap-center mx-auto flex w-[min(86vw,420px)] shrink-0 flex-col gap-[10px] rounded-[20px] bg-[#f7dd9b] p-[28px] shadow-[0_14px_0_rgba(0,0,0,0.08)] ds-anim-fade-up lg:mx-0 lg:min-h-[445px] lg:w-auto lg:shrink"
                style={{ animationDelay: `${80 + idx * 70}ms` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-zinc-900">
                  <Image
                    src={c.imageSrc}
                    alt={c.title}
                    fill
                    sizes="(min-width: 1024px) 320px, 86vw"
                    className="object-cover"
                  />
                </div>
                <div className="text-center ds-grift-32 text-[#002B2B]">{c.title}</div>
                <CtaButtonLink href={urls.orderNowUrl} variant="menuCard">
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

