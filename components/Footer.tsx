import Link from "next/link";
import { profile } from "@/lib/profile";
import { Icon } from "./Icons";

export default function Footer() {
  return (
    <footer className="theme-footer relative z-10">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div>
            <Link href="/" className="font-display text-xl tracking-[0.16em] text-ink">
              HAN<span className="text-neon-magenta">{"//"}</span>DEV
            </Link>
            <p className="mt-2 max-w-sm font-mono text-sm leading-relaxed text-muted">
              Systems behind the screens. Born in Yangon, based in Bangkok.
            </p>
          </div>

          <div className="flex gap-3">
            {profile.socials.map((social) => {
              const external = social.href.startsWith("http");
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="theme-chip clip-corner-sm grid h-10 w-10 place-items-center text-muted transition-all hover:border-neon-cyan/60 hover:bg-neon-cyan/10 hover:text-neon-cyan"
                >
                  <Icon name={social.icon} className="h-[18px] w-[18px]" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="theme-divider mt-8 flex flex-col gap-2 border-t pt-6 font-mono text-[11px] tracking-[0.18em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {profile.copyrightYear} {profile.name.toUpperCase()} — ALL RIGHTS RESERVED</span>
          <span>DESIGNED &amp; BUILT IN CYBERSPACE</span>
        </div>
      </div>
    </footer>
  );
}
