import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Projects",
  description: "Full list of AI and software engineering projects.",
};

export default function ProjectsListPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200 group mb-10"
        >
          <ArrowLeft
            size={15}
            className="group-hover:-translate-x-0.5 transition-transform duration-200"
            aria-hidden="true"
          />
          Home
        </Link>

        <div className="mb-12">
          <p className="text-xs font-semibold font-mono uppercase tracking-widest text-indigo-400 mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-px bg-indigo-500" aria-hidden="true" />
            All Work
            <span className="inline-block w-4 h-px bg-indigo-500" aria-hidden="true" />
          </p>
          <h1 className="text-4xl font-bold text-slate-50 tracking-tight">Projects</h1>
          <p className="text-slate-400 mt-3 max-w-xl">
            All AI and software engineering projects — spanning analytics, agentic systems, NLP, and 3-D visualisation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
