import Image from "next/image";

type FullBleedBackgroundSectionProps = Readonly<{
  as?: "section" | "div";
  className?: string;
  backgroundSrc: string;
  backgroundAlt?: string;
  backgroundPriority?: boolean;
  backgroundSizes?: string;
  backgroundWrapperClassName?: string;
  backgroundImageClassName?: string;
  /**
   * Applied to the content wrapper as minHeight to keep background visible.
   * Pass the same clamp string you used inline to preserve visuals.
   */
  minHeight?: string;
  contentClassName?: string;
  children?: React.ReactNode;
}>;

export function FullBleedBackgroundSection({
  as = "section",
  className,
  backgroundSrc,
  backgroundAlt = "",
  backgroundPriority = false,
  backgroundSizes = "100vw",
  backgroundWrapperClassName = "z-0",
  backgroundImageClassName = "object-contain object-center",
  minHeight,
  contentClassName,
  children,
}: FullBleedBackgroundSectionProps) {
  const Tag = as;

  return (
    <Tag className={`relative w-full overflow-hidden ${className ?? ""}`}>
      <div className={`pointer-events-none absolute inset-0 ${backgroundWrapperClassName}`}>
        <Image
          src={backgroundSrc}
          alt={backgroundAlt}
          fill
          priority={backgroundPriority}
          sizes={backgroundSizes}
          className={backgroundImageClassName}
        />
      </div>

      <div className={contentClassName} style={minHeight ? { minHeight } : undefined}>
        {children}
      </div>
    </Tag>
  );
}

