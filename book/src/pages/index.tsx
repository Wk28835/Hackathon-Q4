import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

// Define the custom style variables inside the component for easier maintenance
function HomepageHeader() {
 
  
  // Custom Content Variables
  const MAIN_TITLE = "Project Atlas: Physical AI";
  const SUB_TITLE = "Physical AI & Humanoid Robotics Course";
  const DESCRIPTION = "Mastering the Hardware-Software Loop of Advanced Robotics. The definitive guide to Actuator Control, System Architecture, and Perception.";
  
  // --- NEW CUSTOM COLORS & STYLES ---
  const COLOR_ACCENT = '#00D0FF';    // Bright Digital Cyan
  const COLOR_BACKGROUND = '#0A0F17'; // Near-Black
  const COLOR_TEXT = '#E5E7EB';     // Light Gray
  const GLOW_SHADOW = `0 0 15px rgba(0, 208, 255, 0.6)`; // Cyan Glow

  return (
    // Main Hero Container - Dark, high-contrast digital screen
    <header 
      style={{
        backgroundColor: COLOR_BACKGROUND,
        padding: '8rem 0 6rem 0', // More top padding for presence
        textAlign: 'center',
        color: COLOR_TEXT,
        minHeight: '65vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderBottom: `2px solid ${COLOR_ACCENT}`, // Subtle separator line
      }}
    >
      <div className="container">
        
        {/* Course Title - Authority & Impact, slightly spaced for technical reading */}
        <Heading 
          as="h1" 
          style={{
            fontSize: '3.8rem',      // Bigger size
            fontWeight: 900,         // Extra bold for technical authority
            marginBottom: '0.5rem',
            color: COLOR_TEXT,
            letterSpacing: '1px',    // Technical font spacing
            textShadow: GLOW_SHADOW, // Subtle glow effect
          }}
        >
          {MAIN_TITLE}
        </Heading>
        
        {/* Subtitle - The Course Name (Use accent color) */}
        <p 
          style={{
            fontSize: '2.2rem',
            fontWeight: 400,
            marginBottom: '1rem',
            color: COLOR_ACCENT, // Vibrant accent color
            fontStyle: 'italic', // Subtle tech interface style
          }}
        >
          {SUB_TITLE}
        </p>

        {/* Descriptive Text - Clean and functional */}
        <p 
          style={{
            fontSize: '1.2rem',
            maxWidth: '800px',
            margin: '0 auto 3.5rem auto',
            opacity: 0.8,
            borderTop: `1px dashed ${COLOR_ACCENT}50`, // Dashed line separator
            paddingTop: '1rem',
          }}
        >
          {DESCRIPTION}
        </p>
        
        {/* Call-to-Action (CTA) - Holographic Glow */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
          }}
        >
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{
              backgroundColor: COLOR_ACCENT,
              color: COLOR_BACKGROUND,
              fontWeight: 700,
              padding: '1rem 3rem', // Larger button
              borderRadius: '0',    // Sharp corners for technical feel
              border: 'none',
              boxShadow: GLOW_SHADOW, // The key: The glow effect
              transition: 'all 0.3s ease',
              // Note: For a hover effect, you'd need external CSS/Tailwind or state.
            }}
          >
            Access Core Modules →
          </Link>
          
          {/* Optional Secondary Button for professional touch */}
          <Link
            className="button button--outline button--lg"
            to="/blog" 
            style={{
                backgroundColor: 'transparent',
                color: COLOR_ACCENT,
                fontWeight: 600,
                padding: '1rem 3rem',
                borderRadius: '0',
                border: `1px solid ${COLOR_ACCENT}`, // Outline matching accent
            }}
          >
            View Changelog
          </Link>
        </div>
      </div>
    </header>
  );
}

// ... rest of the file remains the same
// --- END: MODIFIED COMPONENT ---

export default function Home(): ReactNode {
  
  return (
    <Layout
      // Changed the title to reflect the new course name
      title={`Home | Physical AI & Humanoid Robotics`}
      description="The definitive documentation for the Physical AI & Humanoid Robotics Course.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}