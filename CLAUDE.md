# SAT Study Dashboard

## Project

A web app for SAT students to log practice test scores, track progress over time, identify weak subject areas, and receive study recommendations. Single-user, client-side only at MVP.

## Tech Stack

| Tool | Why |
|---|---|
| **React + Vite** | Fast dev setup, component model suits dashboard UI |
| **TypeScript** | Catches shape mismatches early on score/category data |
| **Tailwind CSS** | Utility-first — efficient for dashboard layouts |
| **Recharts** | Lightweight charting built for React; good for score-over-time graphs |
| **Zustand** | Minimal global state without Redux overhead |
| **localStorage** | MVP-appropriate persistence; no backend needed for a single-user tool |

## Coding Conventions

- Functional components and hooks only — no class components.
- PascalCase for component files (`ScoreEntry.tsx`), camelCase for utilities (`formatScore.ts`).
- Named exports for utilities and hooks; default exports only for page-level components.
- Tailwind classes only for styling — no inline styles, no separate CSS files.
- No comments unless the *why* is non-obvious to a reader. Never describe what the code does.

## Restrictions

- Do not add a backend, authentication, or database unless explicitly requested.
- Do not refactor working code when only a targeted change is requested.
- Do not add features beyond what the current request specifies.
- Do not create a new file when editing an existing one would suffice.
