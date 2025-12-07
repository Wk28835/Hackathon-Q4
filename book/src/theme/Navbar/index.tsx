import React, {type ReactNode} from 'react';
import Navbar from '@theme-original/Navbar';
import type NavbarType from '@theme/Navbar';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof NavbarType>;

// --- CUSTOM STYLES ---
const COLOR_ACCENT = '#00D0FF';    // Bright Digital Cyan
const COLOR_BACKGROUND = '#000000'; // Pure Black
// --- END CUSTOM STYLES ---

export default function NavbarWrapper(props: Props): ReactNode {
  return (
    // We wrap the original Navbar component in a div to apply our custom styles
    <div
        style={{
            backgroundColor: COLOR_BACKGROUND,
            borderBottom: `2px solid ${COLOR_ACCENT}`, // Professional, sharp separating line
            boxShadow: `0 2px 10px rgba(0, 0, 0, 0.5)`, // Subtle downward shadow
            zIndex: 100, // Ensure the navbar sits above other elements
        }}
    >
      <Navbar {...props} />
    </div>
  );
}