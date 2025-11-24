"use client";

import Link from "next/link";

type LogoProps = {
  size?: "sm" | "md";
  showText?: boolean;
  tone?: "light" | "dark";
  className?: string;
};

const emblemSizeMap = {
  sm: "h-10 w-10 rounded-2xl",
  md: "h-12 w-12 rounded-[18px]",
};

const wordSizeMap = {
  sm: "text-xl",
  md: "text-2xl",
};

export default function Logo({
  size = "md",
  showText = true,
  tone = "dark",
  className = "",
}: LogoProps) {
  const emblemSize = emblemSizeMap[size];
  const wordSize = wordSizeMap[size];
  const textColor = tone === "light" ? "text-white" : "text-primary";
  const linkColor =
    tone === "light"
      ? "text-white hover:text-white"
      : "text-primary hover:text-primary";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 rounded-2xl px-3 py-2 transition-all duration-300 hover:-translate-y-0.5 ${linkColor} ${className}`}
      aria-label="Veston home"
    >
      <span
        className={`inline-flex items-center justify-center bg-gradient-to-br from-[#FAD961] via-[#F7B733] to-[#E67E22] ${emblemSize} shadow-[0_12px_26px_rgba(198,100,27,0.35)] ring-1 ring-white/30`}
      >
        <svg
          viewBox="0 0 64 64"
          className="h-6 w-6 text-white"
          aria-hidden="true"
        >
          <path
            d="M18 18L32 46L46 18"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 24L24.8 36.8"
            stroke="#FEEBC8"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {showText && (
        <span
          className={`${wordSize} font-black tracking-wide ${textColor} block`}
        >
          Veston
        </span>
      )}
    </Link>
  );
}
