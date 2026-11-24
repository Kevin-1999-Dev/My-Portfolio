import { profile } from "@/lib/profile";
import { Icon } from "./Icons";

export default function ExperienceTimeline() {
  const items = profile.experience;

  if (items.length === 0) {
    return (
      <div className="panel flex flex-col items-center gap-4 px-6 py-16 text-center">
        <Icon name="briefcase" className="h-10 w-10 text-neon-cyan" />
        <p className="font-mono text-[11px] tracking-[0.2em] text-neon-magenta">
          {"// WORK EXPERIENCE"}
        </p>
        <h2 className="font-display text-2xl font-bold text-ink">
          EXPERIENCE LOG EMPTY
        </h2>
        <p className="max-w-md text-base leading-relaxed text-muted">
          Work experience entries are on the way. Add them to{" "}
          <code className="text-neon-cyan">profile.experience</code> in{" "}
          <code className="text-neon-cyan">lib/profile.ts</code> and they will
          appear here automatically.
        </p>
      </div>
    );
  }

  return (
    <div className="relative mx-auto max-w-4xl">
      <div
        aria-hidden="true"
        className="absolute bottom-2 left-[19px] top-2 w-px bg-gradient-to-b from-neon-cyan/70 via-neon-purple/60 to-neon-magenta/70"
      />

      <ol className="space-y-6">
        {items.map((item) => (
          <li key={item.code} className="relative pl-14">
            <span className="absolute left-0 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-neon-cyan/40 bg-void text-neon-cyan shadow-[0_0_18px_rgba(0,240,255,0.18)]">
              <Icon name={item.icon} className="h-5 w-5" />
            </span>

            <div className="panel p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] tracking-[0.2em] text-neon-magenta">
                  {item.code} / {item.period}
                </span>
                <span className="theme-chip px-2 py-1 font-mono text-[10px] tracking-wider text-muted">
                  {item.location}
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl font-bold text-ink">
                {item.role}
              </h3>
              <p className="mt-1 font-mono text-sm text-neon-cyan">
                {item.company}
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {item.description}
              </p>

              {item.highlights.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <Icon
                        name="chevronRight"
                        className="mt-0.5 h-4 w-4 shrink-0 text-neon-cyan"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
