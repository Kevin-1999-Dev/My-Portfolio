"use client";

import { useEffect, useState } from "react";
import PixelTransition from "./PixelTransition";

export default function PagePixelTransition() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let timer = 0;

    function play() {
      window.clearTimeout(timer);
      setActive(true);
      timer = window.setTimeout(() => setActive(false), 1000);
    }

    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      const href = anchor?.getAttribute("href");
      if (!href || !href.startsWith("/") || anchor?.target === "_blank") return;
      play();
    }

    document.addEventListener("app-tab-change", play);
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("app-tab-change", play);
      document.removeEventListener("click", onClick, true);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[200]" aria-hidden="true">
      <PixelTransition
        firstContent={<div className="h-full w-full" />}
        secondContent={<div className="h-full w-full" />}
        active={active}
        trigger="click"
        gridSize={46}
        pixelColor="#00f0ff"
        mosaic={0.45}
        animationStepDuration={0.4}
        pattern="random"
        pixelAnimation="grow"
        pixelShape="square"
        randomness={0.4}
        className="h-full"
        style={{
          width: "100%",
          maxWidth: "none",
          height: "100%",
          borderRadius: 0,
        }}
      />
    </div>
  );
}
