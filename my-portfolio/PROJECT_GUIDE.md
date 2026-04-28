# PROJECT_GUIDE.md

## Project Vision
To develop a high-performance professional portfolio that serves as both a digital resume and a live demonstration of a custom Material UI (MUI) design system. By leveraging Storybook for component documentation and scalability, the project will showcase technical proficiency in design engineering while providing a modular framework to integrate future works.

## Coding & Structure Best Practices

### 1. Theme & Design Tokens
- Centralize all color palettes, typography, spacing, and design tokens in `src/theme/index.ts`.
- Use the theme for all component styling (via MUI's `styled` or `sx` prop).
- Add global resets and base styles via `MuiCssBaseline.styleOverrides` in the theme.

### 2. Component Structure
- Each component lives in its own folder under `src/components/ComponentName/`.
- Use `Component.styles.ts` for component-specific styles, referencing the theme.
- Use `Component.types.ts` for TypeScript types and props.
- Keep stories and tests in `stories/` or `__tests__/` subfolders.
- Export from `index.ts` for clean imports.

### 3. File Naming & Organization
- Use PascalCase for component folders and files (e.g., `Button/Button.tsx`).
- Use camelCase for variables and functions.
- Use SCREAMING_SNAKE_CASE for constants if needed.

### 4. TypeScript
- Use TypeScript for all code.
- Define and export prop types in `Component.types.ts`.
- Prefer explicit types for props, state, and function signatures.

### 5. Styling
- Prefer MUI's `styled` API or `sx` prop for styling.
- Reference the theme for all colors, spacing, and typography.
- Avoid inline styles except for dynamic, one-off cases.
- Use utility classes sparingly; prefer theme-based solutions.

### 6. Global Styles
- All global styles and resets should be in the theme, not in separate SCSS files.
- Remove legacy SCSS as you migrate to the theme system.

### 7. Imports & Exports
- Use absolute imports (configure `tsconfig.json` paths if needed).
- Export components and types from `index.ts` in each folder.

### 8. Documentation
- Document complex components and utilities with JSDoc or comments.
- Keep this PROJECT_GUIDE.md updated as conventions evolve.

## Vibe & Principles
- Consistency over cleverness.
- Prefer readability and maintainability.
- Co-locate related files for discoverability.
- Use the theme for all design decisions.
- Refactor mercilessly—keep code clean and DRY.

---

_This guide is a living document. Update as the project grows or as new best practices emerge._
