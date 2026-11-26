/**
 * Single source of truth for portfolio content.
 * Every page reads from here, so updating your bio later only happens once.
 */

export type IconName =
  | "mapPin"
  | "user"
  | "terminal"
  | "server"
  | "graduation"
  | "globe"
  | "music"
  | "target"
  | "github"
  | "facebook"
  | "mail"
  | "phone";

/** Content shown inside a Field Notes detail popup. */
export type DetailSection = {
  readonly title: string;
  readonly subtitle: string;
  readonly paragraphs: readonly string[];
  readonly rows: readonly { readonly label: string; readonly value: string }[];
};

/** Projects displayed in the 3D gallery room. */
export type ProjectItem = {
  readonly code: string;
  readonly title: string;
  readonly tag: string;
  readonly year: string;
  readonly category: string;
  readonly icon: "globe" | "server" | "database" | "code";
  readonly accent: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly tech: readonly string[];
  readonly responsive: "Yes" | "No";
  readonly screenshot?: string;
  readonly demo?: string;
  readonly source?: string;
};

/** Work-experience entries shown on the Journey page. */
export type ExperienceItem = {
  readonly code: string;
  readonly period: string;
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly icon: "briefcase" | "terminal" | "server" | "code";
  readonly description: string;
  readonly highlights: readonly string[];
};

const BIRTHPLACE = "Yangon, Myanmar";
const DEPARTED_MYANMAR = "Mar 2025";

