# Portfolio V2 — Cyberpunk UI

New portfolio for **Kaung Zaw Han (Han)**, built on Next.js 16 + Tailwind 4.

## SPA navigation

The site is a single-route SPA: `app/page.tsx` renders Home, Project or Journey based on the active tab in `components/TabContext.tsx`. Navbar tabs are buttons, so switching tabs never reloads the page or changes the URL. A neon sweep plus a fade/slide-in (`components/PageTransition.tsx` + `.page-enter` in `app/globals.css`) plays on each tab change. `next.config.ts` also uses `output: "export"` with `trailingSlash` and unoptimized images, so a static `out/` folder can be deployed anywhere.

## Adding the profile photo and CV (not ready yet)

Both are placeholders right now. To activate them:

1. Save your photo as `public/images/profile.png` (already added — `profilePhoto` is on)
2. Save your CV as `public/cv.pdf`
3. Open `lib/profile.ts` and set `flags.cv = true`

All bio text, facts, social links, stats and work experience live in `lib/profile.ts`.

## Theme, typography & background

- **Dark / light mode** — toggle in the navbar (top right). The choice is saved in `localStorage` and applied before first paint, so there is no flash. Theme colors live at the top of `app/globals.css` (`--neon-*`, `--panel-bg`, `--ink`, `--muted`, etc.).
- **Font sizes** — key sizes are set with Tailwind classes inside `components/` (hero, section headings, card values, nav links). Adjust them there.
- **Animated background** — `.cyber-backdrop` in `app/layout.tsx` layers a thunderstorm (`components/CyberThunder.tsx`: three branching lightning bolts with two independent strike cycles + sky flashes) behind neon rain (72 angled glowing drops from `components/CyberRain.tsx`), plus a slow perspective grid, faint 3D rings, drifting orbs and a sweep beam. All keyframes are in `app/globals.css`, and motion respects `prefers-reduced-motion`.

## Project structure

- `app/page.tsx` — Home page (hero, profile card, facts, CV panel)
- `app/projects` — clean 3-per-row project gallery (Native Farm first) with detail boxes; clicking a card opens a detail popup with demo/source links. Data lives in `lib/profile.ts` under `projects`.
- `app/journey` — work-experience page; entries come from `profile.experience` in `lib/profile.ts`
- `components/` — Navbar, Footer, Hero, ProfileCard, Facts, CvDownload, TypeWriter
- `app/globals.css` — cyberpunk theme, neon palette, glitch/scanline effects
- `lib/profile.ts` — single source of truth for all profile content, including the `modal` detail data for every Field Notes card
- Field Notes cards are clickable and open a detail popup (Esc / backdrop / close button all dismiss it; focus returns to the card)

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
