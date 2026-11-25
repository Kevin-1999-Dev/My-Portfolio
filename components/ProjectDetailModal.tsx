"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { ProjectItem } from "@/lib/profile";
import { Icon } from "./Icons";

export default function ProjectDetailModal({
  project,
  onClose,
}: {
  project: ProjectItem;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6">
      <div
        aria-hidden="true"
        onClick={onClose}
        className="modal-backdrop absolute inset-0"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-detail-title"
        className="panel modal-panel relative top-2.5 z-10 mx-auto flex max-h-[calc(100vh-2rem)] w-full max-w-2xl flex-col"
      >
        <div className="absolute right-5 top-5 flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.18em] text-muted">
            ESC
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close detail"
            className="theme-chip clip-corner-sm grid h-9 w-9 place-items-center text-muted"
          >
            <Icon name="close" className="h-4 w-4" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-7 sm:p-9">
          <p className="font-mono text-[11px] tracking-[0.22em] text-neon-magenta">
            {"// PROJECT FILE — "}
            {project.code}
          </p>
          <h3
            id="project-detail-title"
            className="mt-3 pr-12 font-display text-3xl font-bold text-ink"
          >
            {project.title}
          </h3>
          <p className="mt-1 font-mono text-sm text-neon-cyan">
            {project.tag} · {project.year}
          </p>
          <p className="mt-2 font-mono text-xs tracking-wider text-muted">
            {project.category}
          </p>

          <div className="theme-divider mt-6 border-t pt-6">
            <p className="text-lg leading-relaxed text-muted">
              {project.description}
            </p>
          </div>

          <ul className="mt-5 space-y-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 text-sm text-muted"
              >
                <Icon
                  name="chevronRight"
                  className="mt-0.5 h-4 w-4 shrink-0 text-neon-magenta"
                />
                {highlight}
              </li>
            ))}
          </ul>

          <dl className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="theme-inset p-4">
              <dt className="font-mono text-[10px] tracking-[0.18em] text-muted">
                TECH STACK
              </dt>
              <dd className="mt-1 text-base font-semibold text-ink">
                {project.tech.join(" · ")}
              </dd>
            </div>
            <div className="theme-inset p-4">
              <dt className="font-mono text-[10px] tracking-[0.18em] text-muted">
                RESPONSIVE
              </dt>
              <dd className="mt-1 text-base font-semibold text-ink">
                {project.responsive}
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon"
              >
                LIVE DEMO
                <Icon name="external" className="h-4 w-4" />
              </a>
            )}
            {project.source && (
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                SOURCE CODE
                <Icon name="github" className="h-4 w-4" />
              </a>
            )}
            <button type="button" onClick={onClose} className="btn-ghost">
              CLOSE
              <Icon name="close" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
