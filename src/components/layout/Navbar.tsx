"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-xl shadow-black/20"
        : "bg-transparent"
        }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-slate-50 hover:text-indigo-300 transition-colors duration-200 font-semibold text-sm group"
          aria-label="Go to homepage"
        >
          <div className="w-7 h-7 rounded-md bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center group-hover:bg-indigo-600/30 transition-colors duration-200">
            <Code2 size={14} className="text-indigo-400" aria-hidden="true" />
          </div>
          {/* Replace with your name */}
          <span className="font-mono text-indigo-400">Pawan Gote</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link"
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle"
          type="button"
          className="md:hidden text-slate-400 hover:text-slate-50 transition-colors duration-200 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden border-t border-slate-800/60 bg-slate-950/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-80 py-4" : "max-h-0"
          }`}
        aria-hidden={!menuOpen}
      >
        <ul
          className="flex flex-col gap-1 px-4 sm:px-6"
          role="list"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-50 hover:bg-slate-800/50 transition-all duration-200"
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
