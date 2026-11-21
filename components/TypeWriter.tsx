"use client";

import { useEffect, useState } from "react";

export default function TypeWriter({ words }: { words: readonly string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex] ?? "";
    const fullyTyped = !deleting && text === word;
    const fullyCleared = deleting && text === "";

    const delay = fullyTyped ? 1700 : fullyCleared ? 280 : deleting ? 42 : 85;

    const timer = window.setTimeout(() => {
      if (fullyTyped) {
        setDeleting(true);
      } else if (fullyCleared) {
        setDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
      } else if (deleting) {
        setText(word.slice(0, text.length - 1));
      } else {
        setText(word.slice(0, text.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, wordIndex, words]);

  return (
    <span className="inline-flex items-center gap-2">
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true" className="text-neon-cyan">
        {text}
      </span>
      <span aria-hidden="true" className="type-cursor" />
    </span>
  );
}
