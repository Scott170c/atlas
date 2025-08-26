"use client";

import React, { useState, useRef, FormEvent } from "react";
import CompactProfileCard from "./CompactProfileCard";

type Message =
  | { type: "user"; text: string }
  | { type: "agent"; text: string; recommendations?: Array<{ name: string; slack: string; picture: string; location: string; bio: string }> };

const MOCK_PROFILES = [
  {
    name: "Alex Kim",
    slack: "@alexkim",
    picture: "/public/vercel.svg",
    location: "Toronto, ON",
    bio: "React dev, hackathon enthusiast, loves open source.",
  },
  {
    name: "Priya Patel",
    slack: "@priyapatel",
    picture: "/public/vercel.svg",
    location: "San Francisco, CA",
    bio: "TypeScript wizard, UI/UX designer, always learning.",
  },
  {
    name: "Sam Lee",
    slack: "@samlee",
    picture: "/public/vercel.svg",
    location: "New York, NY",
    bio: "Full-stack builder, open source contributor.",
  },
];

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "agent",
      text: "Hi! Ask me to find people in Hack Club by skill, interest, or location.",
    },  
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { type: "user", text: input },
      {
        type: "agent",
        text: "Here are 3 people you might want to connect with:",
        recommendations: MOCK_PROFILES,
      },
    ]);
    setInput("");
    setTimeout(() => {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="container flex flex-col h-full pb-8">
      <header className="mb-4 pb-2">
        <h1 className="title text-white">Atlas</h1>
        <p className="caption text-secondary">Find and connect with Hack Club members.</p>
      </header>
      <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
        {messages.map((msg, idx) =>
          msg.type === "user" ? (
            <div
              key={idx}
              className="self-end"
            >
              {msg.text}
            </div>
          ) : (
            <div key={idx} className="self-start flex flex-col gap-2">
              <div className="">{msg.text}</div>
              {msg.recommendations && (
                <div className="flex gap-2 mt-1">
                  {msg.recommendations.map((profile, i) => (
                    <CompactProfileCard key={i} {...profile} />
                  ))}
                </div>
              )}
            </div>
          )
        )}
        <div ref={chatEndRef} />
      </div>
      <form className="mt-4 flex justify-center mb-8" onSubmit={handleSubmit}>
        <div className="flex gap-2 w-full max-w-2xl items-center">
          <input
            type="text"
            className="flex-1 monospace p-2 text-sm font-bold text-left bg-darkless text-white"
            placeholder="e.g. Find React devs in Toronto"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="outline h-auto"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
