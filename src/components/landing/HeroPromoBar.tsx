import { CartIcon } from "@/components/icons/CartIcon";
import { CtaButtonLink } from "@/components/ui/CtaButtonLink";

export function HeroPromoBar() {
  return (
    <section className="w-full bg-[#2f3f45] text-white">
      <div className="flex w-full items-stretch">
        <div className="flex flex-1 items-center">
          <div
            className="mx-auto w-full max-w-6xl px-5 py-7 text-[22px] font-medium leading-[1] tracking-[0] text-white/85 md:px-6 md:py-9"
            style={{
              fontFamily:
                "Grift, var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif",
            }}
          >
            At Bowl Diaries, we believe that a single bowl can deliver a
            complete and fulfilling meal. Whether you&apos;re looking for something
            light, indulgent, or wholesome, our offerings are designed to match
            every mood and lifestyle.
          </div>
        </div>

        <CtaButtonLink href="#menu" variant="promoBar">
          <CartIcon className="size-6 md:size-7" />
          Order Now
        </CtaButtonLink>
      </div>
    </section>
  );
}