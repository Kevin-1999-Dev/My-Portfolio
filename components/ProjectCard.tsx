import Image from "next/image";
import type { CSSProperties, MouseEvent } from "react";
import type { ProjectItem } from "@/lib/profile";
import { Icon } from "./Icons";

function domainOf(url?: string) {
  if (!url) return "local.build";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "local.build";
  }
}

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: ProjectItem;
  onOpen: (project: ProjectItem, event: MouseEvent<HTMLButtonElement>) => void;
}) {
  const artStyle = { "--accent": project.accent } as CSSProperties;

  return (
    <button
      type="button"
      onClick={(event) => onOpen(project, event)}
      aria-label={`Open details for ${project.title}`}
      className="gallery-frame group block w-full text-left"
    >
      <div className="gallery-art" style={artStyle}>
        {project.screenshot ? (
          <>
            <Image
              src={project.screenshot}
              alt={`${project.title} website UI`}
              fill
              priority={project.code === "01"}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top"
            />
            <span className="gallery-live-badge">LIVE UI</span>
          </>
        ) : (
          <>
            <div className="preview-chrome">
              <span className="preview-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="preview-url">
                {domainOf(project.demo ?? project.source)}
              </span>
            </div>
            <div className="preview-canvas">
              <span className="preview-glow" />
              <div className="preview-lines">
                <span />
                <span />
                <span />
              </div>
              <div className="preview-blocks">
                <span />
                <span />
                <span />
              </div>
              <span className="preview-name">{project.title}</span>
            </div>
          </>
        )}
      </div>

      <div className="gallery-detail" style={artStyle}>
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[10px] tracking-[0.18em] text-neon-magenta">
            {project.code} {"//"} {project.tag}
          </span>
          <span className="font-mono text-[10px] text-muted">{project.year}</span>
        </div>
        <h3 className="mt-2 font-display text-xl font-bold text-ink">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-[10px] tracking-wider text-neon-cyan">
          {project.category}
        </p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="theme-chip px-2 py-1 font-mono text-[10px] text-muted"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="theme-chip px-2 py-1 font-mono text-[10px] text-neon-cyan">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-divider pt-3 font-mono text-[10px] tracking-[0.16em] text-muted">
          <span>{project.demo ? "LIVE DEMO" : "SOURCE"}</span>
          <span className="flex items-center gap-1 text-neon-cyan">
            VIEW DETAIL
            <Icon
              name="chevronRight"
              className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </span>
        </div>
      </div>
    </button>
  );
}
