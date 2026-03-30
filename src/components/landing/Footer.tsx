import { Container } from "@/components/ui/Container";

type FooterLink = { label: string; href: string };

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0f5a3c] text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.1fr_0.9fr_0.9fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-full bg-[#f6c200] text-[11px] font-black tracking-[0.2em] text-zinc-900">
              BD
            </div>
            <div className="leading-tight">
              <div className="text-sm font-black tracking-wide">BOWL</div>
              <div className="-mt-1 text-sm font-black tracking-wide">
                DIARIES
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
            Fresh, flavorful bowls crafted with care. Order your favorites and
            enjoy comfort food done right.
          </p>
        </div>

        <FooterCol
          title="Company"
          links={[
            { label: "About", href: "#about" },
            { label: "Menu", href: "#menu" },
            { label: "Locations", href: "#contact" },
          ]}
        />
        <FooterCol
          title="Get Help"
          links={[
            { label: "Contact", href: "#contact" },
            { label: "FAQs", href: "#contact" },
            { label: "Support", href: "#contact" },
          ]}
        />
        <FooterCol
          title="Social Media"
          links={[
            { label: "Instagram", href: "https://instagram.com" },
            { label: "Facebook", href: "https://facebook.com" },
            { label: "X", href: "https://x.com" },
          ]}
        />
      </Container>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Bowl Diaries. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: Readonly<{ title: string; links: FooterLink[] }>) {
  return (
    <div>
      <div className="text-sm font-extrabold">{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-white/75">
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

