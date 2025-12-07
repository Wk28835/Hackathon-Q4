import React, {type ReactNode} from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type {WrapperProps} from '@docusaurus/types';

// 1. IMPORT YOUR CUSTOM RAG CHATBOT COMPONENT
import RAGChatbot from '@site/src/components/RAGChatbot'; 

type Props = WrapperProps<typeof LayoutType>;

// Define Chatbot Styles (Inline CSS for Fixed Positioning)
const chatbotContainerStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '20px',    // Distance from the bottom of the viewport
  right: '20px',     // Distance from the right of the viewport
  zIndex: 1000,      // High z-index to ensure it sits above all other content (Navbar is typically 100)
  // Optional: Add a subtle border/shadow to match the technical theme
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
  borderRadius: '50%', // Assuming it's a small circular button initially
};

export default function LayoutWrapper(props: Props): ReactNode {
  return (
    <>
      {/* 1. Render the original Docusaurus Layout (all page content, navbar, footer) */}
      <Layout {...props} />
      
      {/* 2. Render the RAGChatbot component as a fixed, floating element */}
      <div style={chatbotContainerStyle}>
        <RAGChatbot />
      </div>
    </>
  );
}