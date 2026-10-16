"use client";

import React from "react";
import Link from "next/link";
import {
  BarChart3,
  Bot,
  Search,
  FileSearch,
  Box,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import type { Project } from "@/data/projects";
import { Badge } from "./Badge";

// Map icon string names to Lucide components
const ICON_MAP: Record<string, React.ElementType> = {
  BarChart3,
  Bot,
  Search,
  FileSearch,
  Box,
};

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const STATUS_CLASSES: Record<string, string> = {
  Completed: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "In Progress": "text-amber-400 bg-amber-400/10 border-amber-400/20",
  Internal: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Research: "text-violet-400 bg-violet-400/10 border-violet-400/20",
};

export function ProjectCard({ project, className = "" }: ProjectCardProps) {
  const Icon = ICON_MAP[project.icon] ?? Box;
  const statusClass =
    STATUS_CLASSES[project.status] ??
    "text-slate-400 bg-slate-400/10 border-slate-400/20";

  return (
    <article
      className={`
        group relative flex flex-col rounded-xl
        bg-slate-900/60 border border-slate-700/50
        backdrop-blur-sm overflow-hidden
        transition-all duration-300
        hover:border-indigo-500/30 hover:bg-slate-900/80
        hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-950/30
        ${className}
      `}
    >
      {/* Top accent bar — only on flagship */}
      {project.flagship && (
        <div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent"
          aria-hidden="true"
        />
      )}

      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Header row: icon + status */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/15 transition-colors duration-200">
            <Icon size={20} aria-hidden="true" />
          </div>

          <span
            className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium border ${statusClass}`}
          >
            {project.status}
          </span>
        </div>

        {/* Title & tagline */}
        <div>
          <h3 className="text-base font-semibold text-slate-100 group-hover:text-white transition-colors duration-200 mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
            {project.tagline}
          </p>
        </div>

        {/* Domain */}
        <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
          {project.domain}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 5).map((tag) => (
            <Badge key={tag} label={tag} variant="default" />
          ))}
          {project.tags.length > 5 && (
            <Badge label={`+${project.tags.length - 5}`} variant="muted" />
          )}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer: links */}
        <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors duration-200 group/link"
            aria-label={`View details for ${project.title}`}
          >
            View Details
            <ArrowRight
              size={14}
              className="group-hover/link:translate-x-0.5 transition-transform duration-200"
              aria-hidden="true"
            />
          </Link>

          <div className="flex items-center gap-2 ml-auto">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-300 transition-colors duration-200"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <GithubIcon size={15} />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-300 transition-colors duration-200"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
