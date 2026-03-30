type ButtonLinkProps = Readonly<{
  href: string;
  children: React.ReactNode;
  className?: string;
}>;

export function PrimaryButtonLink({
  href,
  children,
  className,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-md bg-[#f6c200] px-5 py-3 text-sm font-extrabold text-zinc-900 shadow-[0_8px_0_rgba(15,90,60,0.15)] transition hover:brightness-95 active:translate-y-[1px] ${className ?? ""}`}
    >
      {children}
    </a>
  );
}

export function GhostButtonLink({
  href,
  children,
  className,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-md border border-zinc-900/10 bg-white/60 px-4 py-2 text-sm font-semibold text-zinc-900 backdrop-blur transition hover:bg-white ${className ?? ""}`}
    >
      {children}
    </a>
  );
}