export const profile = {
  name: "Kaung Zaw Han",
  alias: "Han",
  initials: "KZH",
  handle: "han-1999-dev",
  code: "OPERATIVE_KZH_1999",
  roles: ["Software Developer", "Web Developer"],
  location: "Bangkok, Thailand",
  journeyStart: "May 2022",
  copyrightYear: 2026,
  availableForWork: true,

  shortBio:
    "Backend-focused developer who first learned C# and Windows applications in 2022, then found my real interest in web development. I build reliable systems with PHP & Laravel, while sharpening the front end along the way.",

  fullBio:
    `I'm Kaung Zaw Han, but you can call me Han. Born in ${BIRTHPLACE}, I left Myanmar in ${DEPARTED_MYANMAR} and arrived in Chiang Mai, Thailand that same month — Bangkok is where I live now. I got my first job in 2024 at Zote by Focus Innovation. In 2022 I first learned C# and Windows application development, but I quit that path — it's something I learned, not professional experience. Then I discovered web development and found my real passion. Today I spend most of my time on the back end (PHP, Laravel, REST APIs) and I'm constantly leveling up the front end too. My goal: build a globally impactful product and grow from junior to senior to leadership.`,

  stats: [
    {
      value: "04+",
      label: "YEARS CODING",
      icon: "terminal" as const,
      modal: {
        title: "04+ Years Coding",
        subtitle: "TIMELINE // MAY 2022 → PRESENT",
        paragraphs: [
          "In 2022 I first learned C# and Windows application development, but I quit that path — it was learning only, not professional experience. I then discovered web development and never looked back.",
          "Since then I've moved through HTML, CSS, JavaScript, PHP and Laravel — always with a bias toward the back end.",
        ],
        rows: [
          { label: "STARTED", value: "May 2022" },
          { label: "FIRST LEARNED", value: "C# / Windows apps" },
          { label: "PIVOT", value: "Web development" },
          { label: "CURRENT FOCUS", value: "PHP & Laravel" },
        ],
      } satisfies DetailSection,
    },
    {
      value: "12+",
      label: "TECHNOLOGIES",
      icon: "cpu" as const,
      modal: {
        title: "12+ Technologies",
        subtitle: "STACK // TOOLBOX",
        paragraphs: [
          "I work across the stack, but I'm strongest on the server side. These are the tools I reach for most often.",
          "I'm always picking up new ones and folding what works into how I build.",
        ],
        rows: [
          { label: "BACK-END", value: "PHP · Laravel · REST APIs" },
          { label: "DATABASE", value: "MySQL" },
          { label: "FRONT-END", value: "HTML · CSS · JavaScript · Vue.js · Tailwind" },
          { label: "OTHER", value: "Bootstrap · Git / GitHub" },
        ],
      } satisfies DetailSection,
    },
    {
      value: "05",
      label: "SHIPPED PROJECTS",
      icon: "briefcase" as const,
      modal: {
        title: "05 Shipped Projects",
        subtitle: "ARCHIVE // BUILD LOG",
        paragraphs: [
          "A mix of first experiments, client-style builds and team projects from my on-job training.",
          "Each one taught me something different — from shipping my first page to designing back-end systems with a team.",
        ],
        rows: [
          { label: "NATIVE FARM", value: "HTML · CSS — first project" },
          { label: "PIZZA ORDER SYSTEM", value: "PHP · Laravel (Blade)" },
          { label: "BOOK HOUSE", value: "Laravel — team / OJT" },
          { label: "SHOP.COM & V1", value: "Vue.js · Tailwind" },
        ],
      } satisfies DetailSection,
    },
    {
      value: "∞",
      label: "CURIOSITY",
      icon: "sparkles" as const,
      modal: {
        title: "∞ Curiosity",
        subtitle: "MINDSET // ALWAYS LEARNING",
        paragraphs: [
          "I like staying close to industry trends and experimenting with new tools, then using what works in real projects.",
          "The goal has always been simple: keep improving, ship useful things, and eventually build something with global reach.",
        ],
        rows: [
          { label: "MUSIC", value: "R&B · HipHop · Pop · EDM" },
          { label: "SPORT", value: "Football" },
          { label: "LANGUAGES", value: "Burmese · English" },
          { label: "NEXT UP", value: "A global-impact product" },
        ],
      } satisfies DetailSection,
    },
  ],

  facts: [
    {
      icon: "mapPin" as const,
      label: "LOCATION",
      value: "Bangkok, Thailand",
      detail: `Born in ${BIRTHPLACE} · left ${DEPARTED_MYANMAR}`,
      modal: {
        title: "Bangkok, Thailand",
        subtitle: "CURRENT COORDINATES",
        paragraphs: [
          `I was born in Yangon, Myanmar and left in ${DEPARTED_MYANMAR}. I arrived in Chiang Mai, Thailand that same month, and Bangkok is where I live now.`,
          "Yangon is where I started, Chiang Mai was my first stop in Thailand, and Bangkok is where I'm building now.",
        ],
        rows: [
          { label: "BORN", value: BIRTHPLACE },
          { label: "LEFT MYANMAR", value: DEPARTED_MYANMAR },
          { label: "CHIANG MAI", value: "Mar 2025" },
          { label: "CURRENT", value: "Bangkok, Thailand" },
        ],
      } satisfies DetailSection,
    },
    {
      icon: "user" as const,
      label: "ALIAS",
      value: "Han",
      detail: "Short form of Kaung Zaw Han",
      modal: {
        title: "Alias: Han",
        subtitle: "IDENTITY // FILE 002",
        paragraphs: [
          "My full name is Kaung Zaw Han, but most people call me Han — the last part of my name, and the one that sticks.",
          "Either name works. If you're wondering which one to use, pick whichever is easier for you.",
        ],
        rows: [
          { label: "FULL NAME", value: "Kaung Zaw Han" },
          { label: "NICKNAME", value: "Han" },
          { label: "INITIALS", value: "KZH" },
        ],
      } satisfies DetailSection,
    },
    {
      icon: "terminal" as const,
      label: "CODE SINCE",
      value: "May 2022",
      detail: "First learned C# / Windows apps",
      modal: {
        title: "Coding Since May 2022",
        subtitle: "ORIGIN STORY // COMMIT 001",
        paragraphs: [
          "In 2022 I started learning C# and Windows application development. I quit along that path, so it's something I learned rather than professional experience. Then I discovered web development — HTML, CSS and JavaScript — and my interest grew fast.",
          "In 2024 I got my first job at Zote by Focus Innovation, where learning became real engineering. I later explored PHP and Laravel and found I enjoyed back-end work even more.",
        ],
        rows: [
          { label: "STARTED", value: "May 2022" },
          { label: "FIRST LEARNED", value: "C# · Windows apps" },
          { label: "FIRST JOB", value: "Zote by Focus Innovation · 2024" },
          { label: "BACK-END", value: "PHP · Laravel" },
        ],
      } satisfies DetailSection,
    },
    {
      icon: "server" as const,
      label: "FOCUS",
      value: "Back-End",
      detail: "PHP · Laravel · REST APIs · MySQL",
      modal: {
        title: "Back-End Focus",
        subtitle: "SPECIALIZATION // SERVER SIDE",
        paragraphs: [
          "Most of my time goes into back-end systems: PHP and Laravel for application logic, MySQL for data, and RESTful APIs to connect everything.",
          "I still work on the front end and keep improving there — HTML, CSS, JavaScript, Vue.js and Tailwind — but server-side work is where I feel most at home.",
        ],
        rows: [
          { label: "CORE", value: "PHP · Laravel" },
          { label: "DATA", value: "MySQL" },
          { label: "APIs", value: "RESTful services" },
          { label: "ALSO", value: "Vue.js · Tailwind · JavaScript" },
        ],
      } satisfies DetailSection,
    },
    {
      icon: "graduation" as const,
      label: "EDUCATION",
      value: "Dagon University",
      detail: "Mathematics · B.E.H.S (2) Kamayut",
      modal: {
        title: "Education",
        subtitle: "RECORDS // SCHOOL & UNIVERSITY",
        paragraphs: [
          "I attended B.E.P.S (8) Yangon for Grades 1–5, then B.E.H.S (2) Kamayut from Grade 6 onward.",
          "In 2015–2016 I studied first-year Mathematics at Dagon University. I didn't complete the degree, but the analytical thinking stuck with me — and eventually led me into software.",
        ],
        rows: [
          { label: "SCHOOL", value: "B.E.H.S (2) Kamayut" },
          { label: "EARLIER", value: "B.E.P.S (8) Yangon" },
          { label: "UNIVERSITY", value: "Dagon University" },
          { label: "MAJOR / YEARS", value: "Mathematics · 2015–2016" },
        ],
      } satisfies DetailSection,
    },
    {
      icon: "globe" as const,
      label: "LANGUAGES",
      value: "Burmese · English",
      detail: "Native · Conversational",
      modal: {
        title: "Languages",
        subtitle: "COMMS // TWO SYSTEMS",
        paragraphs: [
          "Burmese is my native tongue and English is conversational — good enough to collaborate, explain ideas and write code documentation.",
          "Those are the two languages I use day to day, both in conversation and in code.",
        ],
        rows: [
          { label: "BURMESE", value: "Native" },
          { label: "ENGLISH", value: "Conversational" },
        ],
      } satisfies DetailSection,
    },
    {
      icon: "music" as const,
      label: "OFF-DUTY",
      value: "Music & Football",
      detail: "R&B · HipHop · Pop · EDM · Football",
      modal: {
        title: "Off-Duty",
        subtitle: "DOWNTIME // RECHARGE",
        paragraphs: [
          "Music is a constant in my life — I listen across R&B, HipHop, Pop and EDM, depending on the mood and what I'm building.",
          "When I'm away from the screen, I play football with friends. It's the best way to reset after a long debugging session.",
        ],
        rows: [
          { label: "MUSIC", value: "R&B · HipHop · Pop · EDM" },
          { label: "SPORT", value: "Football" },
          { label: "WHERE", value: "Bangkok, Thailand" },
          { label: "MOST PLAYED", value: "Whatever's on repeat" },
        ],
      } satisfies DetailSection,
    },
  ],

  projects: [
    {
      code: "01",
      title: "Native Farm",
      tag: "MY FIRST PROJECT",
      year: "2022",
      category: "FRONT-END · E-COMMERCE",
      icon: "globe" as const,
      accent: "#00f0ff",
      description:
        "My very first project in the software journey — a responsive organic food storefront that connects buyers and sellers of natural products. Built from scratch with plain HTML and CSS while I was learning the fundamentals of the web.",
      highlights: [
        "Responsive layout across desktop and mobile",
        "Product listings, offers, gallery and contact sections",
        "First hands-on build with HTML and CSS",
      ],
      tech: ["HTML", "CSS"],
      responsive: "Yes",
      screenshot: "/images/native-farm.png",
      demo: "https://native-farm.vercel.app/",
      source: "https://github.com/Kevin-1999-Dev/Native-Farm-",
    },
    {
      code: "02",
      title: "Pizza Order System",
      tag: "BACK-END · LARAVEL",
      year: "2023",
      category: "FULL-STACK · ORDER SYSTEM",
      icon: "server" as const,
      accent: "#ff2bd6",
      description:
        "A back-end focused ordering system built with Laravel and the Blade engine, credited to CodeLab.",
      highlights: ["Server-side rendering with Blade", "Order flow and back-end logic"],
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "Laravel"],
      responsive: "No",
      source: "https://github.com/Kevin-1999-Dev/Pizza-Order-System",
    },
    {
      code: "03",
      title: "Book House",
      tag: "TEAM · ON-JOB TRAINING",
      year: "2023",
      category: "BACK-END · LIBRARY SYSTEM",
      icon: "database" as const,
      accent: "#9b6bff",
      description:
        "A team project built with friends Simon, Zam and Daung during on-job training — a feature-rich library system with a back-end focus.",
      highlights: ["Collaborative team development", "Laravel back-end with multiple modules"],
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "Laravel"],
      responsive: "Yes",
      source: "https://github.com/Kevin-1999-Dev/group2_book_house",
    },
  ],

  /**
   * Work experience only. Add entries here when the data is ready —
   * the Journey page will render them automatically.
   */
  experience: [] as readonly ExperienceItem[],

  socials: [
    {
      label: "GITHUB",
      icon: "github" as const,
      href: "https://github.com/Kevin-1999-Dev",
    },
    {
      label: "FACEBOOK",
      icon: "facebook" as const,
      href: "https://www.facebook.com/profile.php?id=100011315536472",
    },
    {
      label: "EMAIL",
      icon: "mail" as const,
      href: "mailto:koeshwin9999@gmail.com",
    },
    {
      label: "PHONE",
      icon: "phone" as const,
      href: "tel:+959795496541",
    },
  ],

  /**
   * FEATURE FLAGS
   * ------------------------------------------------------------------
   * You said the profile photo and CV aren't ready yet, so both are off.
   * To activate:
   *   1. Drop your photo at  public/images/profile.png
   *   2. Drop your CV at      public/cv.pdf
   *   3. Flip the flags below to `true`.
   * No other code changes are needed — placeholders swap out automatically.
   */
  flags: {
    profilePhoto: true,
    cv: false,
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "HOME", code: "01", key: "home" as const },
  { href: "/projects", label: "PROJECT", code: "02", key: "projects" as const },
  { href: "/journey", label: "JOURNEY", code: "03", key: "journey" as const },
] as const;
