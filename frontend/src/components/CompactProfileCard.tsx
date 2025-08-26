import React from "react";

type CompactProfileCardProps = {
  name: string;
  slack: string;
  picture: string;
  location: string;
  bio: string;
  onClick?: () => void;
  pinned?: boolean;
  onPinToggle?: () => void;
};

export default function CompactProfileCard({
  name,
  slack,
  picture,
  location,
  bio,
  onClick,
  pinned = false,
  onPinToggle,
}: CompactProfileCardProps) {
  return (
    <div
      className={`px-2 card interactive flex gap-3 items-center cursor-pointer h-36 ${pinned ? "ring-2" : ""}`}
      style={{ width: "15rem", minWidth: "12rem", maxWidth: "16rem" }}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-pressed="false"
    >
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1">
          <div>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-bold truncate flex items-center gap-1 text-text">
                  {name}
                </div>
                <div className="text-sm mb-1 flex items-center gap-1 text-secondary">
                  <span>{slack}</span>
                </div>
              </div>
              <span
                role="button"
                aria-label={pinned ? "Unpin profile" : "Pin profile"}
                tabIndex={0}
                className={`mx-2 text-yellow text-2xl flex-shrink-0 flex items-center justify-center cursor-pointer focus:outline-none ${pinned ? "" : "opacity-50 hover:opacity-100"}`}
                onClick={e => {
                  e.stopPropagation?.();
                  if (typeof onPinToggle === "function") onPinToggle();
                }}
              >
                {pinned ? "📌" : "📍"}
              </span>
            </div>
            <div className="mb-1 truncate text-secondary text-sm">{location}</div>
          </div>
          <img
            src={picture}
            alt={name}
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>


        <div className="italic line-clamp-2 text-text text-sm">{bio}</div>
      </div>
    </div>
  );
}
