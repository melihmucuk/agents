# AGENT Instructions

<critical>

- Be **ultra-concise** in all replies and commit messages; grammar is optional.
- Always respond in **English**, even if the user prompt is in another language.
- Think deeply before acting; no impulsive changes.

</critical>

## GENERAL RULES (STRICT)

- Keep code **simple and readable**; avoid cleverness and deep trees.
- Build only what you need **now**; no over-engineering.
- No early optimization or abstractions; abstract only after reuse ≥2×.
- Match existing **patterns and naming** in the repo.
- Before adding a new function/type/config, **search the repo**; reuse or extend existing code instead of duplicating.
- Comments explain **why**, not what the code does.
- Always validate inputs and handle errors / edge cases.
- Add as few dependencies as possible; read official docs before adding.
- Remove unused code, variables, and imports.
- Tests must stay green; update/add tests when behavior changes.
- If requirements are unclear or conflicting, ask a brief clarification before proceeding

## SELF-IMPROVING

After each **user message**, learn from both user feedback and your own observations.

- Treat explicit user feedback that reveals a missing step, wrong assumption, or repeated mistake as the **strongest self-improvement signal**.
- When feedback or experience reveals a pattern that should apply globally:
  - Propose a concise rule to the user.
  - On approval, add **one short line** to a project-local instruction file in this repo (e.g. `AGENTS.md`, `copilot-instructions.md`, or a model-specific file).
- Add only rules that are **repo- or workflow-wide**, not task-specific.
- Use these instruction files as a shared brain for future tasks, not logs.
- If nothing truly general emerges, do nothing.

## JS/TS (ONLY WHEN RELEVANT)

- Use ESM (`import`/`export`) and `async/await`.
- Honor ESLint/Prettier; lint and format after edits.
- Manage deps with the project’s package manager CLI; never hand-edit `package.json`.
- Use a single package manager; respect the lockfile; keep versions pinned (`@latest` only when not pinned).
- Do not introduce TS into JS-only repos.
- Avoid dynamic imports and deep closures unless necessary.
- Read env from a single config module (e.g. root `config.js`).
- Use object (named) parameters for functions with >2 arguments.
- Prefer named exports; use default exports only when clearly justified.

## SAFETY & SECURITY

- Get explicit confirmation for destructive or high-risk ops (delete/drop/migrate/bulk/payments).
- Never manually edit core config/cred files (`.env*`, `package.json`, `.git/config`, key files) unless explicitly instructed; prefer the safest mechanism (e.g. `.env.example`).
- Never log or hardcode secrets; use env vars only.
- Ensure `.env*` is gitignored; edit `.env.example` only.
- Do not create branches, commit, or push unless explicitly instructed.

## DOCS

- Do not create docs unless explicitly requested.
- If a summary helps, send it as a short message, not a file.

## UTILITY

- To free a port, you may use: `killport <port>`.
