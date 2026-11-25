import Link from "next/link";
import { profile } from "@/lib/profile";
import { Icon } from "./Icons";
import ProfileShowcase from "./ProfileShowcase";
import TypeWriter from "./TypeWriter";

export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center overflow-hidden px-6 py-20 sm:px-8 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10rem] top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border border-neon-cyan/10 lg:block"
      >
        <div className="absolute inset-12 rounded-full border border-neon-magenta/10" />
        <div className="absolute inset-24 rounded-full border border-neon-cyan/10" />
      </div>

      <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-7 flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] text-neon-lime">
            <span className="status-dot" />
            {profile.availableForWork
              ? "AVAILABLE FOR OPPORTUNITIES"
              : "CURRENTLY UNAVAILABLE"}
          </div>

          <p className="mb-4 font-mono text-xs tracking-[0.3em] text-muted">
            &gt; INITIALIZING PROFILE...
          </p>

          <h1 className="font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block text-ink">I&apos;M</span>
            <span
              className="glitch block gradient-text"
              data-text={profile.name}
            >
              {profile.name}
            </span>
            <span className="mt-3 block text-xl text-neon-magenta sm:text-3xl">
              You can call me <span className="text-ink">{profile.alias}</span>
            </span>
          </h1>

          <div className="mt-7 flex flex-wrap items-center gap-3 font-mono text-lg sm:text-2xl">
            <span className="text-muted">&gt; I AM A</span>
            <TypeWriter words={profile.roles} />
          </div>

          <p className="mt-6 max-w-xl text-xl leading-relaxed text-muted">
            {profile.shortBio}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#cv" className="btn-neon">
              DOWNLOAD CV
              <Icon name="download" className="h-4 w-4" />
            </a>
            <Link href="/projects" className="btn-ghost">
              VIEW PROJECTS
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] tracking-[0.16em] text-muted">
            <span>
              <span className="text-neon-cyan">LOC</span>{" // "}
              {profile.location}
            </span>
            <span>
              <span className="text-neon-cyan">SYS</span>{" // SINCE "}
              {profile.journeyStart}
            </span>
          </div>
        </div>

        <div className="float-slow">
          <ProfileShowcase />
        </div>
      </div>

      <a
        href="#facts"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-muted transition-colors hover:text-neon-cyan"
      >
        SCROLL
        <Icon name="arrowDown" className="h-4 w-4" />
      </a>
    </section>
  );
}
