# Russian Grammar Learning Tool

## Project Overview

This is a React application built with TypeScript and Vite, designed to help students learn Russian grammar. Specifically, it features interactive charts for understanding the formation and usage of:

*   **Деепричастие (Gerundio):** Imperfective and Perfective aspects.
*   **Причастие (Participio):** Present and Past tenses, including Active and Passive voices.

The application uses `framer-motion` for animations (revealing steps, arrows) and `tailwindcss` for styling. It implements a custom "butterfly" chart layout for the Participles to effectively visualize the branching logic of Russian grammar.

## Architecture & Tech Stack

*   **Framework:** React 19
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS v4
*   **Animation:** Framer Motion
*   **Icons:** Lucide React
*   **State Management:** React Context API (`ChartContext`) is used to manage the expansion state of the interactive charts globally.

## Key Files

*   `src/App.tsx`: Contains the main application logic, including the `GerundChart` and `ParticipleChart` components, the `ChartProvider`, and the `ControlPanel`. This file currently holds all the chart logic and SVG drawing code.
*   `src/index.css`: Tailwind CSS imports and global styles.
*   `src/main.tsx`: Application entry point.
*   `vite.config.ts`: Vite configuration, including the Tailwind CSS plugin.

## Development

### Prerequisites

*   Node.js (v18+ recommended)
*   npm

### Commands

*   **Install Dependencies:**
    ```bash
    npm install
    ```

*   **Start Development Server:**
    ```bash
    npm run dev
    ```
    The server typically starts at `http://localhost:5173`.

*   **Build for Production:**
    ```bash
    npm run build
    ```

*   **Preview Production Build:**
    ```bash
    npm run preview
    ```

*   **Linting:**
    ```bash
    npm run lint
    ```

## Coding Conventions

*   **Components:** Functional components with hooks are used throughout.
*   **Styling:** Utility-first CSS with Tailwind.
*   **State:** Local state is used for simple toggles, but `ChartContext` is preferred for shared state like expanding/collapsing all chart nodes.
*   **Animations:** `AnimatePresence` and `motion` components from `framer-motion` are used for entry/exit animations.
