import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

// --- CUSTOM STYLES (Updated for Light/Transparent Interface) ---
const COLOR_ACCENT = "#00D0FF"; // Bright Digital Cyan
const COLOR_SECTION_BG = "#F0F4F8"; // KEY CHANGE: Light, cool-gray background
const COLOR_TEXT_DARK = "#10151C"; // Very dark text for the light background
const COLOR_CARD_BG_TRANSPARENT = "rgba(10, 15, 23, 0.8)"; // Semi-transparent dark blue-black
const COLOR_CARD_TEXT_LIGHT = "#E5E7EB"; // Light text for cards
const CARD_SHADOW = `0 8px 25px rgba(0, 0, 0, 0.15)`; // Deeper, softer shadow
// --- END CUSTOM STYLES ---

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

// ... (FeatureList content remains the same)
const FeatureList: FeatureItem[] = [
  {
    title: "Actuator Control Systems",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
                Dive deep into low-level joint manipulation, servo control, and
        dynamics modeling for complex humanoid motion.      {" "}
      </>
    ),
  },
  {
    title: "Real-Time Perception",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
                Learn sensor fusion, LiDAR processing, and camera-based vision
        systems critical for autonomous navigation and interaction.      {" "}
      </>
    ),
  },
  {
    title: "Modular Architecture",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
                Understand scalable robot operating system (ROS) design and
        module separation for robust, enterprise-grade robotics software.      {" "}
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div
      className={clsx("col col--4")}
      style={{
        padding: "1rem",
        display: "flex",
      }}
    >
      {/* Inner Card Container: Transparent Dark Panel */}
      <div
        className="text--left"
        style={{
          // KEY CHANGE: Transparent Dark Background
          backgroundColor: COLOR_CARD_BG_TRANSPARENT,
          padding: "2rem 1.5rem",
          borderRadius: "0.25rem",
          border: `1px solid ${COLOR_ACCENT}30`, // Subtle light border
          borderTop: `4px solid ${COLOR_ACCENT}`,
          boxShadow: CARD_SHADOW,
          height: "100%",
          flexGrow: 1,
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            float: "right",
            marginLeft: "1rem",
          }}
        >
                 {" "}
          <Svg
            className={styles.featureSvg}
            role="img"
            style={{
              width: "40px",
              height: "40px",
              marginBottom: "1rem",
              fill: COLOR_ACCENT,
              stroke: COLOR_ACCENT,
              opacity: 0.8,
            }}
          />
               {" "}
        </div>
               {" "}
        <div>
                 {" "}
          <Heading
            as="h3"
            style={{ color: COLOR_ACCENT, fontWeight: 700, marginTop: 0 }}
          >
            {title}
          </Heading>
          {/* Horizontal rule is now lighter to contrast the dark card background */}
          <hr
            style={{
              borderColor: `${COLOR_ACCENT}50`,
              opacity: 0.5,
              marginBottom: "1rem",
            }}
          />
                 {" "}
          <p
            style={{
              color: COLOR_CARD_TEXT_LIGHT,
              opacity: 0.9,
              lineHeight: 1.6,
            }}
          >
            {description}
          </p>
                 {" "}
        </div>
               {" "}
      </div>
         {" "}
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section
      style={{
        // KEY CHANGE: Light background for the section
        backgroundColor: COLOR_SECTION_BG,
        padding: "5rem 0 6rem 0", // More vertical padding
        color: COLOR_TEXT_DARK, // Dark text on light background
        borderTop: `2px solid ${COLOR_ACCENT}50`, // Clear divider line
      }}
    >
           {" "}
      <div className="container">
        {/* Section Heading - Now dark text on light background */}
        <h2
          style={{
            color: COLOR_TEXT_DARK, // Dark text
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: "4rem",
            textShadow: `0 0 1px ${COLOR_TEXT_DARK}40`,
          }}
        >
          Core Curriculum Modules
        </h2>
               {" "}
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
                   {" "}
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
                 {" "}
        </div>
             {" "}
      </div>
         {" "}
    </section>
  );
}
