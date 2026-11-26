import type { Metadata } from "next";
import { orbitron, rajdhani, shareTechMono } from "./fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CyberRain from "@/components/CyberRain";
import CyberThunder from "@/components/CyberThunder";
import { TabProvider } from "@/components/TabContext";
import PagePixelTransition from "@/components/PagePixelTransition";

export const metadata: Metadata = {
  title: {
    default: "Kaung Zaw Han — Software & Web Developer",
    template: "%s // KZH.DEV",
  },
  description:
    "Cyberpunk portfolio of Kaung Zaw Han — a software and web developer born in Yangon, Myanmar and now based in Bangkok, Thailand, building reliable digital products.",
  keywords: [
    "Kaung Zaw Han",
    "Han",
    "portfolio",
    "software developer",
    "web developer",
    "Yangon",
    "Bangkok",
  ],
  authors: [{ name: "Kaung Zaw Han" }],
  openGraph: {
    title: "Kaung Zaw Han — Software & Web Developer",
    description: "Systems behind the screens. Explore the portfolio.",
    type: "website",
  },
};

/** Applies the saved theme before first paint to prevent a flash. */
const themeScript = `
try {
  var saved = localStorage.getItem('portfolio-theme');
  if (saved === 'light' || saved === 'dark') {
    document.documentElement.dataset.theme = saved;
  }
} catch (e) {}
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${orbitron.variable} ${rajdhani.variable} ${shareTechMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <div className="cyber-backdrop" aria-hidden="true">
          <div className="cyber-orb orb-a" />
          <div className="cyber-orb orb-b" />
          <div className="cyber-ring-system">
            <span />
            <span />
            <span />
          </div>
          <div className="cyber-grid-3d" />
          <CyberThunder />
          <CyberRain />
          <div className="cyber-sweep" />
        </div>

        <TabProvider>
          <Navbar />
          <main className="relative z-10 flex-1">{children}</main>
          <Footer />
        </TabProvider>
        <PagePixelTransition />
      </body>
    </html>
  );
}
