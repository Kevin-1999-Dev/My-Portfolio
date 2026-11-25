"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { profile, type ProjectItem } from "@/lib/profile";
import ProjectCard from "./ProjectCard";
import ElectricBorder from "./ElectricBorder";
import ProjectDetailModal from "./ProjectDetailModal";

export default function ProjectGallery() {
  const [active, setActive] = useState<ProjectItem | null>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  function open(project: ProjectItem, event: MouseEvent<HTMLButtonElement>) {
    returnFocusRef.current = event.currentTarget;
    setActive(project);
  }

  const close = useCallback(() => {
    setActive(null);
    returnFocusRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!active) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [active, close]);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {profile.projects.map((project) => (
          <ElectricBorder
            key={project.code}
            color={project.accent}
            glowColor={project.accent}
            borderRadius={12}
            thickness={1.2}
            chaos={0.35}
            spread={0.45}
            strands={3}
            glow={0.5}
            intensity={0.75}
            arcs={1}
            cursorRadius={80}
          >
            <ProjectCard project={project} onOpen={open} />
          </ElectricBorder>
        ))}
      </div>

      {active && <ProjectDetailModal project={active} onClose={close} />}
    </>
  );
}
