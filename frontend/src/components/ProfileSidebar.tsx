import React from "react";

export default function ProfileSidebar() {
  return (
    <div
      className="absolute top-0 left-0 h-full z-50 p-6 flex flex-col transition-all duration-300 ease-in-out overflow-hidden border border-gray-700"
      style={{
        background: "var(--background)",
        width: "clamp(12rem, 22vw, 20rem)",
        minWidth: "10rem",
        maxWidth: "22rem"
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <img
          src="/public/vercel.svg"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover mb-2"
          style={{ background: "var(--background)" }}
        />
        <div className="text-lg font-bold text-white">Jane Doe</div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span className="font-bold">Slack:</span>
          <span className="text-gray-200">@janedoe</span>
        </div>
        <div className="text-sm text-gray-200">San Francisco, CA</div>
        <div className="text-sm text-gray-300 text-center">
          I build random stuff, break things, and sometimes ship cool projects.
        </div>
        <div className="text-xs text-gray-500 text-center">
          Hey! I'm Jane, a 16-year-old who spends way too much time on my laptop. I love making Discord bots, coding up websites for fun, and joining hackathons just to see what I can build in a weekend. Most of my projects are half-finished, but I always learn something new.<br /><br />
          When I'm not coding, I'm probably helping someone debug on Slack, playing around with Figma, or trying to get my Raspberry Pi to do something weird. I like open source, late-night group calls, and building stuff that actually gets used by real people. If you want to collab or just chat about tech, hit me up!
        </div>
        <div className="flex flex-col gap-1 mt-4 w-full">
          <div className="text-xs text-gray-400 font-bold">Keywords</div>
          <div className="flex flex-wrap gap-1">
            <span className="bg-gray-800 text-white px-2 py-0.5 rounded text-xs">React</span>
            <span className="bg-gray-800 text-white px-2 py-0.5 rounded text-xs">TypeScript</span>
            <span className="bg-gray-800 text-white px-2 py-0.5 rounded text-xs">UI/UX</span>
            <span className="bg-gray-800 text-white px-2 py-0.5 rounded text-xs">Open Source</span>
            <span className="bg-gray-800 text-white px-2 py-0.5 rounded text-xs">Mentorship</span>
          </div>
          <div className="text-xs text-gray-400 font-bold mt-2">Links</div>
          <div className="flex flex-col gap-1">
            <a href="https://janedoe.dev" className="text-blue-400 text-xs hover:underline" title="Website">Website</a>
            <a href="https://github.com/janedoe" className="text-blue-400 text-xs hover:underline" title="Github">Github</a>
          </div>
        </div>
      </div>
    </div>
  );
}
