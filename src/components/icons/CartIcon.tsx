export function CartIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className ?? "size-4"}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="20" r="1" />
      <circle cx="17" cy="20" r="1" />
      <path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 8H6" />
    </svg>
  );
}

