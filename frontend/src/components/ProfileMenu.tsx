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
  keywords?: string[];
  links?: { label: string; url: string }[];
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
  keywords = [],
  links = [],
}: ProfileMenuProps) {
  if (!open || !anchorRect) return null;

  // Pop out to the left of the anchor, keep within viewport
  const menuWidth = 340;
  const left = Math.max(anchorRect.left - menuWidth - 12, 0);
  const top = Math.min(anchorRect.top, window.innerHeight - 320);

  return (
    <div
      className="z-2000 min-w-80 max-w-80 card border-2 border-solid border-border rounded-extra p-6 transition-opacity duration-200 left-0 top-0"
      style={{ left, top, position: "fixed" }}
      onClick={e => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-white bg-black rounded-full px-2 py-1 font-bold hover:bg-gray-800"
        aria-label="Close"
      >
        ×
      </button>
      <div className="flex flex-col items-center gap-4 flex-1 overflow-auto pb-8">
        <img src={picture} alt={name} className="w-20 h-20 rounded-full object-cover" />
        <div className="w-full flex flex-col gap-2">
          <div className="text-lg font-bold text-white">{name}</div>
          <div className="text-xs text-white">{slack}</div>
          <div className="text-sm text-gray-200">{location}</div>
          <div className="text-sm text-gray-300">{shortBio}</div>
          <div className="text-xs text-gray-300" style={{ whiteSpace: "pre-line" }}>{longBio}</div>
          {keywords.length > 0 && (
            <div>
              <div className="text-xs text-gray-400 font-bold mb-1">Keywords</div>
              <div className="flex flex-wrap gap-1">
                {keywords.map((kw, idx) => (
                  <span key={idx} className="bg-gray-800 text-white px-2 py-0.5 text-xs outline-badge">{kw}</span>
                ))}
              </div>
            </div>
          )}
          {links.length > 0 && (
            <div>
              <div className="text-xs text-gray-400 font-bold mb-1">Links</div>
              <div className="flex flex-col gap-1">
                {links.map((link, idx) => (
                  <a key={idx} href={link.url} className="text-blue-400 text-xs hover:underline" target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* <a
          href={`https://hackclub.slack.com/team/${slack.replace("@", "")}`}
          className="mt-3 bg-blue-500 text-white px-4 py-1 rounded font-bold hover:bg-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Message on Slack
        </a> */}
        <button className="outline" onClick={() => window.open(`https://hackclub.slack.com/team/${slack.replace("@", "")}`, "_blank")}>
          Message on Slack
        </button>
      </div>
    </div>
  );
}
