import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-500/50 shadow-lg shadow-indigo-900/20 hover:shadow-indigo-900/30",
  secondary:
    "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600",
  ghost:
    "bg-transparent hover:bg-slate-800/50 text-slate-400 hover:text-slate-200 border border-transparent hover:border-slate-700/50",
  outline:
    "bg-transparent hover:bg-indigo-500/5 text-indigo-400 hover:text-indigo-300 border border-indigo-500/30 hover:border-indigo-500/60",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

function getClassName(variant: ButtonVariant, size: ButtonSize, extra: string) {
  return [
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium",
    "transition-all duration-200 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
    "disabled:opacity-50 disabled:pointer-events-none",
    variantClasses[variant],
    sizeClasses[size],
    extra,
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
  } = props;

  const cls = getClassName(variant, size, className);

  if ("href" in props && props.href !== undefined) {
    const { href, target, rel, ...rest } = props;
    // Remove ButtonBaseProps keys from rest
    const { variant: _v, size: _s, className: _c, children: _ch, ...linkProps } = rest;
    void _v; void _s; void _c; void _ch;
    return (
      <Link href={href} target={target} rel={rel} className={cls} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { onClick, type, disabled, ...rest } = props as ButtonAsButton;
  const { variant: _v, size: _s, className: _c, children: _ch, ...btnProps } = rest;
  void _v; void _s; void _c; void _ch;

  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled}
      className={cls}
      {...btnProps}
    >
      {children}
    </button>
  );
}
