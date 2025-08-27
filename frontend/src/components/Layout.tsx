import React from "react";

type LayoutProps = {
  leftSidebar: React.ReactNode;
  rightSidebar: React.ReactNode;
  titleArea: React.ReactNode;
  children: React.ReactNode;
};

export default function Layout({ leftSidebar, rightSidebar, titleArea, children }: LayoutProps) {
  return (
    <div className="w-screen h-screen flex text-text bg-sunken">
      <aside className="w-[clamp(12rem,22vw,20rem)] min-w-[10rem] max-w-[22rem] p-6 flex-shrink-0 flex flex-col h-full bg-elevated border-r border-border">
        {leftSidebar}
      </aside>
      <main className="flex-1 flex flex-col h-full p-0">
        <div className="w-full flex-none">{titleArea}</div>
        <div className="flex-1 flex flex-col">{children}</div>
      </main>
      <aside className="w-[clamp(12rem,22vw,20rem)] min-w-[10rem] max-w-[22rem] p-6 flex-shrink-0 flex flex-col h-full bg-elevated border-l border-border">
        {rightSidebar}
      </aside>
    </div>
  );
}
