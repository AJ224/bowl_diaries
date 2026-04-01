 "use client";

import Image from "next/image";
import { useEffect, useId, useMemo, useRef, useState } from "react";

import { CartIcon } from "@/components/icons/CartIcon";
import urls from "@/config/urls.json";
import { Container } from "@/components/ui/Container";
import { CtaButtonLink } from "@/components/ui/CtaButtonLink";

export function Navbar() {
  const links = useMemo<Array<{ label: string; href: string }>>(
    () => [
      { label: "Home", href: "#top" },
      { label: "Explore Menu", href: urls.exploreMenuUrl ?? "#menu" },
      { label: "About Us", href: "#bowlie" },
      { label: "Our Story", href: "#story" },
      { label: "Contact Us", href: "#contact" },
    ],
    [],
  );

  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onPointerDown(e: PointerEvent) {
      if (!rootRef.current) return;
      if (rootRef.current.contains(e.target as Node)) return;
      setOpen(false);
    }
    if (!open) return;
    globalThis.addEventListener("keydown", onKeyDown);
    globalThis.addEventListener("pointerdown", onPointerDown);
    return () => {
      globalThis.removeEventListener("keydown", onKeyDown);
      globalThis.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header className="border-b border-zinc-900/10 bg-[#fbf3df]">
      <Container className="relative grid h-20 grid-cols-[auto_1fr_auto] items-center">
        <a href="#top" className="inline-flex items-center gap-3 ds-anim-fade-in">
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

        <nav className="hidden items-center justify-center gap-12 text-base font-semibold text-zinc-900/80 md:flex ds-anim-fade-in">
          {links.map((t) => (
            <a key={t.label} href={t.href} className="transition hover:text-zinc-900">
              {t.label}
            </a>
          ))}
        </nav>

        {/* mobile: centered hamburger */}
        <div className="flex items-center justify-end gap-3">
          <div className="hidden md:flex ds-anim-fade-in">
            <CtaButtonLink href={urls.orderNowUrl} variant="navbar">
              <CartIcon className="size-5" />
              Order Now
            </CtaButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex size-11 items-center justify-center rounded-md border border-zinc-900/10 bg-white/70 text-zinc-900 md:hidden"
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls={panelId}
          >
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className="block h-0.5 w-5 rounded bg-zinc-900/80" />
              <span className="block h-0.5 w-5 rounded bg-zinc-900/80" />
              <span className="block h-0.5 w-5 rounded bg-zinc-900/80" />
            </span>
            <span className="sr-only">Menu</span>
          </button>
        </div>

        {/* mobile side drawer */}
        {open ? (
          <div className="fixed inset-0 z-[60] md:hidden">
            <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px]" />
            <dialog
              ref={(node) => {
                rootRef.current = node;
                if (node && !node.open) node.showModal();
              }}
              id={panelId}
              aria-label="Menu"
              className="m-0 ml-auto h-full w-[min(340px,86vw)] border-0 bg-[#fbf3df] p-0 shadow-[0_24px_60px_rgba(0,0,0,0.25)] backdrop:bg-transparent"
              onClose={() => setOpen(false)}
            >
              <div className="flex items-center justify-between border-b border-zinc-900/10 px-5 py-4">
                <span className="text-sm font-extrabold tracking-wide text-[#002B2B]">
                  Bowl Diaries
                </span>
                <button
                  type="button"
                  onClick={() => rootRef.current?.close()}
                  className="inline-flex size-10 items-center justify-center rounded-xl border border-zinc-900/10 bg-white/70 text-zinc-900"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <nav className="px-3 py-3">
                {links.map((t) => (
                  <a
                    key={t.label}
                    href={t.href}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-[16px] font-semibold text-[#002B2B] transition hover:bg-zinc-900/5 active:bg-zinc-900/10"
                    onClick={() => rootRef.current?.close()}
                  >
                    <span>{t.label}</span>
                    <span className="text-zinc-500">›</span>
                  </a>
                ))}
              </nav>
            </dialog>
          </div>
        ) : null}
      </Container>
    </header>
  );
}

