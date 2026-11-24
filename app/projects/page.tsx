import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Project",
  description: "Projects built by Kaung Zaw Han.",
};

export default function ProjectsPage() {
  return (
    <PagePlaceholder
      code="03"
      title="PROJECT"
      description="A gallery of shipped systems — from Laravel back ends to Vue front ends. This module is queued up next."
      features={[
        "Native Farm",
        "Pizza Order System",
        "Book House",
        "Shop.Com & Portfolio V1",
      ]}
    />
  );
}
