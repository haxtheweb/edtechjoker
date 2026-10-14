# AGENTS.md

> **Agents start here**
> - This repo is **IST 256 at Penn State ("edtechjoker")**: an advanced web development course taught through vanilla HTML/CSS/JS, web components, [Lit](https://lit.dev), the [HAX CLI](https://github.com/haxtheweb/create) and the [DDD design system](https://haxtheweb.org/documentation/ddd). It is a course, not a code library — there is nothing to build or test here.
> - Read [`llms.txt`](llms.txt) for a link map, then [`.well-known/agent-skills/index.json`](.well-known/agent-skills/index.json) for skills you can load.
> - The **current semester** is whatever [`draft-outline.md`](draft-outline.md) links to (today: `sp26/`). Everything in `_past_courses/` is history — useful for patterns, never authoritative for dates, due dates or requirements.
> - If you are helping a **student**, you are a tutor, not a ghostwriter. The course states AI should augment solutions, not write all the code; projects that are obviously AI-written are penalized. Load `edtechjoker-tutor` before helping with an assignment.

## What this repo is for

Bryan Ollendyke (btopro) runs IST 256 out of this repository. Students open `draft-outline.md` every class to see what is happening that week. Each semester the weekly files get rewritten, then archived to `_past_courses/`. The result is a five-year, openly licensed record of how one instructor teaches the path from "what is a tag" to "ship a 10-component website with an API, routing and a design system".

That record is the thing worth learning from. Agents (and students working with agents) should be able to:

1. **Learn the concepts** in the order the course teaches them.
2. **Get help the way the course gives help** — common issues first, then guided "code by numbers", then crit.
3. **Review student code against the course's own recurring feedback** instead of generic lint rules.
4. **Ingest the archive** (for search, tutoring, OER building or course design) without mistaking old requirements for current ones.

## Repository map

| Path | What it is | Authority |
| --- | --- | --- |
| `README.md` | Course philosophy ("learn the micro so you can build the macro") and starter resources | Stable |
| `draft-outline.md` | **The live syllabus.** Links to each week of the current semester plus the in-progress weeks inline | Current — always wins |
| `sp26/week-*.md` | Current semester, one file per week (some weeks combined, e.g. `week-1-2.md`) | Current |
| `common-issues.md` | Troubleshooting for install, terminal, HTML/CSS/JS mistakes and the HAX CLI. Covers ~90% of student problems | Stable, read first when something breaks |
| `nodejs-haxtheweb-setup.md` | Node.js + `@haxtheweb/create` install by OS | Stable |
| `glossary.md` | Student-written glossary of core terms (Web Components, Lit, NPM, Node.js, Git, HAX, CLI) | Student work; may contain duplicates or rough edges |
| `_past_courses/<term>/` | Archived semesters: `fall-21`, `sp-22`, `sp-23`, `fa-23`, `sp24`, `fa24`, `sp25`, `fa25` | Historical only |
| `.well-known/agent-skills/` | Agent skills for working with this repo, plus the discovery `index.json` | Generated index — see below |
| `llms.txt` | Plain link map for LLMs ([llmstxt.org](https://llmstxt.org) format) | Hand-maintained |

Semester and file naming is not consistent across terms (`sp-23` vs `sp24`, `week-1-2.md` vs `week1-2.md` vs `week-1/README.md`). Glob for `**/*.md` rather than assuming a pattern.

## How the course is sequenced (current semester)

Use this to place any question in context. Week numbers refer to `sp26/`; earlier semesters follow the same arc with small shifts.

| Week | Theme | Core concepts | Artifact students build |
| --- | --- | --- | --- |
| 1–2 | Getting started; Git and GitHub | Browser as debugger, Markdown, terminal basics, Git workflow, CSS box model, media queries | Gist answers; meme fork and a responsive "card" in CodePen |
| 3 | CodePen, more | Classes over ids, `display: flex`, DOM manipulation, events, "code by numbers" | Card with buttons that clone/modify/remove cards |
| 4 | Real development | npm, `package.json`, VS Code + lit-plugin, what web components are, Lit properties | `my-card` web component (from the `polaris-chip` boilerplate) |
| 5 | Web components for real | `static get properties()`, `reflect: true`, `:host([attr])`, `<slot>`, `<details>`/`<summary>`, `@toggle`, CSS variables | Card with `fancy` state and slotted description |
| 6 | Stretch | Vercel build pipeline, installing npm web components, `hax webcomponent`, DDD tokens, `updated()` lifecycle, dynamic `import()` | `counter-app` with min/max, disabled states, confetti |
| 7–8 | Problem-based learning | Multi-element apps, `CustomEvent` with `bubbles`/`composed`, unidirectional data flow, `hax audit` for DDD, keyboard nav | Play-list / slider ([haxtheweb/issues#1914](https://github.com/haxtheweb/issues/issues/1914)) |
| 9–11 | Project 1 | `fetch`, JSON modeling, lazy loading / `IntersectionObserver`, `localStorage`, Vercel `/api/` endpoints, URL-state routing, FOUC, `light-dark()`, Lighthouse | Image/"insta" app ([haxtheweb/issues#2617](https://github.com/haxtheweb/issues/issues/2617)) |
| 12–15 | Project 2 | Competitive site analysis, component inventory, naming conventions, `/api/menu` with [JSON Outline Schema](https://github.com/haxtheweb/json-outline-schema), `/api/schedule`, routing, team Git workflow | 10+ component website for a fictional sports association |

## Recurring teaching patterns

These show up every semester and are the backbone of the course. An agent helping a student should use the same patterns rather than inventing new ones.

- **Code by numbers** — the instructor lists small requirements, live-codes them while students follow, pauses with questions, then students apply the *same* steps to their *own* project.
- **Crit** — next class reviews real student repos: what works, what to fix. The fixes repeat semester to semester (see `edtechjoker-code-crit`).
- **Remediation** — explicit checklists of things to clean up before moving on.
- **Common issues first** — before "it doesn't work", check `common-issues.md`.
- **Research the small thing** — "search for how to make a link open in a new window" is the intended learning loop: search, MDN, try, inspect.
- **Ship it** — every project ends on GitHub and deployed on Vercel. "It works on my machine" is not done.

## Skills

Skills live in `.well-known/agent-skills/<name>/SKILL.md` and are listed in `.well-known/agent-skills/index.json` ([Agent Skills discovery](https://specification.website/spec/agent-readiness/agent-skills-discovery/) v0.2.0 format, with raw GitHub URLs so remote agents can fetch them).

| Skill | Use it when |
| --- | --- |
| `edtechjoker-ingest` | Reading, indexing, summarizing or remixing this repo; finding where a concept is taught; separating current from historical material |
| `edtechjoker-tutor` | A student wants help with a concept, homework or project from this course |
| `edtechjoker-code-crit` | Reviewing a student's card / counter / play-list / project repo the way the course crits code |
| `edtechjoker-troubleshoot` | Something will not install, run, build or deploy (Node, npm, `hax`, Vercel, blank page) |

To use them locally, copy the folders into wherever your agent loads skills from, for example:

```bash
# Claude Code (per project)
mkdir -p .claude/skills && cp -R .well-known/agent-skills/edtechjoker-* .claude/skills/
# Agents that read ~/.agents/skills (same place `hax skills install` uses)
mkdir -p ~/.agents/skills && cp -R .well-known/agent-skills/edtechjoker-* ~/.agents/skills/
```

The HAX CLI ships its own skills (`hax skills install --all`) for building HAX sites and components. These edtechjoker skills cover the course; use both together when a student is building with `hax webcomponent`.

## Maintaining this repo (for agents editing it)

- **Do not rewrite course content** in `sp26/` or `_past_courses/` unless the instructor asks. They are the instructor's voice and a historical record.
- **Editing a skill?** Regenerate the discovery index so the digests match:
  ```bash
  node scripts/build-agent-skills-index.mjs        # rewrite index.json
  node scripts/build-agent-skills-index.mjs --check # CI uses this; fails if stale
  ```
- **New semester?** When the instructor archives a term (moves `spXX/` into `_past_courses/`), update the "current semester" pointer in this file, `llms.txt` and the `edtechjoker-ingest` skill.
- **Pull requests** are reviewed and discussed by the maintainer before merging. Do not merge your own PRs. Describe which files each PR touches.
- Skill descriptions must stay under 1024 characters and skill names must match their folder name (lowercase and hyphens).

## Related HAX resources

- HAX CLI and its `AGENTS.md`: https://github.com/haxtheweb/create
- DDD design system docs: https://haxtheweb.org/documentation/ddd
- Web components monorepo: https://github.com/haxtheweb/webcomponents
- Unified issue queue (projects are written as issues here): https://github.com/haxtheweb/issues
- Course site (requirements, activities, resources): https://oer.hax.psu.edu/bto108/sites/ist256/
- Browser playground for the CLI: https://playground.hax.cloud/
