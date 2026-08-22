# Airbnb Clone

A React + TypeScript + Vite implementation of an Airbnb-style property listing page, including the property gallery, photo tour, lightbox, amenities, booking section, reviews, host information, and responsive UI.

## Requirements

- Node.js installed
- npm installed

## Run Locally

### 1. Install dependencies

Open the project folder in your terminal and run:

```bash
npm install
```

### 2. Start the development server

npm run dev

Vite will start the local development server.

Open the URL shown in the terminal, usually:

<http://localhost:5173>

## Available Commands

npm install     # Install dependencies
npm run dev     # Start development server
npm run build   # Create production build
npm run preview # Preview production build

## Project Structure

src/
├── assets/              # Property images and static assets
├── components/
│   ├── common/           # Reusable UI components
│   ├── gallery/          # Property gallery
│   ├── layout/           # Navbar and navigation
│   ├── lightbox/         # Full-screen photo viewer
│   ├── listing/          # Property listing sections
│   └── photo-tour/       # Photo tour page
├── data/
│   └── photos.ts         # Photo and category data
├── pages/
│   └── ListingPage.tsx   # Main listing page
├── types/
│   └── index.ts          # TypeScript types
├── App.tsx               # Application root
├── main.tsx              # Entry point
└── index.css             # Global styles

## Important

Run npm install before running the project for the first time.
Use npm run dev during development.
Do not manually create node_modules; npm generates it automatically.
The project uses Vite as the development and build tool.
