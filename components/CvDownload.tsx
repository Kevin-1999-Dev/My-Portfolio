import { profile } from "@/lib/profile";
import { Icon } from "./Icons";

export default function CvDownload() {
  const available = profile.flags.cv;

  return (
    <section id="cv" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-16 sm:px-8 lg:px-12">
      <div className="panel panel-magenta relative overflow-hidden p-8 sm:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-neon-magenta/10 blur-3xl"
        />

        <div className="relative grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="font-mono text-xs tracking-[0.28em] text-neon-magenta">
              {"// 03. DOCUMENT"}
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              GET MY <span className="neon-magenta">CV</span>
            </h2>
            <p className="mt-3 max-w-lg text-xl text-muted">
              A one-page rundown of my experience, stack and the systems I&apos;ve
              shipped. One click, no forms.
            </p>

            <div className="theme-inset mt-6 inline-flex flex-wrap items-center gap-3 px-4 py-3 font-mono text-xs">
              <Icon name="fileText" className="h-5 w-5 text-neon-cyan" />
              <span className="text-ink">KAUNG_ZAW_HAN_CV.PDF</span>
              <span
                className={`tracking-widest ${
                  available ? "text-neon-lime" : "text-neon-magenta"
                }`}
              >
                {available ? "READY" : "PENDING UPLOAD"}
              </span>
            </div>

            {!available && (
              <p className="mt-4 max-w-lg font-mono text-xs leading-relaxed text-muted">
                DEV NOTE // CV isn&apos;t uploaded yet. Drop your PDF at{" "}
                <code className="text-neon-cyan">public/cv.pdf</code> and set{" "}
                <code className="text-neon-cyan">flags.cv = true</code> in{" "}
                <code className="text-neon-cyan">lib/profile.ts</code> to activate
                the button.
              </p>
            )}
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            {available ? (
              <a
                href="/cv.pdf"
                download="Kaung_Zaw_Han_CV.pdf"
                className="btn-neon w-full md:w-auto"
              >
                DOWNLOAD CV
                <Icon name="download" className="h-4 w-4" />
              </a>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                title="CV coming soon"
                className="btn-ghost w-full cursor-not-allowed opacity-50 md:w-auto"
              >
                COMING SOON
                <Icon name="fileText" className="h-4 w-4" />
              </button>
            )}
            <span className="font-mono text-[10px] tracking-[0.18em] text-muted">
              {available
                ? "FILE SECURED // READY TO DOWNLOAD"
                : "UPLOAD IN PROGRESS // 00%"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
