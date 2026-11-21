import Link from "next/link";
import { Icon } from "./Icons";

type PagePlaceholderProps = {
  code: string;
  title: string;
  description: string;
  features: string[];
};

export default function PagePlaceholder({
  code,
  title,
  description,
  features,
}: PagePlaceholderProps) {
  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12">
      <div className="panel w-full p-8 sm:p-14">
        <p className="font-mono text-xs tracking-[0.28em] text-neon-magenta">
          {"// "}{code}. MODULE
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-6xl">
          <span className="gradient-text">{title}</span>
        </h1>
        <p className="mt-5 max-w-xl text-xl leading-relaxed text-muted">
          {description}
        </p>

        <ul className="mt-9 grid gap-3 sm:grid-cols-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="theme-chip flex items-center gap-3 px-4 py-3 font-mono text-sm tracking-wider text-muted"
            >
              <Icon name="chevronRight" className="h-4 w-4 shrink-0 text-neon-cyan" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <Link href="/" className="btn-neon">
            BACK TO HOME
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
          <span className="font-mono text-[11px] tracking-[0.2em] text-neon-magenta">
            STATUS: UNDER CONSTRUCTION
          </span>
        </div>
      </div>
    </section>
  );
}
