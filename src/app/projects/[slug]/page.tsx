import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  BarChart3,
  Bot,
  Search,
  FileSearch,
  Box,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { getProjectBySlug, projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

// ─────────────────────────────────────────────────────────────────────────────
// Map icon strings to Lucide components (must match projects.ts values)
// ─────────────────────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ElementType> = {
  BarChart3,
  Bot,
  Search,
  FileSearch,
  Box,
};

const STATUS_CLASSES: Record<string, string> = {
  Completed: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "In Progress": "text-amber-400 bg-amber-400/10 border-amber-400/20",
  Internal: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Research: "text-violet-400 bg-violet-400/10 border-violet-400/20",
};

// ─── Static params for SSG ───────────────────────────────────────────────────
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// ─── Per-page metadata ───────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
    },
  };
}

// ─── Page component ──────────────────────────────────────────────────────────
export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const Icon = ICON_MAP[project.icon] ?? Box;
  const statusClass =
    STATUS_CLASSES[project.status] ??
    "text-slate-400 bg-slate-400/10 border-slate-400/20";

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Back link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-4">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200 group"
          aria-label="Back to projects"
        >
          <ArrowLeft
            size={15}
            className="group-hover:-translate-x-0.5 transition-transform duration-200"
            aria-hidden="true"
          />
          Back to Projects
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        {/* Header */}
        <header className="flex flex-col gap-5 mb-10 pb-10 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Icon size={24} aria-hidden="true" />
            </div>
            <span
              className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium border ${statusClass}`}
            >
              {project.status}
            </span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-50 tracking-tight mb-3">
              {project.title}
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">{project.tagline}</p>
          </div>

          {/* External links */}
          <div className="flex items-center gap-3 flex-wrap">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 transition-all duration-200"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <GithubIcon size={15} aria-hidden="true" />
                Repository
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-500/50 transition-all duration-200"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink size={15} aria-hidden="true" />
                Live Demo
              </a>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} label={tag} variant="accent" />
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Overview
            </h2>
            <div className="prose prose-invert prose-sm max-w-none text-slate-400 leading-relaxed space-y-4">
              {project.detail.split("\n\n").map((para, i) => (
                <p key={i} className="whitespace-pre-line">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6">
            {/* Highlights */}
            <div className="rounded-xl bg-slate-900/50 border border-slate-800/60 p-5">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                Key Highlights
              </h2>
              <ul className="flex flex-col gap-3">
                {project.highlights.map((hl) => (
                  <li key={hl} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={14}
                      className="text-indigo-400 mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-slate-400 leading-relaxed">{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Meta */}
            <div className="rounded-xl bg-slate-900/50 border border-slate-800/60 p-5 flex flex-col gap-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
                Details
              </h2>
              <dl className="flex flex-col gap-2">
                <div className="flex justify-between gap-4">
                  <dt className="text-xs text-slate-600">Domain</dt>
                  <dd className="text-xs text-slate-300 text-right">{project.domain}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-xs text-slate-600">Status</dt>
                  <dd className="text-xs text-slate-300 text-right">{project.status}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-xs text-slate-600">Technologies</dt>
                  <dd className="text-xs text-slate-300 text-right">{project.tags.length} listed</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
}
