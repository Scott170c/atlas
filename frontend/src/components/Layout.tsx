"use client";

import React, { useState } from "react";

type LayoutProps = {
  leftSidebar: React.ReactNode;
  rightSidebar: React.ReactNode;
  titleArea: React.ReactNode;
  children: React.ReactNode;
};

export default function Layout({ leftSidebar, rightSidebar, titleArea, children }: LayoutProps) {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  return (
    <div className="w-screen h-screen flex text-text bg-sunken">
      {/* Left Sidebar: hidden on mobile, toggleable */}
      <aside className="hidden sm:flex w-[clamp(12rem,22vw,20rem)] min-w-[10rem] max-w-[22rem] p-6 flex-shrink-0 flex-col h-full bg-elevated border-r border-border">
        {leftSidebar}
      </aside>
      {/* Mobile Left Sidebar Toggle */}
      <button
        className="sm:hidden fixed top-4 left-4 z-50 bg-primary text-white rounded p-2 shadow-brutal"
        onClick={() => setShowLeft(v => !v)}
        aria-label="Toggle left sidebar"
      >
        ☰
      </button>
      {showLeft && (
        <aside className="sm:hidden fixed top-0 left-0 h-full w-4/5 max-w-xs bg-elevated border-r border-border z-50 flex flex-col p-6">
          <button
            className="self-end mb-4 bg-red text-white rounded p-2"
            onClick={() => setShowLeft(false)}
            aria-label="Close sidebar"
          >
            ✕
          </button>
          {leftSidebar}
        </aside>
      )}
      <main className="flex-1 flex flex-col h-full p-0">
        <div className="w-full flex-none">{titleArea}</div>
        <div className="flex-1 flex flex-col">{children}</div>
      </main>
      {/* Right Sidebar: hidden on mobile, toggleable */}
      <aside className="hidden md:flex w-[clamp(12rem,22vw,20rem)] min-w-[10rem] max-w-[22rem] p-6 flex-shrink-0 flex-col h-full bg-elevated border-l border-border">
        {rightSidebar}
      </aside>
      {/* Mobile Right Sidebar Toggle */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 bg-primary text-white rounded p-2 shadow-brutal"
        onClick={() => setShowRight(v => !v)}
        aria-label="Toggle right sidebar"
      >
        ☰
      </button>
      {showRight && (
        <aside className="md:hidden fixed top-0 right-0 h-full w-4/5 max-w-xs bg-elevated border-l border-border z-50 flex flex-col p-6">
          <button
            className="self-end mb-4 bg-red text-white rounded p-2"
            onClick={() => setShowRight(false)}
            aria-label="Close sidebar"
          >
            ✕
          </button>
          {rightSidebar}
        </aside>
      )}
    </div>
  );
}
