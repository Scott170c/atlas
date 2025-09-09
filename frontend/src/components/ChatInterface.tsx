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
  <section className="w-full flex flex-col min-h-0 h-[80vh] grow shrink text-black overflow-hidden">
  <div className="flex-1 min-h-0 flex flex-col gap-4 overflow-y-auto overflow-x-hidden px-8 pt-4 text-gray-800 w-full" style={{ background: '#f3f4f6' }}>
        {messages.map((msg, idx) =>
          msg.type === "user" ? (
            <div
              key={idx}
              className="self-end max-w-md break-words bg-gray-200 text-black px-4 py-2 rounded-lg"
            >
              {msg.text}
            </div>
          ) : (
            <div key={idx} className="self-start flex flex-col gap-2">
              <div className="text-gray-900">{msg.text}</div>
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
  <div className="flex-none px-4 pb-4 pt-2 w-full">
    <form className="flex justify-center w-full" onSubmit={handleSubmit}>
      <div className="flex w-full max-w-md items-end bg-gray-700 rounded-full shadow-md border border-gray-800 px-3 py-1 gap-2 transition-all duration-200" style={{ minHeight: 44 }}>
        <textarea
          className="flex-1 monospace resize-none p-2 text-base bg-transparent text-white outline-none border-none focus:ring-0 placeholder-gray-300 rounded-full transition-all duration-200"
          placeholder="Send a message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          rows={1}
          style={{ maxHeight: 120, minHeight: 32, overflow: 'auto' }}
          onInput={e => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = '32px';
            target.style.height = target.scrollHeight + 'px';
          }}
        />
        <button
          type="submit"
          className="flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-150 w-9 h-9 shadow text-white"
          style={{ minWidth: 36, minHeight: 36 }}
          aria-label="Send"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-7.5-15-7.5v6l10 1.5-10 1.5v6z" />
          </svg>
        </button>
      </div>
    </form>
  </div>
    </section>
  );
}
