import type { Metadata } from "next";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export const metadata: Metadata = {
  title: "Journey",
  description: "Work experience — the roles, teams and systems I've worked on.",
};

export default function JourneyPage() {
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
