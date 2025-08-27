"use client";
import React, { useState, useRef } from "react";
import CompactProfileCard from "./CompactProfileCard";
import ProfileMenu from "./ProfileMenu";

type Profile = {
  id: number;
  name: string;
  slack: string;
  picture: string;
  location: string;
  bio: string;
  keywords: string[];
  links: { label: string; url: string }[];
};

export default function DiscoveredProfilesSidebar() {
  const [expanded, setExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
  const [activeProfile, setActiveProfile] = useState<Profile | null>(null);
  const [pinnedProfiles, setPinnedProfiles] = useState<number[]>([]);
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  // Placeholder profiles
  function randomString(len: number) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  }
  function randomBio(len: number) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let out = "";
    for (let i = 0; i < len; i++) {
      if (i > 0 && Math.random() < 0.15) out += " ";
      out += chars[Math.floor(Math.random() * chars.length)];
    }
    return out;
  }
  const [profiles] = useState<Profile[]>(() =>
    Array.from({ length: 24 }, (_, i) => ({
      id: i,
      name: randomString(7),
      slack: `@${randomString(6)}`,
      picture: "/pfp.svg",
      location: randomString(10),
      bio: randomBio(32),
      keywords: [randomString(6), randomString(7), randomString(5)],
      links: [
        { label: randomString(5), url: "https://janedoe.dev" },
        { label: randomString(6), url: "https://github.com/janedoe" }
      ]
    }))
  );

  // For demo, use the same text for both short and long bio
  const getShortBio = (bio: string) => bio.split(".")[0] + ".";
  const getLongBio = (bio: string) =>
    bio +
    " " +
    "I have participated in many hackathons, contributed to open source, and love collaborating with others. Always looking for new projects and people to work with!";

  const handleProfileClick = (profile: Profile, id: number) => {
    if (menuOpen && activeProfile && activeProfile.id === profile.id) {
      setMenuOpen(false);
      return;
    }
    setActiveProfile(profile);
    const rect = cardRefs.current[id]?.getBoundingClientRect() || null;
    setAnchorRect(rect);
    setMenuOpen(true);
  };

  const handlePinToggle = (profileId: number) => {
    setPinnedProfiles((prev) =>
      prev.includes(profileId)
        ? prev.filter((id) => id !== profileId)
        : [...prev, profileId]
    );
  };

  // Sort profiles: pinned first, then unpinned
  const sortedProfiles = [
    ...profiles.filter((p) => pinnedProfiles.includes(p.id)),
    ...profiles.filter((p) => !pinnedProfiles.includes(p.id)),
  ];

  return (
    <aside className="flex-grow flex-shrink basis-[15%] bg-background text-text border border-border flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between w-full px-6 py-4 flex-none z-10">
        <h2 className="font-bold text-white whitespace-nowrap subtitle">Discovered Profiles</h2>
        <button
          className="text-xs px-2 py-1 text-white font-bold whitespace-nowrap ml-auto transition-colors duration-200"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Close" : "View all"}
        </button>
      </div>
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div
          className={`grid gap-4${!expanded ? " justify-items-center" : ""}`}
          style={{
            gridTemplateColumns: expanded
              ? "repeat(3, 16rem)"
              : "repeat(1, 16rem)",
            transition: "grid-template-columns 0.5s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {sortedProfiles.map((profile) => (
            <div
              key={profile.id}
              className="relative"
              ref={el => {
                cardRefs.current[profile.id] = el;
              }}
            >
              <CompactProfileCard
                name={profile.name}
                slack={profile.slack}
                picture={profile.picture}
                location={profile.location}
                bio={profile.bio}
                onClick={() => handleProfileClick(profile, profile.id)}
                pinned={pinnedProfiles.includes(profile.id)}
                onPinToggle={() => handlePinToggle(profile.id)}
              />
            </div>
          ))}
        </div>
      </div>
      <ProfileMenu
        open={menuOpen}
        anchorRect={anchorRect}
        onClose={() => setMenuOpen(false)}
        name={activeProfile?.name || ""}
        slack={activeProfile?.slack || ""}
        picture={activeProfile?.picture || ""}
        location={activeProfile?.location || ""}
        shortBio={activeProfile ? getShortBio(activeProfile.bio) : ""}
        longBio={activeProfile ? getLongBio(activeProfile.bio) : ""}
        keywords={activeProfile?.keywords || []}
        links={activeProfile?.links || []}
      />
    </aside>
  );
}
