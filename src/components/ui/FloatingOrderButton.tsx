"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";

import { CartIcon } from "@/components/icons/CartIcon";
import buttonUrls from "@/config/buttonUrls.json";

type MenuItem = Readonly<{
  key: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}>;

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

function isDisabledHref(href: string) {
  const trimmed = href.trim();
  return trimmed.length === 0 || trimmed === "#";
}

export function FloatingOrderButton() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement | null>(null);

  const items: MenuItem[] = useMemo(() => {
    const next: MenuItem[] = [
      {
        key: "call",
        label: "Call",
        href: buttonUrls.orderMenu.call,
        icon: <IconPhone className="size-5" />,
      },
      {
        key: "location",
        label: "Location",
        href: buttonUrls.orderMenu.location,
        icon: <IconPin className="size-5" />,
      },
      {
        key: "takeaway",
        label: "Takeaway",
        href: buttonUrls.orderMenu.takeaway,
        icon: <IconBag className="size-5" />,
      },
      {
        key: "zomato",
        label: "Zomato",
        href: buttonUrls.orderMenu.zomato,
        icon: <BrandBadge text="Z" className="bg-[#E23744] text-white" />,
      },
      {
        key: "swiggy",
        label: "Swiggy",
        href: buttonUrls.orderMenu.swiggy,
        icon: <BrandBadge text="S" className="bg-[#FC8019] text-white" />,
      },
      {
        key: "petpooja",
        label: "Petpooja",
        href: buttonUrls.orderMenu.petpooja,
        icon: <BrandBadge text="P" className="bg-[#0f5a3c] text-white" />,
      },
    ];

    return next.filter((i) => !isDisabledHref(i.href));
  }, []);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (!open) return;
      const el = rootRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) setOpen(false);
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    globalThis.addEventListener("pointerdown", onPointerDown);
    globalThis.addEventListener("keydown", onKeyDown);
    return () => {
      globalThis.removeEventListener("pointerdown", onPointerDown);
      globalThis.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (items.length === 0) return null;

  return (
    <div
      ref={rootRef}
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 md:bottom-7 md:right-7"
    >
      {/* menu */}
      <div
        id={panelId}
        className={`w-[220px] overflow-hidden rounded-2xl border border-zinc-900/10 bg-white/90 shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur transition md:w-[240px] ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
        role="menu"
        aria-hidden={!open}
      >
        <div className="px-4 pt-4 pb-2 text-sm font-extrabold text-zinc-900">
          Order options
        </div>
        <div className="px-2 pb-2">
          {items.map((item) => {
            const external = isExternalHref(item.href);

            return (
              <a
                key={item.key}
                href={item.href}
                role="menuitem"
                tabIndex={open ? 0 : -1}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-semibold text-zinc-900 transition hover:bg-zinc-900/5 active:bg-zinc-900/10"
              >
                <span
                  className="inline-flex size-9 items-center justify-center rounded-xl bg-zinc-900/5"
                >
                  {item.icon}
                </span>
                <span className="flex-1">{item.label}</span>
                {external ? (
                  <IconArrowUpRight className="size-4 text-zinc-500" />
                ) : null}
              </a>
            );
          })}
        </div>
      </div>

      {/* FAB */}
      <button
        type="button"
        aria-haspopup="menu"
        aria-controls={panelId}
        aria-expanded={open}
        aria-label="Order"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-3 rounded-2xl bg-[#f6c200] px-5 py-3.5 text-base font-extrabold text-[#002B2B] shadow-[0_14px_26px_rgba(0,0,0,0.22)] transition hover:brightness-95 active:translate-y-[1px] md:gap-0 md:px-4 md:py-4"
      >
        <CartIcon className="size-5" />
        <span className="md:hidden">Order</span>
      </button>
    </div>
  );
}

function BrandBadge({
  text,
  className,
}: Readonly<{ text: string; className: string }>) {
  return (
    <span
      className={`grid size-6 place-items-center rounded-full text-[13px] font-black leading-none ${className}`}
      aria-hidden="true"
    >
      {text}
    </span>
  );
}

function IconPhone(props: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M22 16.9v2a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h2a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 10.5a16 16 0 0 0 5.5 5.5l1.1-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9Z" />
    </svg>
  );
}

function IconPin(props: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function IconBag(props: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M6 7h12l-1 14H7L6 7Z" />
      <path d="M9 7a3 3 0 0 1 6 0" />
    </svg>
  );
}

function IconArrowUpRight(props: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

