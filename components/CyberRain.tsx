/**
 * Deterministic neon rain — positions are generated from a fixed seed so the
 * server and client render identical markup (no hydration mismatch).
 */
function createRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 1664525 + 1013904223) % 4294967296;
    return value / 4294967296;
  };
}

const COLORS = ["cyan", "magenta", "purple"] as const;

export default function CyberRain() {
  const random = createRandom(20261121);

  const drops = Array.from({ length: 72 }, (_, index) => {
    const left = random() * 100;
    const delay = random() * 7;
    const duration = 0.75 + random() * 1.5;
    const length = 34 + random() * 96;
    const opacity = 0.18 + random() * 0.42;
    const color = COLORS[Math.floor(random() * COLORS.length)];
    const blur = random() > 0.72;

    return { index, left, delay, duration, length, opacity, color, blur };
  });

  return (
    <div className="cyber-rain" aria-hidden="true">
      {drops.map((drop) => (
        <span
          key={drop.index}
          className={`rain-drop rain-${drop.color} ${drop.blur ? "rain-blur" : ""}`}
          style={{
            left: `${drop.left}%`,
            height: `${drop.length}px`,
            opacity: drop.opacity,
            animationDelay: `-${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
