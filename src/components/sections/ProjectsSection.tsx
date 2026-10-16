import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";
import { featuredProjects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-padding bg-slate-900/30"
      aria-label="Featured projects"
    >
      <div className="content-width">
        <SectionHeader
          eyebrow="Work"
          title="Featured Projects"
          subtitle="A selection of AI and software engineering projects across analytics, agentic systems, NLP, and 3-D visualisation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Optional "See all" — add /projects list page later */}
        <div className="flex justify-center mt-12">
          <Button href="/projects" variant="outline" size="md">
            View All Projects
            <ArrowRight size={15} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
