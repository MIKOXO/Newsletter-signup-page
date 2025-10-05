# Newsletter Sign-up Page

A responsive, accessible newsletter sign-up UI built with React, Vite and Tailwind CSS. This repository is a solution to the Frontend Mentor "Newsletter sign-up page" challenge and demonstrates a small, production-like frontend setup with animations (Framer Motion), linting, and a simple form/validation flow.

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer-Motion](https://motion.dev/)

## Getting started

These steps will get the project running on your local machine for development and testing.

### Prerequisites

- Node.js (LTS recommended)
- npm (or yarn/pnpm if you prefer — commands below use npm)

### Install

Open a terminal in the project root and run:

```bash
npm install
```

### Available scripts

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview a production build locally:

```bash
npm run preview
```

Run ESLint across the project:

```bash
npm run lint
```

## Project structure

Key files and folders:

- `index.html` — App entry HTML
- `src/` — Application source files
  - `main.js  ` — App bootstrap and root render
  - `App.jsx` — Root component
  - `index.css` — Tailwind input & global styles
  - `components/SubscribeForm.jsx` — Form and valida ion UI
  - `components/SuccessCard.jsx` — Post-submit success state
  - `assets/` — Images and icons used by the UI
- `public/` — Static files served by Vite
- `package.json` — Project metadata and scripts
- `tailwind.config.js`, `postcss.config.js` — Styling config

## Features

- Responsive layout for mobile, tablet, and desktop
- Client-side validation for the email input
- Animated transitions using Framer Motion
- Accessible form semantics and focus states
- Minimal, modern toolchain using Vite and Tailwind

## Credits

- Challenge by [Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv) for the challenge and design inspiration
- Icons and images from the challenge assets

- Coded by [MIKOXO](https://github.com/MIKOXO)
