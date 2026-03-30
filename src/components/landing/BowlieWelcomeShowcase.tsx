import Image from "next/image";

import { CartIcon } from "@/components/icons/CartIcon";
import { PrimaryButtonLink } from "@/components/ui/ButtonLink";
import { CtaButtonLink } from "@/components/ui/CtaButtonLink";
import { FullBleedBackgroundSection } from "@/components/ui/FullBleedBackgroundSection";

export function BowlieWelcomeShowcase() {
  return (
    <section className="bg-[#fbf3df] pt-0 pb-10 md:pb-14">
      <div className="grid gap-12">
        {/* Bowlie row */}
        <div className="relative overflow-visible">
          <FullBleedBackgroundSection
            as="div"
            backgroundSrc="/bg_mascout.png"
            backgroundWrapperClassName="-z-10"
            backgroundImageClassName="object-cover"
            contentClassName="mx-auto w-full max-w-6xl px-5 md:px-6"
          >
            <div className="grid min-h-[520px] items-center gap-10 py-0 md:min-h-[560px] md:grid-cols-[minmax(320px,624px)_1fr] md:gap-12">
              {/* Mascot: keep 474:503 proportions, responsive size */}
              <div className="relative mx-auto w-full max-w-[624px] aspect-[474/503] md:mx-0 md:justify-self-start">
                <Image
                  src="/bowlie_masscout.png"
                  alt="Bowlie mascot"
                  fill
                  priority={false}
                  sizes="(min-width: 1024px) 624px, (min-width: 768px) 45vw, 90vw"
                  className="object-contain drop-shadow-[0_26px_40px_rgba(0,0,0,0.18)]"
                />
              </div>

              <div className="relative pr-0 md:pr-28 md:max-w-[655px] md:justify-self-start">
                <div className="ds-h2 text-[#002B2B]">Hey! I&apos;m Bowlie,</div>
                <div className="mt-4 ds-baloo-26 text-[#002B2B]">
                  Every Bowl Tells A Story!
                </div>
                <div className="mt-3 ds-grift-26 text-[#002B2B]">
                  The happy face of{" "}
                  <span className="font-medium italic">BOWL DIARIES</span>.
                </div>

                <p className="mt-5 ds-grift-26 text-[#002B2B]">
                  I&apos;m here to bring you bowls full of flavor, freshness, and happiness. Every bowl on this menu is carefully picked to give you a delicious and joyful experience.
                </p>
                <p className="mt-4 ds-grift-26 text-[#002B2B]">
                  So go ahead, explore the menu and find your perfect bowl!
                </p>

                {/* right-side floating buttons (desktop) */}
                <div className="pointer-events-none absolute right-0 top-[60%] hidden -translate-y-1/2 flex-col items-end gap-5 md:flex">
                  <div className="pointer-events-auto grid size-12 place-items-center rounded-2xl bg-[#f6c200] shadow-[0_10px_20px_rgba(0,0,0,0.18)]">
                    <span className="text-lg font-black text-[#002B2B]">☎</span>
                  </div>
                  <CtaButtonLink
                    href="#menu"
                    variant="floating"
                    className="pointer-events-auto"
                  >
                    <CartIcon className="size-5" />
                    Order Now
                  </CtaButtonLink>
                </div>
              </div>
            </div>
          </FullBleedBackgroundSection>
        </div>

        {/* Welcome row */}
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 md:grid-cols-[1fr_1fr] md:items-end md:px-6">
          <div>
            <div className="text-sm font-extrabold tracking-[0.22em] text-[#f6c200]">
              WELCOME TO BOWL DIARIES
            </div>
            <div className="mt-3 text-lg font-semibold italic text-zinc-900">
              Fresh Food, Crafted With Care
            </div>

            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-800">
              Bowl Diaries serves healthy, hygienic, and authentic meals crafted
              with premium ingredients. Blending traditional flavors with modern
              favorites, every dish is made fresh to deliver taste, consistency,
              and comfort.
            </p>

            <div className="mt-7">
              <PrimaryButtonLink href="#menu" className="bg-[#0f5a3c] text-white shadow-[0_6px_0_rgba(0,0,0,0.14)]">
                ORDER NOW
              </PrimaryButtonLink>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <Image
              src="/bowl.png"
              alt="Bowl Diaries bowl"
              width={900}
              height={900}
              className="h-auto w-full drop-shadow-[0_30px_45px_rgba(0,0,0,0.20)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

