import React from "react";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";


export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
      aria-label="Hero — introduction"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />

      {/* Radial gradient focal point */}
      <div
        className="absolute inset-0 bg-gradient-radial from-indigo-950/30 via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Top-right ambient blob */}
      <div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-indigo-600/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      {/* Bottom-left ambient blob */}
      <div
        className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-violet-600/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-8">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 text-xs font-semibold text-indigo-300 font-mono tracking-wide">
          <Sparkles size={12} aria-hidden="true" />
          {/* Replace with your role or a short tagline */}
          AI & Software Engineer {/* e.g. "AI & Software Engineer" */}
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
            {/* Replace with your name */}
            <span className="text-slate-50">Pawan</span>
            <br />
            <span className="text-gradient">Gote</span>
          </h1>
        </div>

        {/* Sub-headline */}
        <p className="max-w-2xl text-lg sm:text-xl text-slate-400 leading-relaxed">
          {/* Replace with your personal tagline / value proposition */}
          Exploring Agentic AI, RAG & Data Intelligence
          {/* e.g. "Building intelligent systems that transform raw data into decisions — from Databricks analytics to agentic AI pipelines." */}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button href="#projects" variant="primary" size="lg">
            View My Work
          </Button>
          <Button href="#contact" variant="secondary" size="lg">
            Get In Touch
          </Button>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/pawan4955"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-300 transition-colors duration-200"
            aria-label="GitHub profile"
          >
            <GithubIcon size={20} />
          </a>
          <div className="w-px h-4 bg-slate-700" aria-hidden="true" />
          <a
            href="https://www.linkedin.com/in/pawan-gote-013961330"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-300 transition-colors duration-200"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon size={20} />
          </a>
          <div className="w-px h-4 bg-slate-700" aria-hidden="true" />
          <a
            href="mailto:pawangote411@gmail.com"
            className="text-slate-500 hover:text-slate-300 transition-colors duration-200"
            aria-label="Send email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors duration-200 group"
        aria-label="Scroll to About section"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown
          size={16}
          className="group-hover:translate-y-1 transition-transform duration-300"
          aria-hidden="true"
        />
      </a>
    </section>
  );
}
