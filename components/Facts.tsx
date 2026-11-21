"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { profile, type DetailSection } from "@/lib/profile";
import { Icon, type IconName } from "./Icons";

type DetailCard = {
  icon: IconName;
  label: string;
  value: string;
  detail?: string;
  modal: DetailSection;
};

export default function Facts() {
  const [active, setActive] = useState<DetailCard | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  function open(card: DetailCard, event: MouseEvent<HTMLButtonElement>) {
    returnFocusRef.current = event.currentTarget;
    setActive(card);
  }

  function close() {
    setActive(null);
    returnFocusRef.current?.focus();
  }

  useEffect(() => {
    if (!active) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
        returnFocusRef.current?.focus();
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
  }, [active]);

  return (
    <section
      id="facts"
      className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20 sm:px-8 lg:px-12"
    >
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs tracking-[0.28em] text-neon-magenta">
            {"// 02. DOSSIER"}
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            FIELD <span className="gradient-text">NOTES</span>
          </h2>
          <p className="mt-2 text-muted">
            A few facts from the human behind the terminal. Click any card to
            open its file.
          </p>
        </div>
        <span className="hidden font-mono text-[10px] tracking-[0.2em] text-muted sm:block">
          FILE: FACTS.DAT // DECRYPTED
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {profile.stats.map((stat) => (
          <button
            key={stat.label}
            type="button"
            onClick={(event) => open(stat, event)}
            aria-label={`Open details for ${stat.label}`}
            className="panel group flex w-full items-center gap-4 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan/40 hover:shadow-[0_10px_40px_rgba(0,240,255,0.08)]"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center border border-neon-magenta/30 bg-neon-magenta/5 text-neon-magenta">
              <Icon name={stat.icon} className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="font-display text-3xl font-bold text-ink">
                {stat.value}
              </p>
              <p className="mt-0.5 font-mono text-[11px] tracking-[0.14em] text-muted">
                {stat.label}
              </p>
            </div>
            <Icon
              name="chevronRight"
              className="ml-auto h-4 w-4 shrink-0 text-neon-cyan opacity-0 transition-opacity group-hover:opacity-100"
            />
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {profile.facts.map((fact, index) => (
          <button
            key={fact.label}
            type="button"
            onClick={(event) => open(fact, event)}
            aria-label={`Open details for ${fact.label}`}
            className="panel group w-full p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan/40 hover:shadow-[0_10px_40px_rgba(0,240,255,0.08)]"
          >
            <div className="flex items-start justify-between">
              <span className="clip-corner-sm grid h-10 w-10 place-items-center border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan">
                <Icon name={fact.icon} className="h-5 w-5" />
              </span>
              <span className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-muted/60">
                  0{index + 1}
                </span>
                <Icon
                  name="chevronRight"
                  className="h-3 w-3 text-neon-cyan opacity-0 transition-opacity group-hover:opacity-100"
                />
              </span>
            </div>
            <p className="mt-5 font-mono text-[11px] tracking-[0.2em] text-muted">
              {fact.label}
            </p>
            <h3 className="mt-1 text-xl font-semibold text-ink">{fact.value}</h3>
            <p className="mt-2 text-base leading-snug text-muted">{fact.detail}</p>
          </button>
        ))}
      </div>

      {active &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6">
          <div
            aria-hidden="true"
            onClick={close}
            className="modal-backdrop absolute inset-0"
          />

          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="detail-title"
            className="panel modal-panel relative top-2.5 z-10 mx-auto flex max-h-[calc(100vh-2rem)] w-full max-w-2xl flex-col"
          >
            <div className="absolute right-5 top-5 flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.18em] text-muted">
                ESC
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close detail"
                className="theme-chip clip-corner-sm grid h-9 w-9 place-items-center text-muted"
              >
                <Icon name="close" className="h-4 w-4" />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto p-7 sm:p-9">
              <p className="font-mono text-[11px] tracking-[0.22em] text-neon-magenta">
                {"// DETAIL.EXE — "}
                {active.label}
              </p>
              <h3
                id="detail-title"
                className="mt-3 pr-12 font-display text-2xl font-bold text-ink sm:text-3xl"
              >
                {active.modal.title}
              </h3>
              <p className="mt-1 font-mono text-sm text-neon-cyan">
                {active.modal.subtitle}
              </p>

              <div className="theme-divider mt-6 space-y-4 border-t pt-6">
                {active.modal.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>

              <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                {active.modal.rows.map((row) => (
                  <div key={row.label} className="theme-inset p-4">
                    <dt className="font-mono text-[10px] tracking-[0.18em] text-muted">
                      {row.label}
                    </dt>
                    <dd className="mt-1 text-base font-semibold text-ink">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex justify-end">
                <button type="button" onClick={close} className="btn-ghost">
                  CLOSE
                  <Icon name="close" className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          </div>,
          document.body
        )}
    </section>
  );
}
