import React from "react";
import {
  Brain,
  Network,
  Database,
  Cpu,
  BookOpen,
  FlaskConical,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

// ─────────────────────────────────────────────────────────────────────────────
// Edit these cards to reflect your genuine engineering interests and learning
// directions. Replace placeholder descriptions with your own words.
// ─────────────────────────────────────────────────────────────────────────────

const INTERESTS = [

  {
    icon: BookOpen,
    title: "Data Structures and Algorithms",
    description:
      "Solved 450+ DSA problems on LeetCode and continuously refining my understanding of fundamental data structures and algorithms to write efficient, scalable, and optimized code. "

  },
  {
    icon: Brain,
    title: "Agentic AI Systems",
    description:
      "Designing multi-agent architectures that reason, plan, and act autonomously — from tool-use via MCP to long-horizon task execution with robust error handling.",
  },
  {
    icon: Network,
    title: "RAG & Knowledge Systems",
    description:
      "Exploring advanced retrieval strategies — hybrid search, reranking, query routing — to ground LLM outputs in accurate, up-to-date domain knowledge.",
  },
  {
    icon: Database,
    title: "Data Lakehouse Architecture",
    description:
      "Building scalable, governed data platforms on Databricks and Delta Lake that bridge raw ingestion to BI-ready analytical surfaces.",
  },
  {
    icon: Cpu,
    title: "LLM Evaluation & Reliability",
    description:
      "Developing systematic evaluation frameworks for LLM-based systems — measuring faithfulness, relevance, hallucination rates, and latency at scale.",
  }
  // {
  //   icon: FlaskConical,
  //   title: "Multimodal & Emerging Models",
  //   description:
  //     "Following developments in vision-language models, audio, and structured-output capabilities — and experimenting with how they apply to engineering workflows.",
  // }
];

export function InterestsSection() {
  return (
    <section
      id="interests"
      className="section-padding bg-slate-900/30"
      aria-label="Learning and engineering interests"
    >
      <div className="content-width">
        <SectionHeader
          eyebrow="Curiosity"
          title="Learning & Engineering Interests"
          subtitle="Areas where I invest time learning, experimenting, and pushing the boundary of what I build."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INTERESTS.map((interest) => {
            const Icon = interest.icon;
            return (
              <div
                key={interest.title}
                className="group rounded-xl bg-slate-900/50 border border-slate-800/60 p-6 flex flex-col gap-3 hover:border-indigo-500/20 hover:bg-slate-900/70 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/15 transition-colors duration-200">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors duration-200">
                  {interest.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
