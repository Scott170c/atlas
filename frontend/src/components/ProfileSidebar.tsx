"use client";
import React, { useState } from "react";

type ProfileData = {
  name: string;
  slack: string;
  picture: string;
  location: string;
  shortBio: string;
  longBio: string;
  keywords: string[];
  links: { label: string; url: string }[];
};

const initialProfile: ProfileData = {
  name: "Jane Doe",
  slack: "@janedoe",
  picture: "/public/vercel.svg",
  location: "San Francisco, CA",
  shortBio: "I build random stuff, break things, and sometimes ship cool projects.",
  longBio:
    "Hey! I'm Jane, a 16-year-old who spends way too much time on my laptop. I love making Discord bots, coding up websites for fun, and joining hackathons just to see what I can build in a weekend. Most of my projects are half-finished, but I always learn something new.\n\nWhen I'm not coding, I'm probably helping someone debug on Slack, playing around with Figma, or trying to get my Raspberry Pi to do something weird. I like open source, late-night group calls, and building stuff that actually gets used by real people. If you want to collab or just chat about tech, hit me up!",
  keywords: ["React", "TypeScript", "UI/UX", "Open Source", "Mentorship"],
  links: [
    { label: "Website", url: "https://janedoe.dev" },
    { label: "Github", url: "https://github.com/janedoe" }
  ]
};

