import Image from "next/image";

import { Container } from "@/components/ui/Container";
import urls from "@/config/urls.json";

type FooterLink = { label: string; href: string };

export function Footer() {
  const info = {
    phoneLabel: "+91 77700 60798",
    phoneHref: urls.callUrl ?? "tel:+917770060798",
    emailLabel: "info@bowldiaries.com",
    emailHref: "mailto:info@bowldiaries.com",
    deliveryTiming: "11:30 am to 10pm",
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden rounded-t-[40px] bg-[#002B2B] text-white"
    >
      {/* background artwork */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/footer_bg.png"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-contain object-bottom"
        />
      </div>

      {/* mascot artwork (bottom-right) */}
      <div className="pointer-events-none absolute bottom-[-12px] right-2 z-[5] hidden w-[220px] md:block md:bottom-[-18px] md:right-4 md:w-[260px] lg:bottom-[-22px] lg:right-6 lg:w-[320px]">
        <Image
          src="/footer_mascout.png"
          alt=""
          width={760}
          height={805}
          priority={false}
          className="h-auto w-full object-contain"
        />
      </div>

      <Container className="relative z-10 py-8 md:py-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-7 text-center md:grid-cols-4 md:gap-8 md:text-left">
          {/* 1) Logo */}
          <div className="ds-anim-fade-up col-span-2 flex flex-col items-center md:col-span-1 md:items-start">
            <Image
              src="/footer_logo.png"
              alt="Bowl Diaries"
              width={170}
              height={90}
              priority={false}
              className="h-auto w-[110px] md:w-[130px]"
            />
          </div>

          {/* 2) Info */}
          <div className="ds-anim-fade-up [animation-delay:60ms] col-span-2 md:col-span-1">
            <h3
              className="text-[16px] font-semibold leading-tight text-[#f6c200]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Info
            </h3>
            <div className="mt-3 space-y-2.5 text-white/85">
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <IconPhone className="size-4 shrink-0 text-white/80" />
                <a
                  className="text-[14px] leading-relaxed transition hover:text-white md:text-[15px]"
                  href={info.phoneHref}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {info.phoneLabel}
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <IconMail className="size-4 shrink-0 text-white/80" />
                <a
                  className="text-[14px] leading-relaxed transition hover:text-white md:text-[15px]"
                  href={info.emailHref}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {info.emailLabel}
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <IconClock className="size-4 shrink-0 text-white/80" />
                <span className="text-[14px] leading-relaxed text-white/85 md:text-[15px]" style={{ fontFamily: "var(--font-body)" }}>
                  Rekadi (Delivery timing): {info.deliveryTiming}
                </span>
              </div>
            </div>
          </div>

          {/* 3) Links (single column, title links only) */}
          <div className="ds-anim-fade-up [animation-delay:110ms] col-span-1">
            <h3
              className="text-[16px] font-semibold leading-tight text-[#f6c200]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Links
            </h3>
            <ul className="mt-3 space-y-2">
              {(
                [
                  { label: "About Us", href: "#bowlie" },
                  { label: "Our Story", href: "#story" },
                  { label: "Contact Us", href: info.phoneHref },
                  { label: "Help & Support", href: info.phoneHref },
                  { label: "Privacy Policy", href: "/privacy-policy" },
                ] satisfies FooterLink[]
              ).map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[13px] font-semibold tracking-wide text-white/85 transition hover:text-white md:text-[14px]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4) Social + Order now icons */}
          <div className="ds-anim-fade-up [animation-delay:160ms] col-span-1">
            <h3
              className="text-[16px] font-semibold leading-tight text-[#f6c200]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Social Media
            </h3>
            <div className="mt-3 flex items-center justify-center gap-3 md:justify-start">
              <a
                href="https://www.instagram.com/bowl.diaries/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-xl border border-white/25 bg-white/10 transition hover:bg-white/20"
                aria-label="Instagram"
              >
                <IconInstagram className="size-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/bowl.diaries"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-xl border border-white/25 bg-white/10 transition hover:bg-white/20"
                aria-label="Facebook"
              >
                <IconFacebook className="size-5 text-white" />
              </a>
            </div>

            <div className="mt-5">
              <div
                className="text-[16px] font-semibold leading-tight text-[#f6c200]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Order Now
              </div>
              <div className="mt-3 flex items-center justify-center gap-3 md:justify-start">
                <a
                  href={urls.zomatoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-10 items-center justify-center rounded-xl border border-white/25 bg-white/10 transition hover:bg-white/20"
                  aria-label="Order on Zomato"
                >
                  <BrandMark label="Z" className="bg-[#E23744] text-white" />
                </a>
                <a
                  href={urls.swiggyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-10 items-center justify-center rounded-xl border border-white/25 bg-white/10 transition hover:bg-white/20"
                  aria-label="Order on Swiggy"
                >
                  <BrandMark label="S" className="bg-[#FC8019] text-white" />
                </a>
                {urls.petpoojaUrl && urls.petpoojaUrl.trim().length > 0 ? (
                  <a
                    href={urls.petpoojaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-10 items-center justify-center rounded-xl border border-white/25 bg-white/10 transition hover:bg-white/20"
                    aria-label="Order on Petpooja"
                  >
                    <BrandMark label="P" className="bg-[#00AEEF] text-white" />
                  </a>
                ) : (
                  <span
                    className="inline-flex size-10 items-center justify-center rounded-xl border border-white/25 bg-white/5"
                    aria-label="Petpooja"
                    title="Petpooja link coming soon"
                  >
                    <BrandMark label="P" className="bg-[#00AEEF] text-white" />
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

/* ── Icons ── */

function BrandMark({
  label,
  className,
}: Readonly<{
  label: string;
  className: string;
}>) {
  return (
    <span
      className={`grid size-7 shrink-0 place-items-center rounded-lg text-[12px] font-extrabold ${className}`}
      aria-hidden="true"
    >
      {label}
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

function IconMail(props: Readonly<{ className?: string }>) {
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
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  );
}

function IconClock(props: Readonly<{ className?: string }>) {
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
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function IconInstagram(props: Readonly<{ className?: string }>) {
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
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function IconFacebook(props: Readonly<{ className?: string }>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.2-1.5 1.5-1.5H16.7V5c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8V11H6.6v3h2.6v8h4.3Z" />
    </svg>
  );
}