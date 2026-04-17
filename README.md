# fuel-security

Development environment for the **Fuel Security** NT Government page (`https://cmsexternal.nt.gov.au/fuel-security`).

## Project structure

```
fuel-security/
├── src/
│   └── css/
│       ├── main.css                  # CSS entry point — add @imports here
│       └── components/
│           └── mainmenu-dropdown.css # Navigation dropdown styles
├── Fuel security_files/              # Static assets (vendor JS, base CSS)
│   ├── ntgbase.min.css
│   ├── bootstrap.bundle.min.js
│   └── …
├── Fuel security.html                # Page snapshot (dev entry point)
├── vite.config.js
└── package.json
```

> `Fuel security_files/alt.css` and `Fuel security.html` are build/snapshot artifacts tracked by `.gitignore`.

## Prerequisites

- Node.js ≥ 18
- npm

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Vite starts a local dev server and opens `Fuel security.html` in your browser.  
`src/css/main.css` is served directly; all `@import` chains are resolved in-memory — no build step needed during development.

## Build

```bash
npm run build
```

Outputs compiled, minified CSS to `dist/Fuel security_files/alt.css`.

## Adding new CSS component files

1. Create a new file in `src/css/components/`, e.g. `src/css/components/hero-banner.css`
2. Add an `@import` line to `src/css/main.css`:

   ```css
   @import './components/hero-banner.css';
   ```

3. Run `npm run dev` to preview, or `npm run build` to compile.

## Deployment

Use the `deploy-to-dev.prompt.md` prompt with GitHub Copilot to stage, commit, and push changes to the `dev` branch automatically.
