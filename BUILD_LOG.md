# BUILD_LOG.md

## Task 1 — Scaffold frontend

* Brief: Create a React + Vite + TypeScript SAT Study Dashboard with placeholder sections for Score Entry, Progress Summary, and Weak Areas.
* What Claude proposed: Set up a Vite React TypeScript project and create simple placeholder components.
* What I changed before approving: I removed Tailwind from the initial setup to keep the first task small and easy to verify.
* Verification: Ran `npm install`, `npm run dev`, and confirmed the page loaded with the dashboard title and all three placeholder sections.
* One thing I learned: Keeping the first task focused made debugging and verification much easier.

## Task 2 — Score entry and score history

* Brief: Add a form for SAT test date, Math score, and Reading/Writing score, then display submitted scores in a table.
* What Claude proposed: Store score records in React state, create a score-entry form component, and add a score-history table component.
* What I changed before approving: I kept the implementation in React state only and avoided adding localStorage or charts.
* Verification: Entered a test date, Math score, and Reading/Writing score; submitted the form; confirmed a new row appeared with the correct total score.
* One thing I learned: Breaking the feature into form input and display logic kept the code easier to understand.

## Task 3 — Progress summary

- Brief:
- What Claude proposed:
- What I changed before approving:
- Verification:
- One thing I learned: