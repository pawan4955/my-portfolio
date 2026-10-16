import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 mb-16 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold font-mono uppercase tracking-widest text-indigo-400">
          <span className="inline-block w-4 h-px bg-indigo-500" aria-hidden="true" />
          {eyebrow}
          <span className="inline-block w-4 h-px bg-indigo-500" aria-hidden="true" />
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-50">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
