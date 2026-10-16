import React from "react";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { SectionHeader } from "@/components/ui/SectionHeader";

// ─────────────────────────────────────────────────────────────────────────────
// Replace every [PLACEHOLDER] below before publishing.
// ─────────────────────────────────────────────────────────────────────────────

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "pawan Gote",
    href: "mailto:pawangote4111@gmail.com",
    description: "Best for project enquiries and professional introductions.",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Pawan Gote",
    href: "https://www.linkedin.com/in/pawan-gote-013961330",
    description: "Connect for professional networking and career conversations.",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "pawan Gote",
    href: "https://github.com/pawan4955",
    description: "Browse open-source work and project repositories.",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding bg-slate-950"
      aria-label="Contact information"
    >
      <div className="content-width">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Work Together"
          subtitle="Open to interesting projects, collaborations, and conversations about AI and engineering."
        />

        <div className="max-w-3xl mx-auto">
          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {CONTACT_LINKS.map(({ icon: Icon, label, value, href, description }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex flex-col gap-3 p-5 rounded-xl bg-slate-900/50 border border-slate-800/60 hover:border-indigo-500/25 hover:bg-slate-900/70 transition-all duration-200"
                aria-label={`${label}: ${value}`}
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/15 transition-colors duration-200">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors duration-200 break-all">
                    {value}
                  </p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
              </a>
            ))}
          </div>

          {/* Closing note */}
          <div className="rounded-xl bg-slate-900/30 border border-slate-800/60 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
              <Send size={22} aria-hidden="true" />
            </div>
            {/* <div>
              <h3 className="text-base font-semibold text-slate-200 mb-1">
                Currently available for select opportunities
              </h3>
              {}
              <p className="text-sm text-slate-400 leading-relaxed">
                [YOUR_AVAILABILITY_NOTE]
                {}
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
