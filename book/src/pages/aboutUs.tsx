import React from 'react';
import Layout from '@theme/Layout';

// --- Aesthetic Colors ---
const COLOR_BG_DARK = '#050D1D';      // Deep Dark Blue/Black
const COLOR_NEON = '#09E8B8';        // Bright Teal/Cyan Accent
const COLOR_ACCENT_TEXT = '#25C2A0';  // Lighter Cyan for body text
const COLOR_CARD_BG = '#0B1B36';      // Darker Blue for Cards
const COLOR_BORDER = '#006B7A';      // Subtle Border Color
// ---

// Reusable style for the main section cards
const cardStyle = {
  backgroundColor: COLOR_CARD_BG,
  padding: '30px',
  borderRadius: '8px',
  borderLeft: `5px solid ${COLOR_NEON}`,
  boxShadow: `0 0 10px rgba(0, 240, 255, 0.2)`, // Neon glow
  color: COLOR_ACCENT_TEXT,
};

// Component to represent the hexagonal tech stack visualization
const TechStackHexGrid = () => {
  const stackItems = [
    { label: 'React', icon: '⚛️' },
    { label: 'FastAPI', icon: '🐍' },
    { label: 'Gemini AI', icon: '✨' },
    { label: 'Qdrant', icon: '🟢' },
    { label: 'Vercel', icon: '🚀' },
  ];

  const itemStyle: React.CSSProperties = { 
    backgroundColor: 'rgba(0, 240, 255, 0.1)', 
    border: `1px solid ${COLOR_NEON}`,
    borderRadius: '10px',
    padding: '10px 15px',
    // 🔑 The value itself is correct, but TypeScript needed the explicit type
    textAlign: 'center', 
    fontWeight: 600,
    color: COLOR_NEON,
    boxShadow: `0 0 5px ${COLOR_NEON}`,
  };

  

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
      gap: '15px',
      marginTop: '20px',
    }}>
      {stackItems.map((item, index) => (
        <div key={index} style={itemStyle}>
          {item.icon} {item.label}
        </div>
      ))}
    </div>
  );
};


export default function AboutPage() {
  return (
    <Layout
      title="About Us"
      description="Learn about the Panaversity RAG Assistant and the technology behind it."
    >
      {/* Main Page Container with Dark Background */}
      <div style={{
        minHeight: '100vh',
        backgroundColor: COLOR_BG_DARK,
        padding: '60px 20px',
        color: COLOR_ACCENT_TEXT,
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          fontFamily: 'system-ui, sans-serif',
        }}>
          {/* Header Section */}
          <h1 style={{
            color: COLOR_NEON,
            fontSize: '3.5rem',
            fontWeight: 900,
            borderBottom: `6px solid ${COLOR_NEON}`,
            width: 'fit-content',
            paddingBottom: '5px',
            marginBottom: '60px',
            textShadow: `0 0 15px rgba(0, 240, 255, 0.8)`, // Subtle glow
          }}>
            🤖 About the Panaversity RAG Assistant
          </h1>

          {/* Content Grid: 2 Columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1.5fr',
            gap: '40px',
          }}>
            {/* Left Column: Mission & What We Do */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              
              {/* Card: Our Mission */}
              <div style={cardStyle}>
                <h2 style={{ color: COLOR_NEON, fontSize: '1.8rem', marginBottom: '15px' }}>
                  Our Mission
                </h2>
                <p>
                  The Panaversity RAG Assistant transforms static documentation into an interactive, intelligent knowledge base. Our goal is to provide users with **precise, sourced answers** to technical questions, making complex documentation easily accessible.
                </p>
              </div>

              {/* Card: What We Do */}
              <div style={cardStyle}>
                <h2 style={{ color: COLOR_NEON, fontSize: '1.8rem', marginBottom: '15px' }}>
                  What We Do: Retrieval-Augmented Generation (RAG)
                </h2>
                <p>
                  This system is powered by **RAG** technology. It retrieves relevant content from your documentation (via **Qdrant**) and grounds the **Gemini AI** model's responses in those official sources. This process eliminates hallucinations, ensuring trustworthy and highly relevant answers.
                </p>
              </div>

              {/* Card: The Team */}
              <div style={{...cardStyle, borderLeft: 'none', borderTop: `5px solid ${COLOR_NEON}`}}>
                <h2 style={{ color: COLOR_NEON, fontSize: '1.8rem', marginBottom: '15px' }}>
                  The Team
                </h2>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: 0 }}>
                  <li style={{ marginBottom: '5px', color: COLOR_ACCENT_TEXT }}>
                    <strong>[Team Member 1 Name]</strong>: Role/Focus (e.g., Backend Logic & API)
                  </li>
                  <li style={{ marginBottom: '5px', color: COLOR_ACCENT_TEXT }}>
                    <strong>[Team Member 2 Name]</strong>: Role/Focus (e.g., Frontend Design & Integration)
                  </li>
                </ul>
                <p style={{ fontSize: '0.9rem', marginTop: '15px', opacity: 0.7 }}>
                  Contact: [Your Contact Email or GitHub Link]
                </p>
              </div>

            </div>

            {/* Right Column: Technology Stack Visualization */}
            <div style={{
              backgroundColor: COLOR_CARD_BG,
              padding: '30px',
              borderRadius: '8px',
              boxShadow: `0 0 10px rgba(0, 240, 255, 0.2)`,
              border: `1px solid ${COLOR_BORDER}`,
            }}>
              <h2 style={{ color: COLOR_NEON, fontSize: '2rem', marginBottom: '20px' }}>
                Technology Stack
              </h2>
              <p style={{ opacity: 0.9 }}>
                The architecture is built for performance and scalability, leveraging industry-leading tools:
              </p>
              <TechStackHexGrid />
            </div>
          </div>
          
          {/* Footer Space */}
          <div style={{ height: '40px' }} />
        </div>
      </div>
    </Layout>
  );
}