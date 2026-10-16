import React from "react";
import Link from "next/link";
import { Mail, Code2, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

// ─────────────────────────────────────────────────────────────────────────────
// Replace placeholder URLs before publishing.
// ─────────────────────────────────────────────────────────────────────────────
const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/pawan4955",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pawan-gote-013961330",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:pawangote4111@gmail.com",
    icon: Mail,
  },
];

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                <Code2 size={14} className="text-indigo-400" aria-hidden="true" />
              </div>
              <span className="font-mono text-sm font-semibold text-indigo-400">
                [YOUR_NAME]
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Building AI systems that turn unstructured complexity into structured intelligence.
            </p>
          </div>

          {/* Quick nav */}
          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-slate-200 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Connect
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors duration-200"
                    aria-label={label}
                  >
                    <Icon size={15} aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800/60">
          <p className="text-xs text-slate-600">
            © {year}{" "}
            <span className="text-slate-500">Pawan Gote</span>. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built with{" "}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-indigo-400 transition-colors duration-200"
            >
              Next.js
            </Link>{" "}
            &amp;{" "}
            <Link
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-indigo-400 transition-colors duration-200"
            >
              Tailwind CSS
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
