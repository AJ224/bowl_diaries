type CtaButtonLinkProps = Readonly<{
  href: string;
  children: React.ReactNode;
  className?: string;
  /**
   * Visual preset. Use these to keep visuals identical where previously duplicated.
   */
  variant?: "hero" | "menuCard" | "floating" | "promoBar" | "navbar";
}>;

const BASE =
  "inline-flex items-center justify-center bg-[#f6c200] font-extrabold text-zinc-900 transition hover:brightness-95";

const VARIANTS: Record<NonNullable<CtaButtonLinkProps["variant"]>, string> = {
  hero: "min-w-40 rounded-md px-7 py-3.5 text-base shadow-[0_4px_0_rgba(0,0,0,0.25)] active:translate-y-[1px]",
  menuCard:
    "mt-5 flex h-14 w-full rounded-md text-[15px] shadow-[0_6px_0_rgba(0,0,0,0.16)] active:translate-y-[1px]",
  floating:
    "gap-3 rounded-2xl px-6 py-3.5 text-base text-[#002B2B] shadow-[0_10px_20px_rgba(0,0,0,0.18)] active:translate-y-[1px]",
  promoBar:
    "flex w-full items-center justify-center gap-3 px-8 py-8 text-xl active:brightness-90 md:w-[320px] md:py-0",
  navbar:
    "gap-2 rounded-md px-5 py-2.5 text-base shadow-[0_4px_0_rgba(0,0,0,0.18)] active:translate-y-[1px]",
};

export function CtaButtonLink({
  href,
  children,
  className,
  variant = "hero",
}: CtaButtonLinkProps) {
  return (
    <a
      href={href}
      className={`${BASE} ${VARIANTS[variant]} ${className ?? ""}`}
    >
      {children}
    </a>
  );
}

