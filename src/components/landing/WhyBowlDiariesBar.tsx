import { Container } from "@/components/ui/Container";

export function WhyBowlDiariesBar() {
  const items = [
    { label: "Fresh Ingredients", emoji: "🥬" },
    { label: "Global Flavours", emoji: "🍛" },
    { label: "Healthy Comfort Food", emoji: "🥗" },
  ];

  return (
    <section className="w-full bg-[#002B2B] py-7 text-white">
      <Container className="text-center">
        <h2 className="ds-h2 text-white ds-anim-fade-up">Why Bowl Diaries?</h2>

        {/* mobile marquee */}
        <div className="mt-6 ds-marquee md:hidden">
          <div className="ds-marquee-track gap-8 pr-8">
            {[...items, ...items].map((it, idx) => (
              <div key={`${it.label}-${idx}`} className="flex items-center gap-3">
                <div className="grid h-[58.9px] w-[58.9px] place-items-center rounded-full bg-[#f6c200] text-2xl">
                  <span aria-hidden="true">{it.emoji}</span>
                </div>
                <div className="ds-cta whitespace-nowrap text-white/95">
                  {it.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* desktop/tablet layout */}
        <div className="mt-6 hidden flex-wrap items-center justify-center gap-6 md:flex md:flex-row md:justify-between md:gap-10">
          {items.map((it) => (
            <div key={it.label} className="flex items-center gap-3 ds-anim-fade-up">
              <div className="grid h-[58.9px] w-[58.9px] place-items-center rounded-full bg-[#f6c200] text-2xl">
                <span aria-hidden="true">{it.emoji}</span>
              </div>
              <div className="ds-cta text-white/95">{it.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

