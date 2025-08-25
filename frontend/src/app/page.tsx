import Layout from "../components/Layout";
import ChatInterface from "../components/ChatInterface";
import ProfileSidebar from "../components/ProfileSidebar";
import DiscoveredProfilesSidebar from "../components/DiscoveredProfilesSidebar";

export default function Home() {
  return (
    <Layout sidebar={<ProfileSidebar />}>
      <div className="flex flex-1 h-full">
        <div className="flex-1 flex flex-col h-full p-8">
          <ChatInterface />
        </div>
        <DiscoveredProfilesSidebar />
      </div>
    </Layout>
  );
}
