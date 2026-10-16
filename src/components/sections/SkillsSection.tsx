import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

// ─────────────────────────────────────────────────────────────────────────────
// Edit these lists to match your actual skills. Add, remove, or reorder.
// ─────────────────────────────────────────────────────────────────────────────

const SKILL_GROUPS = [
  {
    category: "AI & Machine Learning",
    skills: [
      "LLMs (OpenAI, Anthropic)",
      "RAG Pipelines",
      "Agentic AI",
      "MCP",
      "LangChain",
      "Embeddings",
      "Vector Databases",
      "Prompt Engineering",
      "Fine-tuning",
    ],
  }
  ,
  {
    category: "Languages",
    skills: [
      "C++",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML / CSS"
    ]
  },
  {
    category: "Data Engineering",
    skills: [
      "Databricks",
      "PySpark",
      "Delta Lake",
      "Unity Catalog",
      "dbt",
      "SQL",
      "ETL / ELT",
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      "Java Spring Boot",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "Git",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "javascript",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "HTML / CSS",
    ],
  }
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-padding bg-slate-950"
      aria-label="Technical skills"
    >
      <div className="content-width">
        <SectionHeader
          eyebrow="Expertise"
          title="Technical Skills"
          subtitle="Technologies and tools I work with across AI, data engineering, backend, and frontend."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="rounded-xl bg-slate-900/50 border border-slate-800/60 p-6 flex flex-col gap-4 hover:border-slate-700/60 transition-colors duration-200"
            >
              <h3 className="text-sm font-semibold text-slate-300 tracking-wide">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} label={skill} variant="default" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
