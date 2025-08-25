import React from "react";

export default function ChatInterface() {
  return (
    <section className="flex flex-col h-full">
      <header className="mb-4 pb-2">
        <h1 className="text-2xl font-bold tracking-tight">Atlas</h1>
        <p className="text-sm text-gray-200">Find and connect with Hack Club members.</p>
      </header>
      <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
        {/* Chat messages will go here */}
        <div className="self-start bg-neutral-900 rounded-md px-4 py-2 shadow-brutal font-mono text-white">
          Hi! Ask me to find people in Hack Club by skill, interest, or location.
        </div>
      </div>
      <form className="mt-4 flex justify-center">
        <div className="flex gap-2 w-full max-w-2xl items-end">
          <input
            type="text"
            className="flex-1 px-3 py-2 font-mono bg-transparent text-white placeholder-gray-400 border-b-2 border-white focus:outline-none focus:ring-0"
            placeholder="e.g. Find React devs in Toronto"
          />
          <button
            type="submit"
            className="bg-white text-black px-4 py-2 rounded-md font-bold shadow-brutal hover:bg-gray-300 transition-colors duration-200"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
