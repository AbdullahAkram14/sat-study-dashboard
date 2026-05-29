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

* Brief: Add latest score, best score, and improvement calculations based on submitted SAT score records.
* What Claude proposed: Compute summary statistics from the scores array and display them in a small stats grid.
* What I changed before approving: I requested that improvement display 0 instead of a dash when only one score exists.
* Verification: Added multiple score entries and confirmed latest score, best score, and improvement values updated correctly.
* One thing I learned: Data ordering matters when calculating statistics such as latest and first scores.
## Task 4 — Weak areas and recommendations

- Brief: Add weak-area selection and show a matching study recommendation.
- What Claude proposed: Add weakArea state in App, replace the WeakAreas placeholder with a select menu, and show recommendations from a simple map.
- What I changed before approving: I kept the feature simple and avoided adding backend storage or charts.
- Verification: Selected different weak areas in the browser and confirmed the selected area and matching recommendation appeared.
- One thing I learned: A simple state value and map object can create useful personalized feedback without needing a complex system.
## Task 5 — Score calculation tests

- Brief: Add simple automated tests for total score and improvement calculations.
- What Claude proposed: Extract score helper functions into `scoreUtils.ts`, add Vitest, and write tests for total score and improvement.
- What I changed before approving: I approved the plan because extracting pure helper functions made the logic easier to test.
- Verification: Ran `npm test` and confirmed the score calculation tests passed.
- One thing I learned: Pulling logic out of components makes it easier to test important behavior.