import React from 'react';
import Layout from '@theme/Layout';

// --- Aesthetic Colors (Same as About Us) ---
const COLOR_BG_DARK = '#050D1D';      // Deep Dark Blue/Black
const COLOR_NEON = '#09E8B8';        // Bright Teal/Cyan Accent
const COLOR_ACCENT_TEXT = '#25C2A0';  // Lighter Cyan for body text
const COLOR_CARD_BG = '#0B1B36';      // Darker Blue for Cards
const COLOR_BORDER = '#006B7A';      // Subtle Border Color
// ---

// Style for the container holding the main contact panels
const panelGridStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr', // 2/3rds for support, 1/3rd for general
    gap: '40px',
    marginTop: '40px',
};

// Style for individual section panels
const panelStyle = {
    backgroundColor: COLOR_CARD_BG,
    padding: '35px',
    borderRadius: '8px',
    boxShadow: `0 0 10px rgba(0, 240, 255, 0.1)`, 
    height: '100%',
};

// Style for a primary contact link/button
const primaryLinkStyle = {
    backgroundColor: COLOR_NEON,
    color: COLOR_BG_DARK,
    padding: '12px 25px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 800,
    fontSize: '1.1rem',
    display: 'inline-block',
    marginTop: '15px',
    transition: 'background-color 0.3s, transform 0.3s',
};

const handleHoverInPrimary = (e) => {
    e.currentTarget.style.backgroundColor = '#00FFFF'; // Slightly lighter neon
    e.currentTarget.style.transform = 'translateY(-2px)';
};

const handleHoverOutPrimary = (e) => {
    e.currentTarget.style.backgroundColor = COLOR_NEON;
    e.currentTarget.style.transform = 'translateY(0)';
};


export default function ContactPage() {
  return (
    <Layout
      title="Contact Us"
      description="Access support channels for the Panaversity RAG Assistant."
    >
      {/* Main Page Container with Dark Background */}
      <div style={{
        minHeight: '100vh',
        backgroundColor: COLOR_BG_DARK,
        padding: '60px 20px',
        color: COLOR_ACCENT_TEXT,
        fontFamily: 'system-ui, sans-serif',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Header Section */}
          <h1 style={{
            color: COLOR_NEON,
            fontSize: '3.5rem',
            fontWeight: 900,
            borderBottom: `6px solid ${COLOR_NEON}`,
            width: 'fit-content',
            paddingBottom: '5px',
            marginBottom: '40px',
            textShadow: `0 0 15px rgba(0, 240, 255, 0.8)`,
          }}>
            🛰️ Contact & Support Nexus
          </h1>

          {/* Intro Message */}
          <div style={{ 
            padding: '20px 0', 
            fontSize: '1.1rem', 
            marginBottom: '30px', 
            borderBottom: `1px solid ${COLOR_BORDER}` 
          }}>
            <p style={{ margin: 0 }}>
              Use the following dedicated channels to communicate with the development team. Technical support and general inquiries are handled separately to ensure efficient resolution.
            </p>
          </div>

          {/* Contact Panels Grid */}
          <div style={panelGridStyle}>

            {/* Left Panel: Primary Support Channels (2/3rds width) */}
            <div style={{...panelStyle, borderLeft: `5px solid ${COLOR_NEON}`}}>
              <h2 style={{ color: COLOR_NEON, fontSize: '2rem', marginBottom: '20px', borderBottom: `2px solid ${COLOR_BORDER}`, paddingBottom: '10px' }}>
                Technical Support & Issues
              </h2>
              <p style={{ fontWeight: 600, color: COLOR_ACCENT_TEXT }}>
                For bugs, performance regressions, and feature implementation queries related to the RAG core.
              </p>
              
              <div style={{ marginTop: '30px' }}>
                <h3 style={{ color: COLOR_ACCENT_TEXT, marginBottom: '10px' }}>
                    1. Submit a Detailed Bug Report
                </h3>
                <p style={{ margin: '0 0 15px 0' }}>
                    The preferred method for tracking and resolving technical issues.
                </p>
                <a 
                    href="[Your-GitHub-Repo-Link]/issues" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={primaryLinkStyle}
                    onMouseEnter={handleHoverInPrimary}
                    onMouseLeave={handleHoverOutPrimary}
                >
                    GO TO GITHUB ISSUES
                </a>
              </div>
              
              <div style={{ marginTop: '30px' }}>
                <h3 style={{ color: COLOR_ACCENT_TEXT, marginBottom: '10px' }}>
                    2. Direct Technical Email
                </h3>
                <p style={{ margin: '0 0 15px 0' }}>
                    Use for urgent communication when GitHub access is not feasible.
                </p>
                <a 
                    href="mailto:[Your-Support-Email@example.com]" 
                    style={primaryLinkStyle}
                    onMouseEnter={handleHoverInPrimary}
                    onMouseLeave={handleHoverOutPrimary}
                >
                    SEND SUPPORT EMAIL
                </a>
              </div>

            </div>

            {/* Right Panel: General & Administrative (1/3rd width) */}
            <div style={{...panelStyle, borderRight: `5px solid ${COLOR_NEON}`}}>
              <h2 style={{ color: COLOR_NEON, fontSize: '2rem', marginBottom: '20px', borderBottom: `2px solid ${COLOR_BORDER}`, paddingBottom: '10px' }}>
                General Communications
              </h2>
              <p style={{ fontWeight: 600, color: COLOR_ACCENT_TEXT }}>
                For administrative, partnership, and high-level project inquiries.
              </p>
              
              <div style={{ marginTop: '30px' }}>
                <h3 style={{ color: COLOR_ACCENT_TEXT, marginBottom: '10px' }}>
                    Primary Contact
                </h3>
                <p style={{ margin: '0 0 15px 0' }}>
                    <strong style={{ display: 'block' }}>[Your Name/Team Lead Name]</strong>
                    <a 
                        href="mailto:[Your-General-Email@example.com]" 
                        style={{ color: COLOR_ACCENT_TEXT, textDecoration: 'none' }}
                    >
                        [Your-General-Email@example.com]
                    </a>
                </p>
              </div>

              <div style={{ marginTop: '30px' }}>
                <h3 style={{ color: COLOR_ACCENT_TEXT, marginBottom: '10px' }}>
                    Project Information
                </h3>
                <p style={{ margin: '0 0 15px 0' }}>
                    Maintained by the **[Your Team Name]** Development Group.
                </p>
              </div>

            </div>

          </div>
          
          {/* Footer Space */}
          <div style={{ height: '40px' }} />
        </div>
      </div>
    </Layout>
  );
}