import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

// --- DATA DEFINITIONS ---

const PRIMARY_COLOR = '#00F0FF'; // Changed to neon cyan for consistency
const BACKGROUND_COLOR_DARK = '#050D1D'; // Deep dark background (Base/Fallback)
const FEATURE_BOX_COLOR_TRANSPARENT = 'rgba(11, 27, 54, 0.7)'; // Semi-transparent dark blue card
const BORDER_COLOR_SUBTLE = '#006B7A'; // Subtle border for cards
const TEXT_COLOR_LIGHT = '#E5E7EB';
const TEXT_COLOR_ACCENT = '#80FFFF'; // Lighter cyan text

const KeyFeatures = [
  {
    title: 'Intelligent Search (RAG)',
    IconText: '🤖',
    description: (
      <>
        Ask questions in natural language and receive precise, **sourced answers** directly from your documentation. Instant, accurate knowledge retrieval.
      </>
    ),
  },
  {
    title: 'Verifiable Sources',
    IconText: '✅',
    description: (
      <>
        Every answer is equipped with **direct links** to the source documentation, eliminating guesswork and ensuring data integrity.
      </>
    ),
  },
];

const FeatureGridItems = [
  {
    title: 'Instant Answers',
    description: 'No more endless scrolling. Get fast, concise answers instead of fragmented content.',
  },
  {
    title: 'Always Up-to-Date',
    description: 'Integrated with your docs platform, the knowledge base is automatically in sync with your latest content.',
  },
  {
    title: 'Zero Misalignment',
    description: 'The RAG model ensures answers are strictly grounded in your provided documentation, eliminating hallucination.',
  },
  {
    title: 'API Integration Ready',
    description: 'Easily integrate the RAG assistant into any external application or service via a simple API endpoint.',
  },
];

// --- COMPONENTS ---

/**
 * Component for the two large feature boxes below the hero.
 */
