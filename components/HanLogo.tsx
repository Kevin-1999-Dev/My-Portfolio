"use client";

import NeonLogo from "./NeonLogo";

export default function HanLogo() {
  return (
    <NeonLogo
      text="HAN"
      fontFamily="Arial"
      fontWeight={900}
      scale={0.88}
      baseColor="#07131f"
      colors={[
        "#0b1c33",
        "#1d4a89",
        "#00f0ff",
        "#7df9ff",
        "#ff2bd6",
        "#ffffff",
      ]}
      heat={0.65}
      radius={1.35}
      softness={0.32}
      swell={0.18}
      idle="drift"
      speed={2}
      igniteOnClick
      interactive
      intro
    />
  );
}
