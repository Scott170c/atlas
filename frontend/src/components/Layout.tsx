"use client";

import React from "react";

type LayoutProps = {
  leftSidebar: React.ReactNode;
  rightSidebar?: React.ReactNode;
  titleArea: React.ReactNode;
  children: React.ReactNode;
};

export default function Layout({ leftSidebar, rightSidebar, titleArea, children }: LayoutProps) {
  return (
    <div
      className="flex h-screen w-screen"
      style={{
  background: "#ffffff",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
  <div className="hidden sm:flex flex-grow flex-shrink basis-[10%] items-center justify-center h-full" style={{ background: "rgba(255,255,255,0.08)" }}>
        {leftSidebar}
      </div>
  <div className="flex-grow flex-shrink basis-[70%] flex flex-col h-full text-black" style={{ background: "#ffffff", borderRight: rightSidebar ? "2px solid #ec3750" : undefined }}>
        <div className="w-full flex-none flex items-center justify-center text-gray-800">{titleArea}</div>
        <div className="flex-1 flex items-center justify-center">{children}</div>
      </div>
      {rightSidebar && (
        <div className="hidden lg:flex flex-grow flex-shrink basis-[15%] items-center justify-center h-full" style={{ background: "rgba(255,255,255,0.08)", borderLeft: "2px solid #ec3750" }}>
          {rightSidebar}
        </div>
      )}
    </div>
  );
}
