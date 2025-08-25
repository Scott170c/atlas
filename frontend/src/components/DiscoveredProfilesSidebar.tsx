"use client";
import React, { useState } from "react";

export default function DiscoveredProfilesSidebar() {
  const [expanded, setExpanded] = useState(false);
  // Placeholder profiles
  const profiles = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    name: `User ${i + 1}`,
    slack: `@user${i + 1}`,
    picture: "/public/vercel.svg",
    location: "San Francisco, CA",
    bio: "Passionate about building cool things, collaborating with others, and always learning. Loves hackathons, open source, and sharing knowledge with the community.",
  }));

  return (
    <div
      className="absolute top-0 right-0 h-full z-10 bg-neutral-900 flex flex-col overflow-hidden transition-all duration-500 border-l border-gray-700"
      style={{
        width: expanded ? "54rem" : "20rem",
        minWidth: "16rem",
        maxWidth: "100vw",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between w-full px-6 py-4 bg-neutral-900 flex-none z-10">
        <h2 className="text-xl font-bold text-white whitespace-nowrap">Discovered Profiles</h2>
        <button
          className="text-xs rounded-md px-2 py-1 text-black bg-white hover:bg-gray-300 transition-colors duration-200 font-bold whitespace-nowrap ml-auto"
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
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-neutral-900 rounded-md p-4 shadow-brutal flex gap-4 items-center h-48 border border-gray-700"
              style={{ width: "16rem", minWidth: "16rem", maxWidth: "16rem" }}
            >
              <img
                src={profile.picture}
                alt={profile.name}
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="font-bold text-white truncate">{profile.name}</div>
                <div className="text-xs text-gray-400 mb-1 flex items-center gap-1">
                  <span className="font-bold">Slack:</span>
                  <span className="text-gray-200">{profile.slack}</span>
                </div>
                <div className="text-gray-400 text-xs mb-1 truncate">{profile.location}</div>
                <div className="text-gray-300 text-xs italic">{profile.bio}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
