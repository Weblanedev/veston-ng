import { ReactNode } from "react";

type BannerAlignment = "left" | "center";
type TitleTag = "h1" | "h2" | "h3" | "h4";

interface SectionBannerProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: BannerAlignment;
  titleTag?: TitleTag;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  children?: ReactNode;
}

const alignmentClasses: Record<BannerAlignment, string> = {
  left: "text-left",
  center: "text-center",
};

const titleSizeClasses: Record<TitleTag, string> = {
  h1: "text-5xl md:text-6xl",
  h2: "text-4xl md:text-5xl",
  h3: "text-3xl md:text-4xl",
  h4: "text-2xl md:text-3xl",
};

export default function SectionBanner({
  eyebrow,
  title,
  description,
  align = "center",
  titleTag = "h2",
  className = "",
  eyebrowClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  children,
}: SectionBannerProps) {
  const TitleTag = titleTag;

  return (
    <div
      className={`rounded-3xl border border-secondary/60 bg-cream/70 p-8 shadow-[0_25px_45px_rgba(15,28,46,0.08)] md:p-10 ${alignmentClasses[align]} ${className}`}
    >
      {eyebrow && (
        <p
          className={`text-xs uppercase tracking-[0.4em] text-charcoal/60 ${
            align === "center" ? "mx-auto" : ""
          } ${eyebrowClassName}`}
        >
          {eyebrow}
        </p>
      )}
      <TitleTag
        className={`${titleSizeClasses[titleTag]} mt-4 font-bold text-primary ${titleClassName}`}
      >
        {title}
      </TitleTag>
      {description && (
        <p
          className={`mt-4 text-lg text-gray-600 ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          } ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}

