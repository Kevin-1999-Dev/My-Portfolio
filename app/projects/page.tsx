import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Project",
  description: "Projects built by Kaung Zaw Han — starting with Native Farm.",
};

export default function ProjectsPage() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <p className="font-mono text-xs tracking-[0.28em] text-neon-magenta">
        {"// 02. PROJECTS"}
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
        SELECTED <span className="gradient-text">WORK</span>
      </h1>
      <p className="mt-3 max-w-2xl text-xl leading-relaxed text-muted">
        A selection of things I&apos;ve built. Click any project to open its full
        details, demo and source links.
      </p>

      <div className="mt-10">
        <ProjectGallery />
      </div>
    </section>
  );
}
