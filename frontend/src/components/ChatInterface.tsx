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
    <section className="w-full flex flex-col min-h-0 h-[80vh]">
      <div className="flex-1 min-h-0 flex flex-col gap-4 overflow-y-auto scrollbar-hide px-8 pt-4">
        {messages.map((msg, idx) =>
          msg.type === "user" ? (
            <div
              key={idx}
              className="self-end max-w-md break-words bg-darkless px-4 py-2 rounded-lg"
            >
              {msg.text}
            </div>
          ) : (
            <div key={idx} className="self-start flex flex-col gap-2">
              <div className="">{msg.text}</div>
              {msg.recommendations && (
                <div className="flex flex-col sm:flex-row gap-2 mt-1">
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
      <div className="flex-none p-4">
        <form className="flex justify-center" onSubmit={handleSubmit}>
          <div className="flex gap-2 w-full max-w-full sm:max-w-lg md:max-w-2xl items-center">
            <input
              type="text"
              className="flex-1 monospace p-2 text-sm font-bold text-left bg-darkless text-white outline-none"
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
      </div>
    </section>
  );
}
