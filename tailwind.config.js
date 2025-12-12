/**
 * Tailwind CSS Configuration
 * Syncs with FSE theme.json for color/spacing inheritance
 */

module.exports = {
  content: [
    './src/**/*.{js,jsx}',
    './src/blocks/**/*.{js,jsx}',
  ],
  
  theme: {
    extend: {
      colors: {
        // Colors will be synced from FSE theme.json at build time
        primary: 'var(--wp--preset--color--primary, #0063a0)',
        secondary: 'var(--wp--preset--color--secondary, #4d4d4d)',
        accent: 'var(--wp--preset--color--accent, #00a0f2)',
      },
      spacing: {
        // Spacing values from FSE theme.json
      },
      fontSize: {
        // Typography from FSE theme
      },
    },
  },
  
  corePlugins: {
    // Prevent Tailwind from injecting default styles
    preflight: false,
  },
  
  // Ensure Tailwind classes don't conflict with WordPress styles
  important: '.wp-block, [data-block]',
};
