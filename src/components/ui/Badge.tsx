import React from "react";

interface BadgeProps {
  label: string;
  variant?: "default" | "accent" | "muted";
  className?: string;
}

export function Badge({ label, variant = "default", className = "" }: BadgeProps) {
  const variants: Record<string, string> = {
    default:
      "bg-slate-800 text-slate-300 border border-slate-700/50 hover:border-indigo-500/40 hover:text-slate-200 transition-colors duration-200",
    accent:
      "bg-indigo-500/10 text-indigo-300 border border-indigo-500/25 hover:border-indigo-500/50 hover:bg-indigo-500/15 transition-colors duration-200",
    muted:
      "bg-slate-900 text-slate-500 border border-slate-800",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium font-mono ${variants[variant]} ${className}`}
    >
      {label}
    </span>
  );
}
