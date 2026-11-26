"use client";

import Hero from "@/components/Hero";
import Facts from "@/components/Facts";
import CvDownload from "@/components/CvDownload";
import ProjectGallery from "@/components/ProjectGallery";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { useTab } from "@/components/TabContext";

export default function Home() {
  const { active } = useTab();

  if (active === "projects") {
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

  if (active === "journey") {
    return (
      <section className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <p className="font-mono text-xs tracking-[0.28em] text-neon-magenta">
          {"// 03. JOURNEY"}
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
          WORK <span className="gradient-text">EXPERIENCE</span>
        </h1>
        <p className="mt-3 max-w-2xl text-xl leading-relaxed text-muted">
          The roles, teams and systems I&apos;ve worked on.
        </p>
        <div className="mt-14">
          <ExperienceTimeline />
        </div>
      </section>
    );
  }

  return (
    <>
      <Hero />
      <Facts />
      <CvDownload />
    </>
  );
}
