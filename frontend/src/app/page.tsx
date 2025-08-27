import Layout from "../components/Layout";
import ChatInterface from "../components/ChatInterface";
import ProfileSidebar from "../components/ProfileSidebar";
import DiscoveredProfilesSidebar from "../components/DiscoveredProfilesSidebar";

function TitleArea() {
  return (
    <div className="w-full py-4 px-8 border-b border-border bg-background">
      <h1 className="title text-text">Atlas</h1>
      <p className="caption text-secondary">Find and connect with Hack Club members.</p>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      leftSidebar={<ProfileSidebar />}
      rightSidebar={<DiscoveredProfilesSidebar />}
      titleArea={<TitleArea />}
    >
      <ChatInterface />
    </Layout>
  );
}
