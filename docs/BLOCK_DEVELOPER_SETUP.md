# Block Developer Setup Guide

## Overview

This guide is for developers working on the **Moraqmen-Blocks plugin** - a collection of custom Gutenberg blocks with Tailwind CSS integration for WordPress FSE themes.

**For theme developers**, see [THEME_DEVELOPER_SETUP.md](../THEME_DEVELOPER_SETUP.md) instead.

## Repository Structure

This is the **blocks plugin repository** (`moraqmen-wp-blocks`). It contains:

- Custom Gutenberg block components
- Tailwind CSS configuration for blocks
- Block styles and utilities
- npm build system for compiling CSS and JavaScript
- GitHub Copilot optimization guidelines

**Separate Repository**: The theme that uses these blocks is in [moraqmen-wp-theme](https://github.com/Moraqmen-LLC/moraqmen-wp-theme)

## Prerequisites

- Node.js 16+ and npm 7+
- WordPress 6.1+ with FSE support
- Local by Flywheel (or equivalent local development environment)
- Git and GitHub SSH key configured

## Quick Start

### 1. Clone Repository

```bash
git clone git@github.com:Moraqmen-LLC/moraqmen-wp-blocks.git
cd moraqmen-wp-blocks
```

### 2. Install Dependencies

```bash
npm install
```

This installs:
- Tailwind CSS
- PostCSS
- Development dependencies for block bundling

### 3. Build CSS

```bash
npm run dev
```

For production build:

```bash
npm run build
```

## Development Workflow

### Block Development

1. **Create Block Component**
   - Add new block in `src/blocks/[block-name]/`
   - Create `index.js` for block registration
   - Create `block.json` for block metadata

2. **Add Styles with Tailwind**
   - Use Tailwind utility classes in block components
   - Keep styles maintainable with consistent naming
   - Refer to `tailwind.config.js` for custom tokens

3. **Watch for Changes**
   ```bash
   npm run watch
   ```

### Tailwind CSS Configuration

- **Main Config**: `tailwind.config.js`
- **CSS Input**: `src/styles/main.css`
- **Output**: `dist/styles.css`

**Important**: Tailwind tokens are synced with theme `theme.json`. When updating Tailwind config, notify theme developers.

## NPM Scripts

- `npm install` - Install dependencies
- `npm run dev` - Development build with watch
- `npm run build` - Production build
- `npm run lint` - Run linting checks

## GitHub Copilot Integration

See [.copilot-instructions](./.copilot-instructions) for Copilot optimization guidelines when developing blocks.

## File Structure

```
moraqmen-wp-blocks/
├── src/
│   ├── blocks/              # Custom block components
│   ├── styles/              # Tailwind CSS files
│   └── utilities/           # Helper functions
├── dist/                    # Compiled CSS & JS output
├── docs/                    # Documentation
├── tailwind.config.js       # Tailwind configuration
├── package.json             # npm dependencies
└── plugin.php               # Main plugin file
```

## Troubleshooting

### npm install fails

- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

### Tailwind CSS not compiling

- Ensure `npm run watch` or `npm run build` is running
- Check `tailwind.config.js` for syntax errors
- Verify Tailwind version matches `package.json`

### Block not appearing in WordPress

- Confirm plugin is activated in WordPress
- Check `block.json` metadata is correct
- Verify block registration in `index.js`
- Check browser console for JavaScript errors

## Testing Blocks in Theme

Once blocks are developed:

1. Install plugin in Local by Flywheel
2. Activate as **must-use plugin** (mu-plugin)
3. Access from theme's FSE block editor
4. Test block rendering and styling

## Related Documentation

- [Theme Developer Setup](../THEME_DEVELOPER_SETUP.md)
- [Implementation Guide](./IMPLEMENTATION_GUIDE.md)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [WordPress Block Editor Handbook](https://developer.wordpress.org/block-editor/)

## Support & Questions

For questions or issues:

1. Check existing GitHub Issues
2. Create a new issue with reproduction steps
3. Reference relevant documentation

---

**Last Updated**: December 18, 2025
**Version**: 1.0.0