function MainKeyFeatures({ features }) {
  const featureCardStyle: React.CSSProperties = {
    backgroundColor: FEATURE_BOX_COLOR_TRANSPARENT,
    border: `1px solid ${BORDER_COLOR_SUBTLE}`,
    borderRadius: '12px',
    height: '100%',
    padding: '2rem', // Increased padding for impact
    display: 'flex',
    flexDirection: 'column',
    boxShadow: `0 0 5px rgba(0, 240, 255, 0.1)`,
    transition: 'all 0.3s ease-in-out',
  };

  const featureHeaderStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  };

  const iconStyle: React.CSSProperties = {
    fontSize: '2rem', // Larger icons
    color: PRIMARY_COLOR,
    marginRight: '1rem',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: PRIMARY_COLOR,
    margin: 0,
  };

  const descriptionStyle: React.CSSProperties = {
    color: TEXT_COLOR_ACCENT,
    fontSize: '1.05rem',
  };

  return (
    <section style={{ padding: '4rem 0 2rem 0', width: '100%', backgroundColor: 'transparent' }}>
      <div className="container">
        {/* Use the Docusaurus row/col grid system for responsiveness */}
        <div className="row">
          {features.map((props, idx) => (
            <div key={idx} className={clsx('col col--6')} style={{ padding: '1rem' }}>
              <div className="feature-card-large" style={featureCardStyle}>
                <div style={featureHeaderStyle}>
                  <span style={iconStyle}>{props.IconText}</span>
                  <h3 style={titleStyle}>{props.title}</h3>
                </div>
                <p style={descriptionStyle}>{props.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Component for the 2x2 grid of smaller features.
 */
function MainFeatureGrid() {
  const gridItemStyle: React.CSSProperties = {
    padding: '1rem',
  };

  const gridContentStyle: React.CSSProperties = {
    backgroundColor: FEATURE_BOX_COLOR_TRANSPARENT,
    padding: '1.5rem',
    borderRadius: '8px',
    height: '100%',
    border: `1px solid ${BORDER_COLOR_SUBTLE}`,
    transition: 'all 0.3s ease-in-out',
  };

  const h3Style: React.CSSProperties = {
    color: TEXT_COLOR_LIGHT,
    fontSize: '1.3rem',
    marginBottom: '0.5rem',
  };

  const pStyle: React.CSSProperties = {
    color: TEXT_COLOR_ACCENT,
    fontSize: '1rem',
    opacity: 0.9,
  };

  return (
    <section style={{ paddingTop: '1rem', paddingBottom: '3rem', backgroundColor: 'transparent' }}>
      <div className="container">
        <h2 style={{ color: PRIMARY_COLOR, textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>
            Core Capabilities
        </h2>
        {/* 2x2 Grid Layout */}
        <div className="row">
          {FeatureGridItems.map((props, idx) => (
            <div key={idx} className={clsx('col col--6')} style={gridItemStyle}>
              <div className="feature-card-small" style={gridContentStyle}>
                <h3 style={h3Style}>{props.title}</h3>
                <p style={pStyle}>{props.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Component for the Call to Action section at the bottom.
 */
function HomepageCTA() {
  const ctaSectionStyle: React.CSSProperties = {
    textAlign: 'center',
    backgroundColor: 'transparent',
    padding: '3rem 0 5rem 0',
    borderTop: `1px solid ${BORDER_COLOR_SUBTLE}50`,
  };

  const h2Style = {
    color: TEXT_COLOR_LIGHT,
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
  };

  const buttonsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.5rem',
  };

  const primaryButtonStyle: React.CSSProperties = {
    backgroundColor: PRIMARY_COLOR,
    color: BACKGROUND_COLOR_DARK,
    fontWeight: 700,
    fontSize: '1.1rem',
    padding: '0.75rem 2rem',
    transition: 'all 0.3s',
    border: 'none',
  };

  const secondaryButtonStyle: React.CSSProperties = {
    color: PRIMARY_COLOR,
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 600,
  };

  return (
    <section style={ctaSectionStyle}>
      <div className="container">
        <h2 style={h2Style}>Ready to Augment Your Documentation?</h2>
        <div style={buttonsContainerStyle}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro"
            style={primaryButtonStyle}
          >
            GET STARTED NOW
          </Link>
          <Link
            className="button button--link"
            style={secondaryButtonStyle}
            to="/aboutUs"
          >
            VIEW ARCHITECTURE
          </Link>
        </div>
      </div>
    </section>
  );
}

/**
 * The main Hero component with the title and buttons.
 */
function HomepageHero() {
  const { siteConfig } = useDocusaurusContext();

  const headerStyle: React.CSSProperties = {
    padding: '8rem 0 6rem 0', // Increased vertical padding
    position: 'relative',
    backgroundColor: 'transparent',
    color: TEXT_COLOR_LIGHT,
  };

  const titleStyle = {
    fontSize: '4rem',
    fontWeight: 900,
    color: PRIMARY_COLOR,
    textShadow: `0 0 10px ${PRIMARY_COLOR}50`, // Added subtle neon glow to title
    marginBottom: '0.5rem',
  };

  const subtitleStyle = {
    fontSize: '2rem',
    color: TEXT_COLOR_ACCENT,
    maxWidth: '800px',
    marginBottom: '0.5rem',
  };

  const taglineStyle = {
    fontSize: '1.3rem',
    color: TEXT_COLOR_LIGHT,
    marginBottom: '2rem',
  };

  return (
    <header style={headerStyle}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={titleStyle}>
          {siteConfig.title} RAG Assistant
        </h1>
        <p style={subtitleStyle}>
          Your AI-Powered Documentation Co-pilot.
        </p>
        <p style={taglineStyle}>
          Get **Instant**, **Accurate**, and **Verifiably Sourced** Answers.
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro"
            style={{
                backgroundColor: PRIMARY_COLOR,
                color: BACKGROUND_COLOR_DARK,
                fontWeight: 700,
                padding: '0.75rem 2rem',
                border: 'none',
            }}
          >
            START CHATTING
          </Link>
        </div>
      </div>
    </header>
  );
}


// --- MAIN PAGE RENDER (Default export) ---

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  // Style for the full-page background image
  const fullPageBgStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url('/img/bg2.png')`, // Changed to a consistent filename
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    opacity: 0.25, // Slightly less opaque background
    zIndex: -1,
    filter: 'brightness(0.7)',
  };

  // Inline style tag to handle :hover effects
  const hoverStyles = `
    /* AI-themed Hover Effect: Increased shadow, border color shift, and slight lift */
    .feature-card-large:hover, .feature-card-small:hover {
      transform: translateY(-5px); /* Increased lift */
      box-shadow: 0 0 20px 5px ${PRIMARY_COLOR}50; /* Stronger glow effect */
      border-color: ${PRIMARY_COLOR}; /* Border lights up */
      cursor: pointer;
      background-color: rgba(11, 27, 54, 0.9); /* Slightly darker on hover */
    }
  `;

  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Panversity RAG Assistant: Your AI-Powered Documentation Co-pilot">

      {/* 1. Full-page fixed background image */}
      <div style={fullPageBgStyle}></div>

      {/* 2. Inject CSS for hover effects */}
      <style dangerouslySetInnerHTML={{ __html: hoverStyles }} />

      {/* 3. All page content */}
      <main style={{ backgroundColor: 'transparent', position: 'relative', zIndex: 0 }}>
        <HomepageHero />
        <MainKeyFeatures features={KeyFeatures} />
        <MainFeatureGrid />
        <HomepageCTA />
      </main>
    </Layout>
  );
}