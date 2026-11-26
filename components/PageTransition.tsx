"use client";

import { useEffect, useState } from "react";

export default function PageTransition() {
  const [run, setRun] = useState(0);

  useEffect(() => {
    function onTabChange() {
      setRun((value) => value + 1);
    }
    window.addEventListener("app-tab-change", onTabChange);
    return () => window.removeEventListener("app-tab-change", onTabChange);
  }, []);

  if (run === 0) return null;

  return (
    <div key={run} className="page-sweep" aria-hidden="true">
      <span className="page-sweep-line" />
    </div>
  );
}
