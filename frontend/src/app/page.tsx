import Layout from "../components/Layout";
import ChatInterface from "../components/ChatInterface";
import ProfileSidebar from "../components/ProfileSidebar";


function TitleArea() {
  return (
  <div className="w-full pt-1 pb-2 px-6" style={{ background: '#fff' }}>
      <h1 className="title font-bold text-black mb-1">Atlas</h1>
      <p className="caption text-black mb-0">Find and connect with Hack Club members.</p>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
  leftSidebar={<ProfileSidebar />}
  titleArea={<TitleArea />}
    >
      <ChatInterface />
    </Layout>
  );
}
