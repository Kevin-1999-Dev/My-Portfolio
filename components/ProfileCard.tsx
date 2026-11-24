import Image from "next/image";
import { profile } from "@/lib/profile";

export default function ProfileCard() {
  const hasPhoto = profile.flags.profilePhoto;

  return (
    <div id="profile" className="relative mx-auto w-full max-w-sm scroll-mt-24">
      <div
        aria-hidden="true"
        className="absolute -inset-4 -z-10 bg-neon-cyan/5 blur-3xl"
      />

      <div className="panel bracket-frame p-6">
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em]">
          <span className="text-neon-cyan">OPERATIVE ID</span>
          <span className="text-muted">NO. 001</span>
        </div>

        <div className="theme-inset mt-5 p-3">
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#0b1220] via-[#0a0e1a] to-[#160a18]">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,240,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,.18) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            {hasPhoto ? (
              <Image
                src="/images/profile.png"
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 640px) 80vw, 360px"
                className="object-cover object-[65%_center]"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                <svg
                  viewBox="0 0 100 100"
                  className="h-24 w-24 text-neon-cyan/40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <circle cx="50" cy="34" r="16" />
                  <path d="M16 90c2-19 16-30 34-30s32 11 34 30" />
                </svg>
                <span className="font-mono text-[10px] tracking-[0.22em] text-neon-cyan">
                  PHOTO // PENDING
                </span>
                <span className="font-mono text-[9px] tracking-[0.14em] text-muted">
                  AWAITING SUBJECT CAPTURE
                </span>
              </div>
            )}

            <span
              aria-hidden="true"
              className="scan-beam absolute left-0 right-0 top-0 h-8 bg-gradient-to-b from-transparent via-neon-cyan/25 to-transparent"
            />
          </div>
        </div>

        <div className="mt-5">
          <p className="font-mono text-[10px] tracking-[0.2em] text-muted">SUBJECT</p>
          <h2 className="mt-1 font-display text-2xl font-bold text-ink">
            {profile.name}
          </h2>
        </div>

        <dl className="theme-divider mt-5 space-y-2 border-t pt-4 font-mono text-xs">
          <div className="flex justify-between gap-4">
            <dt className="text-muted">ROLE</dt>
            <dd className="text-right text-neon-cyan">{profile.roles[0]}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted">BASE</dt>
            <dd className="text-right text-ink">{profile.location}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted">STATUS</dt>
            <dd className="text-right text-neon-lime">
              {profile.availableForWork ? "OPEN TO WORK" : "OFFLINE"}
            </dd>
          </div>
        </dl>

        <div aria-hidden="true" className="barcode mt-5" />
        <p className="mt-2 text-center font-mono text-[9px] tracking-[0.18em] text-muted">
          AUTHORIZED // PORTFOLIO ACCESS
        </p>
      </div>

      <span
        aria-hidden="true"
        className="absolute -right-2 top-10 hidden rotate-90 font-mono text-[9px] tracking-[0.3em] text-muted/60 lg:block"
      >
        IDENTITY_VERIFIED
      </span>
    </div>
  );
}
