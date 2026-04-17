# fuel-security

Development environment for the **Fuel Security** NT Government page (`https://cmsexternal.nt.gov.au/fuel-security`).

## Project structure

```
fuel-security/
├── src/
│   └── css/
│       ├── main.css                  # CSS entry point — add @imports here
│       └── components/
│           ├── mainmenu-dropdown.css # Navigation dropdown styles
│           └── header-footer.css     # Header/footer brand colour overrides
├── Fuel security_files/              # Static assets (vendor JS, base CSS)
│   ├── ntgbase.min.css
│   ├── bootstrap.bundle.min.js
│   └── …
├── Fuel security.html                # Page snapshot (dev entry point)
├── vite.config.js
└── package.json
```

> `dist/theme.css`, `dist/print.css`, and `Fuel security.html` are build artifacts. `dist/theme.css` and `dist/print.css` are tracked by git for the Squiz Matrix file bridge; all other `dist/` output and `Fuel security.html` are excluded via `.gitignore`.

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

Outputs compiled, minified CSS to `dist/theme.css` (referenced in Squiz Matrix via the git file bridge).

## Adding new CSS component files

1. Create a new file in `src/css/components/`, e.g. `src/css/components/hero-banner.css`
2. Add an `@import` line to `src/css/main.css`:

   ```css
   @import "./components/hero-banner.css";
   ```

3. Run `npm run dev` to preview, or `npm run build` to compile.

## Deployment

Use the `deploy-to-dev.prompt.md` prompt with GitHub Copilot to stage, commit, and push changes to the `dev` branch automatically.

## Brand colours

Source: _Accessible Colours — Brand Guidelines, May 2025_

### Primary

| Name      | HEX       | Accessible HEX | Accessible with |
| --------- | --------- | -------------- | --------------- |
| Territory | `#F4551A` | `#D6410A`      | White text      |
| Charcoal  | `#343741` | `#343741`      | White text      |

### Secondary

| Name      | HEX       | Accessible HEX | Accessible with |
| --------- | --------- | -------------- | --------------- |
| Sand      | `#D9DED4` | `#D9DED4`      | Black text      |
| Monsoon   | `#003251` | `#003251`      | White text      |
| Coastline | `#2E979C` | `#288186`      | White text      |
| Savannah  | `#566C30` | `#566C30`      | White text      |
| Ranges    | `#552855` | `#552855`      | White text      |

### Regional

| Name              | HEX       | Accessible HEX | Accessible with     |
| ----------------- | --------- | -------------- | ------------------- |
| Darwin            | `#76BA43` | `#398600`      | Black or white text |
| Top End           | `#009DC1` | `#00819E`      | Black or white text |
| East Arnhem       | `#D1DD26` | `#D1DD26`      | Black text          |
| Big Rivers        | `#FCB414` | `#FCB414`      | Black text          |
| Barkly            | `#F05A24` | `#D2430F`      | White text          |
| Central Australia | `#ED164E` | `#A8114B`      | White text          |
