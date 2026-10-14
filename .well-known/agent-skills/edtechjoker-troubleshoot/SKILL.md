---
name: edtechjoker-troubleshoot
description: Diagnose why a student's IST 256 (haxtheweb/edtechjoker) setup or project will not install, run, build or deploy — Node.js/npm installs, EACCES permission errors, Windows "scripts are disabled", "hax: command not found", npx vs global hax, npm start failing, blank page in the browser, imports from node_modules, Lit/CSS syntax breaking the build, and Vercel builds or /api endpoints not working. Use when anyone on this course says "it doesn't work". Follows common-issues.md first and teaches the inspect-the-error feedback loop.
---

# edtechjoker-troubleshoot

`common-issues.md` solves most problems in this course. Use it first, in order, and teach the loop while you do: read the error, check the folder, check the console.

## Triage questions (ask, don't guess)

1. What OS? (Windows / macOS / Linux / Chromebook)
2. What exact command, from which folder (`pwd`)? Is there a `package.json` in that folder (`ls -las`)?
3. What is the exact error text — terminal, VS Code red marks, browser Console?

## Install and environment

| Symptom | Check | Reference |
| --- | --- | --- |
| `node` / `npm` not found | Node LTS installed; terminal reopened; restart on Windows | `nodejs-haxtheweb-setup.md › Part 1` |
| `EACCES` on `npm install -g` (macOS/Linux) | Set an npm prefix in the home folder, or fix ownership as documented; `sudo` is a last resort | `common-issues.md › MacOS Installation Issues` |
| "running scripts is disabled" (Windows PowerShell) | Execution policy for the current user | `common-issues.md › Windows Installation Issues` |
| `hax: command not found` | `npm install --global @haxtheweb/create`; reopen terminal; check global bin is on PATH | `common-issues.md › HAX Troubleshooting` |
| Using `npx hax` | Use the global `hax` command; `npx hax` is a different npm package | HAX CLI `AGENTS.md` |
| Strange characters in `hax start` | Terminal/encoding; try another terminal or VS Code's terminal | `common-issues.md › HAX Troubleshooting` |

## Running a project

- "X is not a command" inside a project → `npm install` in the folder that has `package.json`, then `npm start` (or `npm run` to list scripts). (`common-issues.md › I did X and it didn't work`)
- Blank page → browser Inspect › Console; then terminal output; then VS Code problems.
- Import errors → import by package name (`import "@haxtheweb/meme-maker/meme-maker.js"`), not a relative path into `node_modules`; `npm install --save` the package first and restart the dev server.
- CSS silently ignored → missing `;`, a `//` comment inside CSS (breaks parsing — use `/* */`), or styles not reaching inside shadow DOM (expected; style inside the component).
- Scaffold code breaking the build → remove unused `haxProperties` / `registerLocalization` blocks as described in `sp26/week-7.md › NOTE TO DELETE`.
- A dependency the scaffolding forgot → `_past_courses/fa24/week-6.md` shows the pattern ("I have an error in the tooling…": install the missing package, restart); check the current week file for any newer note.

## Deploying (Vercel)

- Repo pushed to GitHub and connected in Vercel; build log is the first place to look.
- Assets missing in production but fine locally → reference files with `new URL("file.json", import.meta.url).href`; copy assets in the rollup config (`draft-outline.md › 13.2` links an example config).
- `esbuild` target / minify settings for Vercel as shown in `draft-outline.md › 13.2`.
- `/api/*.js` endpoints → test locally with the Vercel CLI (`npm i -g vercel`, then `vercel dev`); example in `sp26/week-10.md › Treating things as a microservice backend`.
- Account locked or slow support → contact Vercel early; meanwhile pair with a classmate (`sp26/week-1-2.md`).

## When to stop

If the fix needs `sudo` on system folders, changing ownership of `/usr`, or anything not in the docs, stop and send the student to TA office hours or the teaching team. `common-issues.md` explicitly warns against improvising those commands.
