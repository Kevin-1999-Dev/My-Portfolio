import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kaung Zaw Han (Kevin).",
};

export default function ContactPage() {
  return (
    <PagePlaceholder
      code="04"
      title="CONTACT"
      description="Open a channel: email, phone, GitHub or Facebook. A full contact terminal is coming soon."
      features={[
        "Direct email link",
        "Phone & messaging",
        "GitHub & Facebook",
        "Location: Bangkok, Thailand",
      ]}
    />
  );
}
