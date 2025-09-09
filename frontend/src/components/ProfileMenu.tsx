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
  const left = Math.max(anchorRect.left - menuWidth, 0);
  const top = Math.min(anchorRect.top, window.innerHeight - 320);

  return (
    <div
      className="z-2000 min-w-80 max-w-80 card shadow-card border-2 border-solid border-border rounded-extra p-6 transition-opacity duration-200 left-0 top-0"
  style={{ left, top, position: "fixed", background: '#f3f4f6' }}
      onClick={e => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 rounded-full px-2 py-1 font-bold"
  style={{ color: '#111111', background: '#f3f4f6', border: 'none' }}
        aria-label="Close"
      >
        ×
      </button>
      <div className="flex flex-col items-center gap-4 flex-1 overflow-auto pb-8">
        <img src={picture} alt={name} className="w-16 h-16 rounded-full object-cover" style={{ background: '#f3f4f6' }} />
        <div className="w-full flex flex-col gap-1">
          <div className="text-base font-bold px-2 py-1" style={{ color: '#111' }}>{name}</div>
          <div className="text-xs px-2 py-0.5" style={{ color: '#111' }}>{slack}</div>
          <div className="text-xs px-2 py-0.5" style={{ color: '#111' }}>{location}</div>
          <div className="text-xs px-2 py-0.5" style={{ color: '#111' }}>{shortBio}</div>
          <div className="text-xs px-2 py-0.5" style={{ color: '#111', whiteSpace: "pre-line" }}>{longBio}</div>
          {keywords.length > 0 && (
            <div>
              <div className="text-xs font-bold mb-1 px-2" style={{ color: '#111' }}>Keywords</div>
              <div className="flex flex-wrap gap-1 px-2">
                {keywords.map((kw, idx) => (
                  <span key={idx} className="px-2 py-0.5 text-xs outline-badge" style={{ background: '#f3f4f6', color: '#111' }}>{kw}</span>
                ))}
              </div>
            </div>
          )}
          {links.length > 0 && (
            <div>
              <div className="text-xs font-bold mb-1 px-2" style={{ color: '#111' }}>Links</div>
              <div className="flex flex-col gap-1 px-2">
                {links.map((link, idx) => (
                  <a key={idx} href={link.url} className="text-xs hover:underline px-1 py-0.5" style={{ color: '#111' }} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        <button 
          className="outline" 
          style={{ background: '#f3f4f6', color: '#111', border: 'none' }}
          onClick={() => window.open(`https://hackclub.slack.com/team/${slack.replace("@", "")}`, "_blank")}
        >
          Message on Slack
        </button>
      </div>
    </div>
  );
}
