import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "About",
  description: "The full story behind Kaung Zaw Han (Kevin).",
};

export default function AboutPage() {
  return (
    <PagePlaceholder
      code="02"
      title="ABOUT ME"
      description="The full dossier: my story, stack, education and everything in between. This module is queued up next."
      features={[
        "Full biography & journey",
        "Technology stack & skill bars",
        "Education & languages",
        "Soft skills breakdown",
      ]}
    />
  );
}
