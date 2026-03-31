import Image from "next/image";

import { Container } from "@/components/ui/Container";

export function ExcellenceShowcase() {
  return (
    <section className="bg-[#fbf3df] py-10 md:py-14">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1fr] md:gap-12">
          {/* visual (same pattern as Welcome section) */}
          <div className="relative mx-auto w-full max-w-[640px] ds-anim-fade-up md:mx-0 md:justify-self-start">
            <div className="relative aspect-[689/644] w-full overflow-hidden">
              <Image
                src="/excellence.png"
                alt=""
                fill
                sizes="(min-width: 768px) 640px, 92vw"
                className="object-cover object-left"
              />
            </div>
          </div>

          <div className="ds-anim-fade-up [animation-delay:80ms]">
            <h2 className="text-left text-[#f6c200] text-[34px] leading-tight md:ds-baloo-54 md:leading-tight">
              EXECELLENCE IN EVERY MEAL
            </h2>

            <p className="mt-4 whitespace-pre-line text-left text-[#002B2B] text-[18px] leading-relaxed md:mt-6 md:ds-grift-26 md:leading-snug">
              Our mission is to create memorable food experiences by
              {"\n"}combining authentic flavors with modern convenience.
            </p>

            <div className="mt-6 text-left text-[#002B2B] text-[18px] leading-relaxed md:mt-8 md:ds-grift-26 md:leading-snug">
              <div className="mb-3 font-semibold">We focus on:</div>
              <ul className="list-disc space-y-2 pl-5 md:space-y-3">
                <li>Ethical sourcing of ingredients</li>
                <li>Maintaining strict hygiene standards</li>
                <li>Delivering fresh and flavorful meals</li>
                <li>Providing quick and reliable service</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

