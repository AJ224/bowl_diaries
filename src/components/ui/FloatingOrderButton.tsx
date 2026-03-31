"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";

import { CartIcon } from "@/components/icons/CartIcon";
import urls from "@/config/urls.json";

type MenuItem = {
  key: string;
  label: string;
  href: string;
  subLabel?: string;
  icon: React.ReactNode;
  external?: boolean;
};

function BrandMark({
  label,
  className,
}: Readonly<{
  label: string;
  className: string;
}>) {
  return (
    <span
      className={`grid size-8 shrink-0 place-items-center rounded-lg text-[13px] font-extrabold ${className}`}
      aria-hidden="true"
    >
      {label}
    </span>
  );
}

export function FloatingOrderButton() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement | null>(null);

  const items = useMemo<MenuItem[]>(() => {
    const list: MenuItem[] = [
      {
        key: "call",
        label: "Call",
        subLabel: "Talk to us",
        href: urls.callUrl ?? "",
        icon: <IconPhone className="size-4 text-[#002B2B]" />,
      },
      {
        key: "location",
        label: "Location",
        subLabel: "Get directions",
        href: urls.locationUrl ?? "",
        icon: <IconPin className="size-4 text-[#002B2B]" />,
      },
      {
        key: "takeaway",
        label: "Takeaway",
        subLabel: "Order directly",
        href: urls.takeawayUrl ?? urls.orderNowUrl ?? "",
        icon: <CartIcon className="size-4 text-[#002B2B]" />,
      },
      {
        key: "zomato",
        label: "Zomato",
        href: urls.zomatoUrl ?? "",
        icon: <BrandMark label="Z" className="bg-[#E23744] text-white" />,
        external: true,
      },
      {
        key: "swiggy",
        label: "Swiggy",
        href: urls.swiggyUrl ?? "",
        icon: <BrandMark label="S" className="bg-[#FC8019] text-white" />,
        external: true,
      },
      {
        key: "petpooja",
        label: "Petpooja",
        href: urls.petpoojaUrl ?? "",
        icon: <BrandMark label="P" className="bg-[#00AEEF] text-white" />,
        external: true,
      },
    ];

    return list.filter((i) => (i.href ?? "").trim().length > 0);
  }, []);

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

  if (items.length === 0) return null;

  return (
    <div
      ref={rootRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
    >
      {open ? (
        <div
          id={panelId}
          role="menu"
          aria-label="Order options"
          className="w-[min(320px,calc(100vw-3rem))] overflow-hidden rounded-2xl border border-zinc-900/10 bg-white/95 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur"
        >
          <div className="px-4 pb-2 pt-4">
            <div className="text-sm font-extrabold tracking-wide text-[#002B2B]">
              Order options
            </div>
            <div className="mt-1 text-xs font-semibold text-zinc-600">
              Choose where you want to order from
            </div>
          </div>

          <div className="grid gap-1 px-2 pb-2">
            {items.map((item) => {
              const isExternal =
                item.external &&
                !item.href.startsWith("#") &&
                !item.href.startsWith("tel:");
              return (
                <a
                  key={item.key}
                  role="menuitem"
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-zinc-900/5 active:bg-zinc-900/10"
                  onClick={() => setOpen(false)}
                >
                  <span className="grid size-9 place-items-center rounded-xl bg-zinc-900/5 text-[#002B2B]">
                    {item.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-extrabold text-[#002B2B]">
                      {item.label}
                    </span>
                    {item.subLabel ? (
                      <span className="block truncate text-xs font-semibold text-zinc-600">
                        {item.subLabel}
                      </span>
                    ) : null}
                  </span>
                  <span className="ml-auto text-zinc-400 transition group-hover:text-zinc-700">
                    ›
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      ) : null}

      {/* FAB */}
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-3 rounded-2xl border border-zinc-900/10 bg-white/55 px-5 py-4 text-[#002B2B] shadow-[0_16px_30px_rgba(0,0,0,0.18)] backdrop-blur transition hover:bg-white/65 active:translate-y-[1px]"
      >
        <span className="grid size-9 place-items-center rounded-xl bg-zinc-900/5">
          <CartIcon className="size-5" />
        </span>
        <span className="text-sm font-extrabold tracking-wide">
          {open ? "Close" : "Order Now"}
        </span>
      </button>
    </div>
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

