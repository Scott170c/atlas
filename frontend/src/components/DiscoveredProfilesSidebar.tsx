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
};

export default function DiscoveredProfilesSidebar() {
  const [expanded, setExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
  const [activeProfile, setActiveProfile] = useState<Profile | null>(null);
  const [pinnedProfiles, setPinnedProfiles] = useState<number[]>([]);
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  // Placeholder profiles
  const profiles: Profile[] = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    name: `User ${i + 1}`,
    slack: `@user${i + 1}`,
    picture: "/public/vercel.svg",
    location: "San Francisco, CA",
    bio: "Passionate about building cool things, collaborating with others, and always learning. Loves hackathons, open source, and sharing knowledge with the community.",
  }));

  // For demo, use the same text for both short and long bio
  const getShortBio = (bio: string) => bio.split(".")[0] + ".";
  const getLongBio = (bio: string) =>
    bio +
    "\n\n" +
    "Extended: " +
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
    <div
      className="absolute top-0 right-0 h-full z-10 flex flex-col overflow-hidden transition-all duration-500 border-l border-border bg-background text-text"
      style={{
        width: expanded ? "54rem" : "20rem",
        minWidth: "16rem",
        maxWidth: "100vw",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between w-full px-6 py-4 flex-none z-10">
        <h2 className="text-xl font-bold text-text whitespace-nowrap">Discovered Profiles</h2>
        <button
          className="text-xs rounded-md px-2 py-1 bg-primary hover:bg-red text-white font-bold whitespace-nowrap ml-auto transition-colors duration-200"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Close" : "View all"}
        </button>
      </div>
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div
          className={`grid gap-4`}
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
              />
              <button
                className={`absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-yellow-500 font-bold shadow hover:bg-yellow-100 transition-colors duration-200 z-10`}
                style={{ border: "1px solid #eab308" }}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePinToggle(profile.id);
                }}
                title={pinnedProfiles.includes(profile.id) ? "Unpin" : "Pin"}
              >
                {pinnedProfiles.includes(profile.id) ? "📌" : "📍"}
              </button>
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
      />
    </div>
  );
}
