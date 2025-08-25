import React from "react";

type LayoutProps = {
  sidebar: React.ReactNode;
  children: React.ReactNode;
};

export default function Layout({ sidebar, children }: LayoutProps) {
  return (
    <div className="h-screen flex bg-neutral-900 text-white">
      <aside className="15vw bg-neutral-900 p-6 flex-shrink-0 flex flex-col h-full">
        {sidebar}
      </aside>
      <main
        className="flex-1 flex h-full p-0"
        style={{
          paddingLeft: "clamp(12rem, 22vw, 20rem)",
          paddingRight: "clamp(12rem, 22vw, 20rem)",
        }}
      >
        {children}
      </main>
    </div>
  );
}
