import React from "react";

type CompactProfileCardProps = {
  name: string;
  slack: string;
  picture: string;
  location: string;
  bio: string;
  onClick?: () => void;
  pinned?: boolean;
};

export default function CompactProfileCard({
  name,
  slack,
  picture,
  location,
  bio,
  onClick,
  pinned = false,
}: CompactProfileCardProps) {
  return (
    <div
      className={`card interactive flex gap-3 items-center cursor-pointer ${pinned ? "ring-2 ring-yellow-400" : ""}`}
      style={{ width: "15rem", minWidth: "12rem", maxWidth: "16rem" }}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-pressed="false"
    >
      <img
        src={picture}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex-1 min-w-0">
        <div className="font-bold truncate flex items-center gap-1">
          {name}
          {pinned && (
            <span title="Pinned" className="ml-1 text-yellow-400">📌</span>
          )}
        </div>
        <div className="caption mb-1 flex items-center gap-1">
          <span className="font-bold">Slack:</span>
          <span>{slack}</span>
        </div>
        <div className="caption mb-1 truncate">{location}</div>
        <div className="caption italic truncate">{bio}</div>
      </div>
    </div>
  );
}
