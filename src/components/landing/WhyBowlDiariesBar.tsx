import { Container } from "@/components/ui/Container";

export function WhyBowlDiariesBar() {
  const items = [
    { label: "Fresh Ingredients", emoji: "🥬" },
    { label: "Global Flavours", emoji: "🍛" },
    { label: "Healthy Comfort Food", emoji: "🥗" },
  ];

  return (
    <section className="w-full bg-[#053f40] py-7 text-white">
      <Container className="text-center">
        <h2 className="ds-h2 text-white">Why Bowl Diaries?</h2>

        <div className="mt-6 flex flex-col items-center justify-between gap-6 md:flex-row md:gap-10">
          {items.map((it) => (
            <div key={it.label} className="flex items-center gap-3">
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

