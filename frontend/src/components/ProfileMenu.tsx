import React from "react";

type ProfileMenuProps = {
  open: boolean;
  anchorRect: DOMRect | null;
  onClose: () => void;
  name: string;
  slack: string;
  picture: string;
  location: string;
  shortBio: string;
  longBio: string;
};

export default function ProfileMenu({
  open,
  anchorRect,
  onClose,
  name,
  slack,
  picture,
  location,
  shortBio,
  longBio,
}: ProfileMenuProps) {
  if (!open || !anchorRect) return null;

  // Pop out to the left of the anchor, keep within viewport
  const menuWidth = 340;
  const left = Math.max(anchorRect.left - menuWidth - 12, 0);
  const top = Math.min(anchorRect.top, window.innerHeight - 320);

  const style: React.CSSProperties = {
    position: "fixed",
    top,
    left,
    zIndex: 2000,
    minWidth: 320,
    maxWidth: 340,
    background: "var(--background, #111)",
    color: "#fff",
    borderRadius: 12,
    border: "2px solid #222",
    padding: 24,
    transition: "opacity 0.2s cubic-bezier(0.4,0,0.2,1)",
    opacity: open ? 1 : 0,
  };

  return (
    <div style={style} onClick={e => e.stopPropagation()}>
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-white bg-black rounded-full px-2 py-1 font-bold hover:bg-gray-800"
        aria-label="Close"
        style={{ border: "none" }}
      >
        ×
      </button>
      <div className="flex flex-col items-center gap-2">
        <img
          src={picture}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mb-2"
          style={{ background: "var(--background)" }}
        />
        <div className="text-lg font-bold">{name}</div>
        <div className="flex items-center gap-2 text-xs text-gray-300">
          <span className="font-bold">Slack:</span>
          <span className="text-gray-100">{slack}</span>
        </div>
        <div className="text-sm text-gray-200">{location}</div>
        <div className="text-sm text-gray-100 text-center mt-2">{shortBio}</div>
        <div className="text-xs text-gray-300 text-center mt-2" style={{ whiteSpace: "pre-line" }}>
          {longBio}
        </div>
        <a
          href={`https://hackclub.slack.com/team/${slack.replace("@", "")}`}
          className="mt-3 bg-blue-500 text-white px-4 py-1 rounded font-bold hover:bg-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Message on Slack
        </a>
      </div>
    </div>
  );
}
