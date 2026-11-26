"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type TabKey = "home" | "projects" | "journey";

type TabContextValue = {
  active: TabKey;
  setActive: (tab: TabKey) => void;
};

const TabContext = createContext<TabContextValue | null>(null);

export function TabProvider({ children }: { children: ReactNode }) {
  const [active, setActiveState] = useState<TabKey>("home");

  function setActive(tab: TabKey) {
    setActiveState(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.dispatchEvent(new CustomEvent("app-tab-change"));
  }

  return (
    <TabContext.Provider value={{ active, setActive }}>
      {children}
    </TabContext.Provider>
  );
}

export function useTab() {
  const context = useContext(TabContext);
  if (!context) throw new Error("useTab must be used inside TabProvider");
  return context;
}
