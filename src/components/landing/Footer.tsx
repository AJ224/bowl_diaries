import Image from "next/image";

import { Container } from "@/components/ui/Container";

type FooterLink = { label: string; href: string };

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden rounded-t-[40px] bg-[#002B2B] text-white md:min-h-[486px]"
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
      <div className="pointer-events-none absolute bottom-[-10px] right-2 z-[5] w-[240px] md:bottom-[-18px] md:right-4 md:w-[340px] lg:bottom-[-24px] lg:right-6 lg:w-[420px]">
        <Image
          src="/footer_mascout.png"
          alt=""
          width={760}
          height={805}
          priority={false}
          className="h-auto w-full object-contain"
        />
      </div>

      <Container className="relative z-10 py-8 md:py-16">
        {/* Main grid: logo+contact on left, nav columns on right */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:gap-6 lg:gap-8">
          {/* Left: Logo + Contact Info */}
          <div className="ds-anim-fade-up">
            <Image
              src="/footer_logo.png"
              alt="Bowl Diaries"
              width={220}
              height={120}
              priority={false}
              className="h-auto w-[160px] md:w-[200px] lg:w-[220px]"
            />

            <div className="mt-4 space-y-3 text-white/90 md:mt-6 md:space-y-4">
              {/* Address */}
              <div className="flex gap-3">
                <IconPin className="mt-0.5 size-4 shrink-0 text-white/80 md:size-[18px]" />
                <p
                  className="text-[22px] font-normal leading-none tracking-[0]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Shop no 1, Rebecca Queen, Sagershet Rd, Perbodi Wadi, Orbhat,
                  Vasai West, Mulgaon, Vasai-Virar, Maharashtra 401207
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <IconPhone className="size-4 shrink-0 text-white/80 md:size-[18px]" />
                <a
                  className="text-[22px] font-normal leading-none transition hover:text-white"
                  href="tel:+917770060798"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  +91 77700 60798
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <IconMail className="size-4 shrink-0 text-white/80 md:size-[18px]" />
                <a
                  className="text-[22px] font-normal leading-none transition hover:text-white"
                  href="mailto:info@bowldiaries.com"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  info@bowldiaries.com
                </a>
              </div>
            </div>
          </div>

          {/* Company */}
          <FooterCol
            title="Company"
            links={[
              { label: "About Us", href: "#about" },
              { label: "Our Story", href: "#about" },
              { label: "Location", href: "#contact" },
            ]}
          />

          {/* Get Help */}
          <FooterCol
            title="Get Help"
            links={[
              { label: "Contact Us", href: "#contact" },
              { label: "Help & Support", href: "#contact" },
              { label: "Location", href: "#contact" },
            ]}
          />

          {/* Social Media */}
          <SocialCol />
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  className,
}: Readonly<{ title: string; links: FooterLink[]; className?: string }>) {
  return (
    <div className={`ds-anim-fade-up ${className ?? ""}`}>
      <h3
        className="text-[28px] font-medium leading-none text-[#f6c200]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>
      <ul className="mt-3 space-y-2 md:mt-6 md:space-y-4">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-[22px] font-normal leading-none text-white/80 transition hover:text-white md:leading-[21px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialCol() {
  return (
    <div className="ds-anim-fade-up">
      <h3
        className="text-[28px] font-medium leading-none text-[#f6c200]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Social Media
      </h3>
      <div className="mt-3 flex items-center gap-3 md:mt-6">
        <a
          href="https://instagram.com"
          className="inline-flex size-10 items-center justify-center rounded-xl border border-white/25 bg-white/10 transition hover:bg-white/20"
          aria-label="Instagram"
        >
          <IconInstagram className="size-5 text-white" />
        </a>
        <a
          href="https://facebook.com"
          className="inline-flex size-10 items-center justify-center rounded-xl border border-white/25 bg-white/10 transition hover:bg-white/20"
          aria-label="Facebook"
        >
          <IconFacebook className="size-5 text-white" />
        </a>
      </div>
    </div>
  );
}

/* ── Icons ── */

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