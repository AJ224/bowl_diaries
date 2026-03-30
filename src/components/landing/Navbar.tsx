import Image from "next/image";

import { CartIcon } from "@/components/icons/CartIcon";
import { Container } from "@/components/ui/Container";
import { CtaButtonLink } from "@/components/ui/CtaButtonLink";

export function Navbar() {
  const links: Array<{ label: string; href: string }> = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="border-b border-zinc-900/10 bg-[#fbf3df]">
      <Container className="grid h-20 grid-cols-[auto_1fr_auto] items-center">
        <a href="#top" className="inline-flex items-center gap-3">
          <Image
            src="/LOGO_1 1.png"
            alt="Bowl Diaries"
            width={56}
            height={56}
            priority
            className="rounded-full"
          />
          <span className="sr-only">Bowl Diaries</span>
        </a>

        <nav className="hidden items-center justify-center gap-12 text-base font-semibold text-zinc-900/80 md:flex">
          {links.map((t) => (
            <a key={t.label} href={t.href} className="transition hover:text-zinc-900">
              {t.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <CtaButtonLink href="#menu" variant="navbar" className="hidden md:inline-flex">
            <CartIcon className="size-5" />
            Order Now
          </CtaButtonLink>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md border border-zinc-900/10 bg-white/70 text-zinc-900 md:hidden"
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-5 rounded bg-zinc-900/80" />
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </Container>
    </header>
  );
}

