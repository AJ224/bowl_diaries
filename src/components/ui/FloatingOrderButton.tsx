"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Image from "next/image";

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
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const items = useMemo<MenuItem[]>(() => {
    const list: MenuItem[] = [
      {
        key: "website",
        label: "From our website",
        subLabel: "Order directly here",
        href: urls.orderNowUrl ?? "",
        icon: <IconGlobe className="size-4 text-[#002B2B]" />,
      },
      {
        key: "takeaway",
        label: "Takeaway",
        subLabel: "Menu card",
        href: urls.takeawayUrl ?? "",
        icon: <IconReceipt className="size-4 text-[#002B2B]" />,
      },
      {
        key: "directions",
        label: "Get Direction",
        subLabel: "Open Google maps",
        href: urls.locationUrl ?? "",
        icon: <IconPin className="size-4 text-[#002B2B]" />,
        external: true,
      },
      {
        key: "zomato",
        label: "Zomato",
        href: urls.zomatoUrl ?? "",
        icon: (
          <Image
            src="/zomato.webp"
            alt=""
            width={40}
            height={40}
            className="h-full w-full object-contain"
          />
        ),
        external: true,
      },
      {
        key: "swiggy",
        label: "Swiggy",
        href: urls.swiggyUrl ?? "",
        icon: (
          <Image
            src="/swiggy.png"
            alt=""
            width={40}
            height={40}
            className="h-full w-full object-contain"
          />
        ),
        external: true,
      },
    ];

    return list.filter((i) => (i.href ?? "").trim().length > 0);
  }, []);

  useEffect(() => {
    function syncFromHash() {
      if (globalThis.location?.hash === "#order") setOpen(true);
    }
    syncFromHash();
    globalThis.addEventListener("hashchange", syncFromHash);
    return () => globalThis.removeEventListener("hashchange", syncFromHash);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onPointerDown(e: PointerEvent) {
      if (!modalRef.current) return;
      if (e.target === modalRef.current) {
        modalRef.current.close();
        return;
      }
      if (modalRef.current.contains(e.target as Node)) return;
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

  useEffect(() => {
    if (open) return;
    if (globalThis.location?.hash !== "#order") return;
    const url = `${globalThis.location.pathname}${globalThis.location.search}`;
    globalThis.history.replaceState(null, "", url);
  }, [open]);

  if (items.length === 0) return null;

  return (
    <>
      {/* Floating call button (bottom-left) */}
      {urls.callUrl ? (
        <a
          href={urls.callUrl}
          className="fixed bottom-6 left-6 z-50 inline-flex size-14 items-center justify-center rounded-2xl bg-[#f6c200] text-[#002B2B] shadow-[0_18px_50px_rgba(0,0,0,0.25)] transition hover:brightness-95 active:translate-y-[1px]"
          aria-label="Call Bowl Diaries"
        >
          <IconPhone className="size-6 text-[#002B2B]" />
        </a>
      ) : null}

      <div
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      >
        {open ? (
          <div className="fixed inset-0 z-[70] px-5 md:px-6">
            <dialog
              ref={(node) => {
                modalRef.current = node;
                if (node && !node.open) node.showModal();
              }}
              id={panelId}
              aria-label="Order options"
              className="fixed left-1/2 top-1/2 m-0 w-[min(420px,calc(100vw-2.5rem))] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-zinc-900/10 bg-white/95 p-0 shadow-[0_28px_80px_rgba(0,0,0,0.35)] backdrop:bg-black/40 backdrop:backdrop-blur-[2px]"
              onClose={() => setOpen(false)}
            >
              <div className="flex items-start justify-between gap-4 px-5 pb-3 pt-5">
                <div>
                  <div className="text-base font-extrabold tracking-wide text-[#002B2B]">
                    Order options
                  </div>
                  <div className="mt-1 text-sm font-semibold text-zinc-600">
                    Choose where you want to order from
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => modalRef.current?.close()}
                  className="inline-flex size-10 items-center justify-center rounded-2xl border border-zinc-900/10 bg-white/70 text-zinc-900 transition hover:bg-white"
                  aria-label="Close order options"
                >
                  ✕
                </button>
              </div>

              <div className="grid gap-1.5 px-3 pb-4">
                {items.map((item) => {
                  const isExternal =
                    item.external &&
                    !item.href.startsWith("#") &&
                    !item.href.startsWith("tel:");
                  return (
                    <a
                      key={item.key}
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-zinc-900/5 active:bg-zinc-900/10"
                      onClick={() => modalRef.current?.close()}
                    >
                      <span className="grid size-10 place-items-center rounded-2xl bg-zinc-900/5 text-[#002B2B]">
                        {item.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-[15px] font-extrabold text-[#002B2B]">
                          {item.label}
                        </span>
                        {item.subLabel ? (
                          <span className="block truncate text-[13px] font-semibold text-zinc-600">
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
            </dialog>
          </div>
        ) : null}

      {/* FAB */}
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => {
          if (open) {
            modalRef.current?.close();
            return;
          }
          if (globalThis.location?.hash !== "#order") {
            globalThis.history.pushState(null, "", "#order");
          }
          setOpen(true);
        }}
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
    </>
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

function IconReceipt(props: Readonly<{ className?: string }>) {
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
      <path d="M6 2h12v20l-2-1-2 1-2-1-2 1-2-1-2 1V2Z" />
      <path d="M9 6h6" />
      <path d="M9 10h6" />
      <path d="M9 14h4" />
    </svg>
  );
}

function IconGlobe(props: Readonly<{ className?: string }>) {
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
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

