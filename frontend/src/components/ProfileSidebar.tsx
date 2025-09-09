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
  picture: "/pfp.svg",
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

  return (
  <aside className="w-full h-full text-black flex flex-col overflow-y-auto pt-3" style={{ background: '#e0e6ed', maxWidth: 260, minWidth: 180 }}>
  <div className="flex flex-col items-center gap-2 flex-1 scrollbar-hide w-full px-3">
        <img src={profile.picture} alt="Profile" className="w-12 h-12 rounded-full object-cover" />
        {editMode ? (
          <form className="w-full flex flex-col gap-2">
            <div className="text-xs text-gray-400 font-bold mb-1">Name</div>
            <input
              className="p-1 text-base font-bold text-left w-full"
              style={{ background: '#e0e6ed', color: '#111' }}
              value={form.name}
              onChange={e => handleChange("name", e.target.value)}
              placeholder="Name"
            />
            <div className="text-xs text-gray-400 font-bold mb-1">Slack Handle</div>
            <input
              className="p-1 text-xs text-left w-full"
              style={{ background: '#e0e6ed', color: '#111' }}
              value={form.slack}
              onChange={e => handleChange("slack", e.target.value)}
              placeholder="@slack"
            />
            <div className="text-xs text-gray-400 font-bold mb-1">Location</div>
            <input
              className="p-1 text-sm text-left w-full"
              style={{ background: '#e0e6ed', color: '#111' }}
              value={form.location}
              onChange={e => handleChange("location", e.target.value)}
              placeholder="Location"
            />
            <div className="text-xs text-gray-400 font-bold mb-1">Short Bio</div>
            <input
              className="p-1 text-sm text-left w-full"
              style={{ background: '#e0e6ed', color: '#111' }}
              value={form.shortBio}
              onChange={e => handleChange("shortBio", e.target.value)}
              placeholder="Short bio"
            />
            <div className="text-xs text-gray-400 font-bold mb-1">Long Bio</div>
            <textarea
              className="p-1 text-xs text-left w-full"
              style={{ background: '#e0e6ed', color: '#111' }}
              value={form.longBio}
              onChange={e => handleChange("longBio", e.target.value)}
              placeholder="Long bio"
              rows={4}
            />
            <div>
              <div className="text-xs text-gray-400 font-bold mx-2 mb-1">Keywords</div>
              {form.keywords.map((kw, idx) => (
                <div key={idx} className="flex gap-1 mb-1">
                  <input
                    className="p-2 text-xs text-left mx-2"
                    style={{ background: '#e0e6ed', color: '#111' }}
                    value={kw}
                    onChange={e => handleKeywordChange(idx, e.target.value)}
                    placeholder="Keyword"
                  />
                  <button type="button"
                    className="bg-blue-400 text-white font-bold px-2 py-1 rounded-full text-xs transition-all duration-200 ease-in-out hover:bg-red-100 hover:text-blue-400"
                    style={{ minWidth: 24, minHeight: 24 }}
                    onClick={() => removeKeyword(idx)}>
                    ✕
                  </button>
                </div>
              ))}
              <button type="button"
                className="bg-blue-400 text-white font-bold px-2 py-1 rounded-full text-xs transition-all duration-200 ease-in-out hover:bg-red-100 hover:text-blue-400 mx-2"
                onClick={addKeyword}>
                + Add keyword
              </button>
            </div>
            <div>
              <div className="text-xs text-gray-400 font-bold mx-2 mb-1">Links</div>
              {form.links.map((link, idx) => (
                <div key={idx} className="flex flex-col gap-1 mb-2 card sunken rounded p-2 mx-2">
                  <input
                    className="p-2 text-xs text-left rounded mt-1"
                    style={{ background: '#e0e6ed', color: '#111' }}
                    value={link.url}
                    onChange={e => handleLinkChange(idx, "url", e.target.value)}
                    placeholder="URL"
                  />
                  <div className="flex items-center gap-2">
                    <input
                      className="p-2 text-xs text-left rounded flex-1"
                      style={{ background: '#e0e6ed', color: '#111' }}
                      value={link.label}
                      onChange={e => handleLinkChange(idx, "label", e.target.value)}
                      placeholder="Label"
                    />
                    <button
                      type="button"
                      className="bg-blue-400 text-white font-bold px-2 py-1 rounded-full text-xs transition-all duration-200 ease-in-out hover:bg-red-100 hover:text-blue-400"
                      style={{ minWidth: 24, minHeight: 24 }}
                      onClick={() => removeLink(idx)}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
              <button type="button"
                className="bg-blue-400 text-white font-bold px-2 py-1 rounded-full text-xs transition-all duration-200 ease-in-out hover:bg-red-100 hover:text-blue-400 mx-2"
                onClick={addLink}>
                + Add link
              </button>
            </div>
          </form>
        ) : (
          <div className="w-full flex flex-col gap-2">
            <div className="text-lg font-bold text-black">{profile.name}</div>
            <div className="text-xs font-bold text-black">{profile.slack}</div>
            <div className="text-sm font-bold text-black">{profile.location}</div>
            <div className="text-sm font-bold text-black">{profile.shortBio}</div>
            <div className="text-xs text-black" style={{ whiteSpace: "pre-line" }}>{profile.longBio}</div>
            <div>
              <div className="text-xs text-black font-bold mb-1 uppercase tracking-wide">Keywords</div>
              <div className="flex flex-wrap gap-1">
                {profile.keywords.map((kw, idx) => (
                  <span key={idx} className="bg-gray-200 text-black px-2 py-0.5 text-xs outline-badge">{kw}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs text-black font-bold mb-1 uppercase tracking-wide">Links</div>
              <div className="flex flex-col gap-1">
                {profile.links.map((link, idx) => (
                  <a key={idx} href={link.url} className="text-blue-700 text-xs hover:underline" target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
  <div className="w-full flex gap-2 mt-6 mb-4 static">
        {editMode ? (
          <>
            <button className="bg-blue-400 text-white font-bold px-4 py-2 mx-auto text-xs rounded-full transition-all duration-200 ease-in-out hover:bg-red-100 hover:text-blue-400" style={{ width: '70%' }} onClick={handleCancel}>Cancel</button>
            <button className="bg-blue-400 text-white font-bold px-4 py-2 mx-auto text-xs rounded-full transition-all duration-200 ease-in-out hover:bg-red-100 hover:text-blue-400" style={{ width: '70%' }} onClick={handleSave}>Save</button>
          </>
        ) : (
          <button 
            className="bg-blue-400 text-white font-bold px-4 py-2 mx-auto text-xs rounded-full transition-all duration-200 ease-in-out hover:bg-red-100 hover:text-blue-400"
            style={{ width: '70%' }}
            onClick={() => setEditMode(true)}
          >
            Edit Profile
          </button>
        )}
      </div>
    </aside>
  );
}
