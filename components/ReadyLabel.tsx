"use client";

type ReadyLabelProps = {
  text?: string;
  className?: string;
};

export default function ReadyLabel({
  text = "Ready to shop soon",
  className = "",
}: ReadyLabelProps) {
  return (
    <div
      className={`pointer-events-none inline-flex h-12 select-none items-center justify-center self-start bg-gradient-to-r from-[#f3f4f6] via-[#e5e7eb] to-[#d1d5db] px-6 text-[13px] font-semibold uppercase tracking-[0.45em] text-primary shadow-[0_16px_35px_rgba(15,28,46,0.15)] animate-breathe ${className}`}
    >
      {text}
    </div>
  );
}

