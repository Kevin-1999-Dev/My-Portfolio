import { Orbitron, Rajdhani, Share_Tech_Mono } from "next/font/google";

/** Display font — headers, logo, glitch text */
export const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

/** Body font — techy but readable */
export const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

/** Mono font — labels, terminal text, data readouts */
export const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-share-tech-mono",
  display: "swap",
});
