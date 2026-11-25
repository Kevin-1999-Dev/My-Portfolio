"use client";

import { profile } from "@/lib/profile";
import ProfileCard from "./ProfileCard";

export default function ProfileShowcase() {
  const email =
    profile.socials.find((social) => social.label === "EMAIL")?.href ?? "#";

  return (
    <div id="profile" className="scroll-mt-24">
      <ProfileCard
        avatarUrl={profile.flags.profilePhoto ? "/images/profile.png" : undefined}
        name={profile.name}
        title={profile.roles[0]}
        handle=""
        status=""
        contactText="Contact"
        onContactClick={() => {
          window.location.href = email;
        }}
        theme="dark"
        backdropColor="#0b1220"
        radius={18}
        holo={0.85}
        glare={0.5}
        tiltStrength={14}
        parallax={10}
      />
    </div>
  );
}
