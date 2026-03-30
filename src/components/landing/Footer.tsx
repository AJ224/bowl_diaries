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
          className="object-contain object-center"
        />
      </div>

      {/* mascot artwork (bottom-right) */}
      <div className="pointer-events-none absolute bottom-[-10px] right-[-28px] z-[5] w-[240px] md:bottom-[-18px] md:right-[-36px] md:w-[340px] lg:bottom-[-24px] lg:right-[-48px] lg:w-[420px]">
        <Image
          src="/footer_mascout.png"
          alt=""
          width={760}
          height={805}
          priority={false}
          className="h-auto w-full object-contain"
        />
      </div>

      <Container className="relative z-10 grid items-start gap-10 py-12 md:grid-cols-[1.25fr_0.85fr_0.85fr_0.75fr] md:gap-12">
        <div className="ds-anim-fade-up">
          <Image
            src="/footer_logo.png"
            alt="Bowl Diaries"
            width={220}
            height={120}
            priority={false}
            className="h-auto w-[210px] md:w-[240px]"
          />

          <div className="mt-6 space-y-5 text-[13px] leading-[1.65] text-white/90 md:text-[14px]">
            <div className="flex gap-3">
              <IconPin className="mt-0.5 size-[18px] shrink-0 text-white/90 md:size-5" />
              <div>
                Shop no. 1, Rebecca Queen, Sagershet Rd,
                <br />
                Perbodi Wadi, Orbhat, Vasai West,
                <br />
                Mulgaon, Vasai-Virar, Maharashtra 401207
              </div>
            </div>

            <div className="flex items-center gap-3">
              <IconPhone className="size-[18px] shrink-0 text-white/90 md:size-5" />
              <a className="transition hover:text-white" href="tel:+917770060798">
                +91 77700 60798
              </a>
            </div>

            <div className="flex items-center gap-3">
              <IconMail className="size-[18px] shrink-0 text-white/90 md:size-5" />
              <a className="transition hover:text-white" href="mailto:info@bowldiaries.com">
                info@bowldiaries.com
              </a>
            </div>
          </div>
        </div>

        <FooterCol
          title="Company"
          links={[
            { label: "About Us", href: "#about" },
            { label: "Our Story", href: "#about" },
            { label: "Location", href: "#contact" },
          ]}
        />
        <FooterCol
          title="Get Help"
          links={[
            { label: "Contact Us", href: "#contact" },
            { label: "Help & Support", href: "#contact" },
            { label: "Location", href: "#contact" },
          ]}
        />
        <SocialCol />
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: Readonly<{ title: string; links: FooterLink[] }>) {
  return (
    <div className="ds-anim-fade-up">
      <div
        className="text-[15px] font-semibold leading-none text-[#f6c200] md:text-[16px]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </div>
      <ul className="mt-5 space-y-3 text-[13px] text-white/90 md:text-[14px]">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="transition hover:text-white">
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
      <div
        className="text-[15px] font-semibold leading-none text-[#f6c200] md:text-[16px]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Social Media
      </div>
      <div className="mt-5 flex items-center gap-4">
        <a
          href="https://instagram.com"
          className="inline-flex size-9 items-center justify-center rounded-md border border-white/20 bg-white/10 transition hover:bg-white/15"
          aria-label="Instagram"
        >
          <IconInstagram className="size-5 text-white" />
        </a>
        <a
          href="https://facebook.com"
          className="inline-flex size-9 items-center justify-center rounded-md border border-white/20 bg-white/10 transition hover:bg-white/15"
          aria-label="Facebook"
        >
          <IconFacebook className="size-5 text-white" />
        </a>
      </div>
    </div>
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
      <path d="M4 4h16v16H4z" />
      <path d="m22 6-10 7L2 6" />
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

