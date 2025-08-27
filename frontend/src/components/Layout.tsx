"use client";

import React, { useState } from "react";

type LayoutProps = {
  leftSidebar: React.ReactNode;
  rightSidebar: React.ReactNode;
  titleArea: React.ReactNode;
  children: React.ReactNode;
};

export default function Layout({ leftSidebar, rightSidebar, titleArea, children }: LayoutProps) {
  return (
    <div className="flex h-screen w-screen">
      <div className="hidden sm:flex flex-grow flex-shrink basis-[15%] border items-center justify-center">
        {leftSidebar}
      </div>
      <div className="flex-grow flex-shrink basis-[70%] bg-darker border flex flex-col h-full">
        <div className="w-full flex-none flex items-center justify-center">{titleArea}</div>
        <div className="flex-1 flex items-center justify-center">{children}</div>
      </div>
      <div className="hidden lg:flex flex-grow flex-shrink basis-[15%] items-center justify-center">
        {rightSidebar}
      </div>
    </div>
  );
}
