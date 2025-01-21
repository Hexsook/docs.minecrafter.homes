// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Minecrafter Documents',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.minecrafter.homes/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TopMines Studios', // Usually your GitHub org/user name.
  projectName: 'docs.minecrafter.homes', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: 'Minecrafter Documents',
        items: [
          {
            type: 'localeDropdown',
            position: 'right'
          },
          {
            label: 'Minecrafter Home',
            href: 'https://minecrafter.homes/',
            position: 'left',
          },
          {
            href: 'https://github.com/Hexsook/docs.minecrafter.homes/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Minecrafter Home',
                href: 'https://minecrafter.homes/',
              },
              {
                label: 'TopMines Network',
                href: 'https://topmines.minecrafter.homes/',
              },
              {
                label: 'Status Monitor',
                href: 'https://status.minecrafter.homes/',
              },
            ],
          },
          {
            title: 'Useful Links',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Hexsook/docs.minecrafter.homes/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TopMines Studios. All Rights Reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
