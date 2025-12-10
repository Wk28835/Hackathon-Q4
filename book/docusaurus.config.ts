import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  // --- UPDATED SITE METADATA ---
  title: 'Project Atlas: Physical AI',
  tagline: 'The definitive guide to Humanoid Robotics and Actuator Control.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  // Using generic names as placeholders is fine if not deploying to GitHub Pages
  organizationName: 'PhysicalAI', 
  projectName: 'Robotics-Course', 

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
   customFields: {
    RAG_API_URL: process.env.NEXT_PUBLIC_RAG_API_URL || 'http://127.0.0.1:8000',
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
        // 1. FORCES the site to load in 'dark' mode initially.
        defaultMode: 'dark', 
        
        // 2. REMOVES the theme toggle button (moon/sun icon) from the navbar.
        disableSwitch: true, 
        
        // 3. IGNORES the user's system preference (which defaults to light mode 
        //    on Vercel/browser environments if not specifically set to dark).
        respectPrefersColorScheme: false, 
    },
    // ... rest of themeConfig (navbar, footer, etc.)

   navbar: {
      title: 'Project Atlas',
      logo: {
        alt: 'Physical AI Logo',
        src: 'img/logo.svg',
      },
      items: [
        // 1. MODULES DROPDOWN (Replaced 'docSidebar' link)
        {
          type: 'dropdown', // Defines this as a dropdown menu
          label: 'Modules', // The title on the Navbar
          position: 'left',
          items: [
            // Link 1: Chapter 1
            {
                type: 'doc',
                docId: 'chapter1-introduction', // Assumes filename is chapter1-introduction.mdx
                label: 'Chapter 1: Introduction',
            },
            // Link 2: Chapter 2
            {
                type: 'doc',
                docId: 'chapter2-kinematics-dynamics', // Assumes filename is chapter2-kinematics-dynamics.mdx
                label: 'Chapter 2: Kinematics & Dynamics',
            },
            {
                type: 'doc',
                docId: 'chapter3-sensing-perception', // Assumes filename is chapter2-kinematics-dynamics.mdx
                label: 'Chapter3: Sensing & Perception',
            }, 
            {
                type: 'doc',
                docId: 'chapter4-control-navigation', // Assumes filename is chapter2-kinematics-dynamics.mdx
                label: 'Chapter4: Control & Navigation',
            }, 
            {
                type: 'doc',
                docId: 'chapter5-hri-future', // Assumes filename is chapter2-kinematics-dynamics.mdx
                label: 'Chapter5: HRI Future',
            },
            
          ],
        },
        
        // 2. UPDATES (Blog) TAB
        {to: '/blog', label: 'Blog', position: 'left'},
        
        // 3. NEW LINKS: ABOUT US & CONTACT US
        // Assumes you have (or will create) corresponding files in src/pages/ (e.g., src/pages/about.tsx)
        {to: '/aboutUs', label: 'About Us', position: 'left'},
        {to: '/contactUs', label: 'Contact Us', position: 'left'},
        
        // 4. GITHUB LINK (right position remains)
       
      ],
    },
    // Inside themeConfig:
footer: {
    style: 'dark', // Ensures the footer background remains dark, matching the professional theme.
    links: [
        {
            title: 'Course', // Renamed from 'Docs'
            items: [
                {
                    label: 'Start Learning',
                    to: '/',
                },
                {
                    label: 'Modules Index', // New link to the main docs route
                    to: '/',
                },
                {
                    label: 'Latest Updates',
                    to: '/blog',
                },
            ],
        },
        {
            title: 'Community',
            items: [
                // If you want to replace these with AI/Robotics-specific forums, do it here.
                {
                    label: 'Stack Overflow',
                    href: '/', 
                },
                {
                    label: 'Discord',
                    href: '/', // Replace with your Discord link
                },
            ],
        },
        {
            title: 'Company', // Renamed from 'More'
            items: [
                {
                    label: 'About Us',
                    to: '/aboutUs', // Matches the Navbar link
                },
                {
                    label: 'Contact Us',
                    to: '/contactUs', // Matches the Navbar link
                },
                {
                    label: 'Source Code',
                    href: '/', // Use your actual GitHub link
                },
            ],
        },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} Project Atlas: Physical AI Course. Built with Docusaurus.`,
},
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;