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

const BIRTHPLACE = "Yangon, Myanmar";
const DEPARTED_MYANMAR = "03 Mar 2024";

export const profile = {
  name: "Kaung Zaw Han",
  alias: "Kevin",
  initials: "KZH",
  handle: "kevin-1999-dev",
  code: "OPERATIVE_KZH_1999",
  roles: ["Software Developer", "Web Developer"],
  location: "Bangkok, Thailand",
  journeyStart: "May 2022",
  copyrightYear: 2026,
  availableForWork: true,

  shortBio:
    "Backend-focused developer who started with C# desktop apps in 2022 and quickly fell for the web. I build reliable systems with PHP & Laravel, while sharpening the front end along the way.",

  fullBio:
    `I'm Kaung Zaw Han, but you can call me Kevin — a nickname inspired by the kid in my favorite childhood movie, Home Alone. Born in ${BIRTHPLACE}, I left Myanmar on ${DEPARTED_MYANMAR} and now live in Bangkok, Thailand. Since May 2022 I've been in software development, starting with C# and Windows applications before discovering my real passion for the web. Today I spend most of my time on the back end (PHP, Laravel, REST APIs) and I'm constantly leveling up the front end too. My goal: build a globally impactful product and grow from junior to senior to leadership.`,

  stats: [
    {
      value: "04+",
      label: "YEARS CODING",
      icon: "terminal" as const,
      modal: {
        title: "04+ Years Coding",
        subtitle: "TIMELINE // MAY 2022 → PRESENT",
        paragraphs: [
          "My journey began in May 2022 with C# and Windows desktop applications. A few months later I discovered web development and never looked back.",
          "Since then I've moved through HTML, CSS, JavaScript, PHP and Laravel — always with a bias toward the back end.",
        ],
        rows: [
          { label: "STARTED", value: "May 2022" },
          { label: "FIRST STACK", value: "C# / Windows" },
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
          { label: "OTHER", value: "C# · Bootstrap · Git / GitHub" },
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
          { label: "MUSIC", value: "K-pop · R&B · HipHop · Pop · EDM" },
          { label: "SPORT", value: "Football" },
          { label: "LANGUAGES", value: "MM · EN · JP (N-5) · KR (basic)" },
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
          `I was born in Yangon, Myanmar and lived there until I left on ${DEPARTED_MYANMAR}. Since then, Bangkok has been home.`,
          "I'm the only son in my family, and I carry both places with me — Yangon is where I started, Bangkok is where I'm building now.",
        ],
        rows: [
          { label: "BORN", value: BIRTHPLACE },
          { label: "CURRENT", value: "Bangkok, Thailand" },
          { label: "LEFT MYANMAR", value: DEPARTED_MYANMAR },
          { label: "TIMEZONE", value: "ICT · UTC+7" },
        ],
      } satisfies DetailSection,
    },
    {
      icon: "user" as const,
      label: "ALIAS",
      value: "Kevin",
      detail: "Named after the Home Alone kid",
      modal: {
        title: "Alias: Kevin",
        subtitle: "IDENTITY // FILE 002",
        paragraphs: [
          "My full name is Kaung Zaw Han, but most people call me Kevin — that's my nickname, inspired by the child actor in my favorite childhood movie, Home Alone.",
          "Either name works. If you're wondering which one to use, pick whichever is easier for you.",
        ],
        rows: [
          { label: "FULL NAME", value: "Kaung Zaw Han" },
          { label: "NICKNAME", value: "Kevin" },
          { label: "INSPIRATION", value: "Home Alone" },
          { label: "GITHUB", value: "@Kevin-1999-Dev" },
        ],
      } satisfies DetailSection,
    },
    {
      icon: "terminal" as const,
      label: "CODE SINCE",
      value: "May 2022",
      detail: "Started with C# desktop applications",
      modal: {
        title: "Coding Since May 2022",
        subtitle: "ORIGIN STORY // COMMIT 001",
        paragraphs: [
          "I started in software development in May 2022, first with C# and Windows applications. That's where I learned the basics of programming.",
          "Then I discovered web development — HTML, CSS and JavaScript — and my interest grew fast. I later explored PHP and Laravel and found I enjoyed back-end work even more.",
        ],
        rows: [
          { label: "STARTED", value: "May 2022" },
          { label: "FIRST LANGUAGE", value: "C#" },
          { label: "WEB BASICS", value: "HTML · CSS · JavaScript" },
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
      value: "MM · EN · JP · KR",
      detail: "Native · Conversational · N-5 · Basic",
      modal: {
        title: "Languages",
        subtitle: "COMMS // FOUR SYSTEMS",
        paragraphs: [
          "Myanmar is my native tongue and English is conversational — good enough to collaborate, explain ideas and write code documentation.",
          "I also study Japanese (JLPT N-5) and Korean at a basic level. Both are works in progress, but I enjoy the learning process.",
        ],
        rows: [
          { label: "MYANMAR", value: "Native" },
          { label: "ENGLISH", value: "Conversational" },
          { label: "JAPANESE", value: "JLPT N-5" },
          { label: "KOREAN", value: "Basic" },
        ],
      } satisfies DetailSection,
    },
    {
      icon: "music" as const,
      label: "OFF-DUTY",
      value: "Music & Football",
      detail: "K-pop · R&B · HipHop · Pop · EDM · Football",
      modal: {
        title: "Off-Duty",
        subtitle: "DOWNTIME // RECHARGE",
        paragraphs: [
          "Music is a constant in my life — I listen across K-pop, R&B, HipHop, Pop and EDM, depending on the mood and what I'm building.",
          "When I'm away from the screen, I play football with friends. It's the best way to reset after a long debugging session.",
        ],
        rows: [
          { label: "MUSIC", value: "K-pop · R&B · HipHop · Pop · EDM" },
          { label: "SPORT", value: "Football" },
          { label: "WHERE", value: "Bangkok, Thailand" },
          { label: "MOST PLAYED", value: "Whatever's on repeat" },
        ],
      } satisfies DetailSection,
    },
    {
      icon: "target" as const,
      label: "MISSION",
      value: "Global Impact",
      detail: "Junior → Senior → Manager",
      modal: {
        title: "The Mission",
        subtitle: "ROADMAP // NEXT CHAPTER",
        paragraphs: [
          "I want to create my own product application with global impact — something useful that reaches people well beyond my own circle.",
          "Along the way, my plan is to grow from junior to senior and eventually into a managerial role, improving my skills at every step.",
        ],
        rows: [
          { label: "SHORT TERM", value: "Senior developer" },
          { label: "LONG TERM", value: "Managerial role" },
          { label: "BIG GOAL", value: "Globally impactful product" },
          { label: "STATUS", value: "In progress" },
        ],
      } satisfies DetailSection,
    },
  ],

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
   *   1. Drop your photo at  public/images/profile.jpg
   *   2. Drop your CV at      public/cv.pdf
   *   3. Flip the flags below to `true`.
   * No other code changes are needed — placeholders swap out automatically.
   */
  flags: {
    profilePhoto: false,
    cv: false,
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "HOME", code: "01" },
  { href: "/about", label: "ABOUT", code: "02" },
  { href: "/projects", label: "PROJECTS", code: "03" },
  { href: "/contact", label: "CONTACT", code: "04" },
] as const;
