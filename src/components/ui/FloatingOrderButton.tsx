import { CartIcon } from "@/components/icons/CartIcon";
import urls from "@/config/urls.json";

export function FloatingOrderButton() {
  const orderUrl = urls.orderNowUrl?.trim() ?? "";
  if (!orderUrl) return null;

  return (
    <>
      {urls.callUrl ? (
        <a
          href={urls.callUrl}
          className="fixed bottom-6 left-6 z-50 inline-flex size-14 items-center justify-center rounded-2xl bg-[#f6c200] text-[#002B2B] shadow-[0_18px_50px_rgba(0,0,0,0.25)] transition hover:brightness-95 active:translate-y-[1px]"
          aria-label="Call Bowl Diaries"
        >
          <IconPhone className="size-6 text-[#002B2B]" />
        </a>
      ) : null}

      <a
        href={orderUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-2xl border border-zinc-900/10 bg-white/55 px-5 py-4 text-[#002B2B] shadow-[0_16px_30px_rgba(0,0,0,0.18)] backdrop-blur transition hover:bg-white/65 active:translate-y-[1px]"
      >
        <span className="grid size-9 place-items-center rounded-xl bg-zinc-900/5">
          <CartIcon className="size-5" />
        </span>
        <span className="text-sm font-extrabold tracking-wide">Order Now</span>
      </a>
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