export default function ProfileSidebar() {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState<ProfileData>(initialProfile);
  const [form, setForm] = useState<ProfileData>(initialProfile);

  const handleChange = (field: keyof ProfileData, value: any) => {
    setForm({ ...form, [field]: value });
  };

  const handleKeywordChange = (idx: number, value: string) => {
    const newKeywords = [...form.keywords];
    newKeywords[idx] = value;
    setForm({ ...form, keywords: newKeywords });
  };

  const handleLinkChange = (idx: number, field: "label" | "url", value: string) => {
    const newLinks = [...form.links];
    newLinks[idx] = { ...newLinks[idx], [field]: value };
    setForm({ ...form, links: newLinks });
  };

  const addKeyword = () => setForm({ ...form, keywords: [...form.keywords, ""] });
  const removeKeyword = (idx: number) => setForm({ ...form, keywords: form.keywords.filter((_, i) => i !== idx) });

  const addLink = () => setForm({ ...form, links: [...form.links, { label: "", url: "" }] });
  const removeLink = (idx: number) => setForm({ ...form, links: form.links.filter((_, i) => i !== idx) });

  const handleSave = () => {
    setProfile(form);
    setEditMode(false);
  };

  const handleCancel = () => {
    setForm(profile);
    setEditMode(false);
  };

  // Shared brutalist input styles
  const inputClass =
    "w-full mb-1 monospace";
  const textareaClass =
    "w-full mb-1 monospace";
  const buttonClass =
    "pill";

  return (
    <div
      className="absolute top-0 left-0 h-full z-50 p-6 flex flex-col transition-all duration-300 ease-in-out overflow-hidden border border-border bg-background text-text"
      style={{
        width: "clamp(12rem, 22vw, 20rem)",
        minWidth: "10rem",
        maxWidth: "22rem"
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <img
          src={profile.picture}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover mb-2"
          style={{ background: "var(--background)" }}
        />
        {editMode ? (
          <>
            <input
              className={inputClass + " text-lg font-bold"}
              value={form.name}
              onChange={e => handleChange("name", e.target.value)}
              placeholder="Name"
              style={{ border: "none" }}
            />
            <div className="flex items-center gap-2 text-xs text-gray-400 w-full">
              <span className="font-bold">Slack:</span>
              <input
                className={inputClass + " text-xs"}
                value={form.slack}
                onChange={e => handleChange("slack", e.target.value)}
                placeholder="@slack"
                style={{ border: "none" }}
              />
            </div>
            <input
              className={inputClass + " text-sm"}
              value={form.location}
              onChange={e => handleChange("location", e.target.value)}
              placeholder="Location"
              style={{ border: "none" }}
            />
            <input
              className={inputClass + " text-sm"}
              value={form.shortBio}
              onChange={e => handleChange("shortBio", e.target.value)}
              placeholder="Short bio"
              style={{ border: "none" }}
            />
            <textarea
              className={textareaClass + " text-xs"}
              value={form.longBio}
              onChange={e => handleChange("longBio", e.target.value)}
              placeholder="Long bio"
              rows={5}
              style={{ border: "none" }}
            />
            <div className="flex flex-col gap-1 mt-2 w-full">
              <div className="text-xs text-gray-400 font-bold">Keywords</div>
              {form.keywords.map((kw, idx) => (
                <div key={idx} className="flex gap-1 items-center">
                  <input
                    className={inputClass + " text-xs flex-1"}
                    value={kw}
                    onChange={e => handleKeywordChange(idx, e.target.value)}
                    placeholder="Keyword"
                    style={{ border: "none" }}
                  />
                  <button className="text-red-400 text-xs bg-transparent border-none shadow-none" style={{ border: "none" }} onClick={() => removeKeyword(idx)} title="Remove">✕</button>
                </div>
              ))}
              <button className="text-xs text-blue-400 mt-1 bg-transparent border-none shadow-none" style={{ border: "none" }} onClick={addKeyword}>+ Add keyword</button>
            </div>
            <div className="text-xs text-gray-400 font-bold mt-2 w-full">Links</div>
            <div className="flex flex-col gap-1 w-full">
              {form.links.map((link, idx) => (
                <div key={idx} className="flex gap-1 items-center">
                  <input
                    className={inputClass + " text-xs flex-1"}
                    value={link.label}
                    onChange={e => handleLinkChange(idx, "label", e.target.value)}
                    placeholder="Label"
                    style={{ border: "none" }}
                  />
                  <input
                    className={inputClass + " text-xs flex-1"}
                    value={link.url}
                    onChange={e => handleLinkChange(idx, "url", e.target.value)}
                    placeholder="URL"
                    style={{ border: "none" }}
                  />
                  <button className="text-red-400 text-xs bg-transparent border-none shadow-none" style={{ border: "none" }} onClick={() => removeLink(idx)} title="Remove">✕</button>
                </div>
              ))}
              <button className="text-xs text-blue-400 mt-1 bg-transparent border-none shadow-none" style={{ border: "none" }} onClick={addLink}>+ Add link</button>
            </div>
            <div className="flex gap-2 mt-4">
              <button className={buttonClass + " bg-green-500 hover:bg-green-700"} style={{ border: "none" }} onClick={handleSave}>Save</button>
              <button className={buttonClass + " bg-gray-400 hover:bg-gray-700"} style={{ border: "none" }} onClick={handleCancel}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            <div className="text-lg font-bold text-white">{profile.name}</div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="font-bold">Slack:</span>
              <span className="text-gray-200">{profile.slack}</span>
            </div>
            <div className="text-sm text-gray-200">{profile.location}</div>
            <div className="text-sm text-gray-300 text-center">{profile.shortBio}</div>
            <div className="text-xs text-gray-300 text-center" style={{ whiteSpace: "pre-line" }}>
              {profile.longBio}
            </div>
            <div className="flex flex-col gap-1 mt-4 w-full">
              <div className="text-xs text-gray-400 font-bold">Keywords</div>
              <div className="flex flex-wrap gap-1">
                {profile.keywords.map((kw, idx) => (
                  <span key={idx} className="bg-gray-800 text-white px-2 py-0.5 rounded text-xs">{kw}</span>
                ))}
              </div>
              <div className="text-xs text-gray-400 font-bold mt-2">Links</div>
              <div className="flex flex-col gap-1">
                {profile.links.map((link, idx) => (
                  <a key={idx} href={link.url} className="text-blue-400 text-xs hover:underline" title={link.label} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <button className="mt-4 bg-blue-500 text-white px-4 py-1 rounded font-bold" onClick={() => setEditMode(true)}>
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
}
