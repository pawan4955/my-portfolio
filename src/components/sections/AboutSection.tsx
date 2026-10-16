import React from "react";
import { MapPin, Briefcase, GraduationCap, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

// ─────────────────────────────────────────────────────────────────────────────
// Replace every [PLACEHOLDER] with your own information.
// Remove or add items in TIMELINE_ITEMS as needed.
// ─────────────────────────────────────────────────────────────────────────────

const TIMELINE_ITEMS = [
  {
    icon: Briefcase,
    period: " August 2026 - Present",          // e.g. "Jan 2023 – Present"
    title: "Software Engineer",                 // e.g. "AI Engineer"
    organisation: "Pratiti Technologies , Pune",            // e.g. "Acme Corp"
    description:
      "Working at the intersection of AI and full-stack development.",
  },
  {
    icon: GraduationCap,
    period: "2023-2026",
    title: "Bachelor of Technology in Computer Science",                    // e.g. "B.Tech Computer Science"
    organisation: "Government College of Engineering, Chhatrapati Sambhajinagar",
    description: "Graduated with an 8.6 CGPA, achieving Distinction in academic performance.",
  },
];

const QUICK_FACTS = [
  { icon: MapPin, label: "Location", value: "Pune, India" },   // e.g. "Bengaluru, India"
  { icon: Briefcase, label: "Role", value: "SOFTWARE ENGINEER" }, // e.g. "AI Engineer"
  { icon: Calendar, label: "Experience", value: "FRESHER" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding bg-slate-950"
      aria-label="About me"
    >
      <div className="content-width">
        <SectionHeader
          eyebrow="About"
          title="Who I Am"
          subtitle="A brief introduction to my background, experience, and what drives me."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — bio */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Bio paragraphs — replace with your own story */}
            <div className="flex flex-col gap-4 text-slate-400 leading-relaxed">
              <p>
                {/* Paragraph 1: Who you are and your professional identity */}
                I am a computer science graduate with a strong interest in software development, AI, and data-driven problem-solving. I have a solid foundation in programming, algorithms, and modern web technologies. My goal is to build scalable, efficient, and meaningful software that makes a difference.
                {/* e.g. "I'm an AI engineer with X years of experience building production ML systems
                    at the intersection of large language models, data engineering, and full-stack
                    development." */}
              </p>
              <p>
                {/* Paragraph 2: What you're currently focused on */}
                I’m passionate about building intelligent systems and exploring the latest advancements in AI. I enjoy working on challenging problems and continuously learning new technologies. I’m particularly interested in AI applications that enhance productivity and create seamless user experiences.
                {/* e.g. "Currently I focus on agentic AI architectures, RAG pipelines, and analytics
                    products on Databricks — helping organisations extract insight from complex,
                    multi-domain data at scale." */}
              </p>
              <p>
                {/* Paragraph 3: Outside of work / personal */}
                Outside of coding, I enjoy playing badminton, exploring new technologies, and contributing to open-source projects. I believe in continuous improvement and strive to create solutions that are both innovative and user-centric. I’m always open to new challenges and collaborations!
                {/* e.g. "Outside of code I enjoy [hobbies], and I'm always experimenting with new
                    model capabilities and open-source tooling." */}
              </p>
            </div>

            {/* Quick facts */}
            <div className="flex flex-wrap gap-4 mt-2">
              {QUICK_FACTS.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <Icon size={14} className="text-indigo-400 flex-shrink-0" aria-hidden="true" />
                  <span className="text-slate-500">{label}:</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-6">
              Experience &amp; Education
            </h3>
            <ol className="relative flex flex-col gap-6 pl-6 border-l border-slate-800">
              {TIMELINE_ITEMS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="relative">
                    {/* Timeline dot */}
                    <div
                      className="absolute -left-[25px] w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <Icon size={11} className="text-indigo-400" />
                    </div>

                    <time className="text-xs font-mono text-slate-500 mb-1 block">
                      {item.period}
                    </time>
                    <p className="text-sm font-semibold text-slate-200">{item.title}</p>
                    <p className="text-xs text-indigo-400 mb-1">{item.organisation}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
