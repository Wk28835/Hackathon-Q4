import React from "react";
import Layout from "@theme/Layout";
import RAGChatbot from "../components/RAGChatbot";

export default function ChatPage() {
  return (
    <Layout title="Chat with Book">
      <RAGChatbot />
    </Layout>
  );
}
