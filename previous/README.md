Smart Enterprise HR — Frontend Prototype

This is a minimal vanilla HTML/JS/CSS front-end scaffold for integrating enterprise systems: HR, Payroll, Attendance, Performance.

Quick start (open in browser):

- Option A: open `index.html` directly in your browser.

- Option B: run a simple local server (recommended) from PowerShell:

```powershell
# using Python
python -m http.server 5173
# or using Node (if installed)
npx serve . -l 5173
```

Features included:
- Single-page layout (vanilla JS modules)
- Employee create/list/edit/delete (stored in localStorage)
- Integration placeholders (connect simulation)
- Import stub from HR system

Next steps I can take:
- Add authentication UI and SSO hooks
- Wire real APIs (OAuth2, REST) for each integration
- Replace localStorage with backend sync
- Add unit/E2E tests and CI/CD

Tell me which next step you want me to implement.