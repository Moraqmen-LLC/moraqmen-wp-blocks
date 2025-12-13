# Moraqmen Blocks - Block Structure Guide

## Repository Overview

This document outlines the structure and implementation patterns for all custom Gutenberg blocks in the Moraqmen Blocks WordPress plugin.

## Completed Blocks

### 1. Hero Banner Block ✓
**Location:** `src/blocks/hero-banner/`
**Status:** Fully Implemented
**Files:**
- `block.json` - Block registration & configuration
- `index.js` - Block registration with edit/save components
- `edit.js` - Editor component with RichText & Media controls
- `save.js` - Frontend render component
- `style.scss` - Responsive styles with Tailwind integration

## Remaining Blocks to Implement

### 2. Feature Cards Block
**Location:** `src/blocks/feature-cards/`
**Description:** Grid-based card layout with icon, title, and description
**Required Files:**
- `block.json`
- `index.js`
- `edit.js`
- `save.js`
- `style.scss`

### 3. Testimonials Block
**Location:** `src/blocks/testimonials/`
**Description:** Carousel/grid display with author, quote, and avatar
**Required Files:**
- `block.json`
- `index.js`
- `edit.js`
- `save.js`
- `style.scss`

### 4. CTA Button Block
**Location:** `src/blocks/cta-button/`
**Description:** Standalone call-to-action button with multiple variants
**Required Files:**
- `block.json`
- `index.js`
- `edit.js`
- `save.js`
- `style.scss`

### 5. Boilerplate Template
**Location:** `src/blocks/_boilerplate/`
**Description:** Template for creating new custom blocks
**Required Files:**
- `block.json`
- `index.js`
- `edit.js`
- `save.js`
- `style.scss`

## Implementation Pattern

Each block follows this structure:

### block.json
```json
{
  "$schema": "https://schemas.wp.org/trunk/block.json",
  "apiVersion": 3,
  "name": "moraqmen-blocks/block-name",
  "title": "Block Title",
  "description": "Block description",
  "category": "layout",
  "icon": "icon-name",
  "supports": { ... },
  "attributes": { ... },
  "editorScript": "file:./index.js",
  "editorStyle": "file:./style.scss",
  "style": "file:./style.scss"
}
```

### index.js
Registers block with WordPress and imports edit/save components

### edit.js
Provides editor interface with InspectorControls and block preview

### save.js
Defines how block renders on frontend

### style.scss
Styles for both editor and frontend with Tailwind CSS utilities

## Key Technologies

- **Gutenberg API** - WordPress block editor framework
- **React** - Component-based UI (functional components)
- **Tailwind CSS** - Utility-first CSS framework
- **FSE Theme Integration** - Inherits colors/spacing from theme.json
- **GitHub Copilot** - Code generation assistance

## Development Guidelines

1. Always use functional React components
2. Utilize Tailwind CSS classes for styling
3. Inherit colors/spacing from FSE theme.json
4. Include proper JSDoc comments
5. Test responsive design across devices
6. Follow BEM naming convention for CSS classes
7. Use semantic HTML elements

## Next Steps

1. Create Feature Cards block directory
2. Implement remaining 4 blocks following Hero Banner pattern
3. Create boilerplate template for easy block creation
4. Add block documentation
5. Set up build process for production
