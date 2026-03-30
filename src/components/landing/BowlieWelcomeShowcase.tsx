import Image from "next/image";

import { CartIcon } from "@/components/icons/CartIcon";
import { PrimaryButtonLink } from "@/components/ui/ButtonLink";
import { CtaButtonLink } from "@/components/ui/CtaButtonLink";
import { FullBleedBackgroundSection } from "@/components/ui/FullBleedBackgroundSection";

export function BowlieWelcomeShowcase() {
  return (
    <section className="bg-[#fbf3df] pb-10 md:pb-14">
      <div className="grid">
        {/* Bowlie row */}
        <div className="relative overflow-visible">
          <FullBleedBackgroundSection
            as="div"
            backgroundSrc="/bg_mascout.png"
            backgroundWrapperClassName="z-0 -top-28"  // adjust -top-10 to taste
            backgroundImageClassName="object-cover"
            contentClassName="relative z-10 mx-auto w-full max-w-6xl px-5 md:px-6"
          >
            <div className="relative grid min-h-[520px] items-center py-0 md:min-h-[560px] md:grid-cols-[minmax(300px,600px)_1fr]">
              {/* Mascot: keep 474:503 proportions, responsive size */}
              <div className="relative mx-auto w-full aspect-[474/503] md:mx-0 md:justify-self-start md:-ml-24 ds-anim-fade-up">
                <Image
                  src="/bowlie_masscout.png"
                  alt="Bowlie mascot"
                  fill
                  priority={false}
                  sizes="(min-width: 1024px) 624px, (min-width: 768px) 45vw, 90vw"
                  className="object-contain drop-shadow-[0_26px_40px_rgba(0,0,0,0.18)]"
                />
              </div>

              <div className="relative md:-ml-36 pr-0 md:justify-self-start md:max-w-[980px] md:pr-0 ds-anim-fade-up [animation-delay:80ms]">
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
              </div>

              {/* right-side floating buttons (desktop) */}
              <div className="pointer-events-none absolute bottom-10 right-[-20px] hidden flex-col items-end gap-5 md:flex">
                <div className="pointer-events-auto grid size-12 place-items-center rounded-2xl bg-[#f6c200] shadow-[0_10px_20px_rgba(0,0,0,0.18)]">
                  <Image
                    src="/icon.svg"
                    alt="Call"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                </div>
                <CtaButtonLink
                  href="#menu"
                  variant="floating"
                  className="pointer-events-auto ds-anim-fade-up [animation-delay:140ms]"
                >
                  <CartIcon className="size-5" />
                  Order Now
                </CtaButtonLink>
              </div>
            </div>
          </FullBleedBackgroundSection>
        </div>

        {/* mobile-only bowl between sections */}
        <div className="mx-auto w-full max-w-6xl px-5 pb-4 md:hidden">
          <div className="relative mx-auto w-full max-w-[520px] ds-anim-fade-up">
            <Image
              src="/bowl.png"
              alt="Bowl Diaries bowl"
              width={900}
              height={900}
              className="h-auto w-full drop-shadow-[0_30px_45px_rgba(0,0,0,0.20)]"
            />
          </div>
        </div>

        {/* Welcome row */}
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 pt-2 md:grid-cols-[1fr_1fr] md:items-end md:px-6 md:pt-0 md:-mt-10">
          <div className="ds-anim-fade-up md:relative md:-top-10">
            <div
              className="text-left font-medium leading-none tracking-[0] text-[#F1C400]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(34px, 6.2vw, 54px)",
              }}
            >
              WELCOME TO BOWL DIARIES
            </div>
            <div
              className="mt-4 text-left font-medium italic leading-none tracking-[0] text-[#002B2B]"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(18px, 3.4vw, 26px)",
              }}
            >
              Fresh Food, Crafted With Care
            </div>

            <p
              className="mt-5 max-w-xl whitespace-pre-line text-left font-medium leading-none tracking-[0] text-[#002B2B]"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(18px, 3.4vw, 26px)",
              }}
            >
              Bowl Diaries serves healthy, hygienic, and authentic
              meals crafted with premium ingredients.
              Blending traditional flavors with modern favorites,
              every dish is made fresh to deliver taste, consistency,
              and comfort.
            </p>

            <div className="mt-7">
              <PrimaryButtonLink href="#menu" className="bg-[#0f5a3c] text-white shadow-[0_6px_0_rgba(0,0,0,0.14)]">
                ORDER NOW
              </PrimaryButtonLink>
            </div>
          </div>

          <div className="relative hidden w-full max-w-xl ds-anim-fade-up [animation-delay:80ms] md:block">
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

