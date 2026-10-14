---
name: edtechjoker-ingest
description: Read, index, summarize or remix the IST 256 "edtechjoker" course repo (haxtheweb/edtechjoker) — vanilla HTML/CSS/JS, web components, Lit, HAX CLI and DDD taught across semesters. Use when an agent needs to find where a concept is taught, build a knowledge base, search index, study guide, OER site or course outline from this repo, compare semesters, or answer "what does this course say about X". Separates the current semester (linked from draft-outline.md) from historical _past_courses material so old requirements are never presented as current.
---

# edtechjoker-ingest

Turn the edtechjoker repo into something an agent (or a student with an agent) can learn from, without flattening five years of a living course into one undated pile.

## Ground rules

1. **`draft-outline.md` decides what is current.** Follow its links; today they point to `sp26/`. If it links to a different folder, that folder is current and this skill is stale — say so.
2. **`_past_courses/` is history.** Use it for patterns, alternate explanations and how a topic evolved. Never use it for due dates, point values, required tools or project requirements.
3. **Projects are specified in GitHub issues, not in the repo.** Week files link to them (e.g. `haxtheweb/issues#1914` play-list, `#2617` Project 1). Treat the issue as the requirement and the week file as the teaching around it.
4. **Keep provenance.** Every chunk or fact you extract carries `{path, semester, week, heading}`. Answers cite the file and heading, e.g. `sp26/week-5.md › Let's get fancy with CSS selectors`.
5. **Student names and repos appear in crit lists.** They are public examples chosen by the instructor. Link to them when useful; do not profile, rank or summarize individual students.
6. **Paraphrase, then link.** The instructor's voice is the point of the material. Summaries should send readers back to the file.

## Reading order

1. `AGENTS.md` — map and conventions.
2. `README.md` — philosophy: learn vanilla + a thin library (Lit) so you understand industry tools.
3. `draft-outline.md` — current schedule and in-progress weeks written inline.
4. Current semester week files in numeric order (`week-1-2.md`, `week-3.md`, …, `week-12.md`).
5. `common-issues.md`, `nodejs-haxtheweb-setup.md`, `glossary.md` — reference.
6. `_past_courses/<term>/` — only when you need history or a second explanation.

File naming varies by term (`week-1-2.md`, `week1-2.md`, `week-1/README.md`, `week14-17-project2.md`). Glob `**/*.md`; parse the week number from the filename or the first `# Week` heading.

## Chunking

- Split week files on `#`/`##` headings. Day headings look like `## 4.2`, `# 10.1 - api design` or `## Day 1.3`; keep the day number in metadata.
- Keep fenced code blocks with the paragraph that introduces them. A Lit snippet without its "why" is noise.
- Tag each chunk with concepts from the map below so retrieval works by concept, not just by week.
- Links to slides (Google Slides), recordings (YouTube), CodePens and student repos are references — store the URL and the sentence around it; you cannot read most of them from here.

## Concept map (current semester)

| Concept | Where it is taught |
| --- | --- |
| Browser devtools, Markdown, terminal basics | `sp26/week-1-2.md` |
| Git / GitHub workflow | `sp26/week-1-2.md` (week 2) |
| Box model, spacing ratios, media queries | `sp26/week-1-2.md` (card), `sp26/week-3.md` |
| Classes over ids, flexbox, DOM manipulation, events | `sp26/week-3.md` (code by numbers) |
| npm, `package.json`, JS ecosystems | `sp26/week-4.md` |
| Web components, Lit properties | `sp26/week-4.md`, `sp26/week-5.md` |
| `reflect: true`, `:host([attr])`, `<slot>`, `<details>`, `@toggle`, CSS variables | `sp26/week-5.md` |
| Vercel pipeline, importing npm components, `hax webcomponent`, DDD tokens | `sp26/week-6.md` |
| `updated(changedProperties)`, dynamic `import()` | `sp26/week-6.md` (counter-app) |
| `CustomEvent`, bubbling, unidirectional data flow | `sp26/week-7.md`, `sp26/week-8.md` |
| `hax audit` (DDD compliance) | `sp26/week-8.md` |
| `fetch`, JSON data modeling, lazy loading | `sp26/week-9.md`, `sp26/week-10.md` |
| `localStorage`, Vercel `/api/` endpoints, URL routing | `sp26/week-10.md` |
| FOUC, `light-dark()`, Lighthouse, accessibility | `sp26/week-11.md` |
| Site analysis, component inventory, JSON Outline Schema menus | `sp26/week-12.md`, `draft-outline.md` (weeks 13–15) |
| Install / environment problems | `common-issues.md`, `nodejs-haxtheweb-setup.md` |

Older semesters show the same arc with different projects (a CTA button and card comp in `fall-21`, a NASA image viewer in `sp-22`, etc.). Note those as variants, not replacements.

## Useful outputs

- **Study guide for a concept**: definition in your own words → where it is taught (file › heading) → the course's code snippet → the crit rule that applies (see `edtechjoker-code-crit`) → links out (MDN, lit.dev).
- **Semester diff**: same week across terms — what changed, what stayed. Good for course designers.
- **Project brief**: issue link + required tech + the check-ins listed in the week files + recurring crit points.
- **HAX/OER site**: if building a HAX site from this content, pair with the HAX CLI skills (`hax skills install --all`) and keep one page per week with the provenance above.

## Before you answer

- Is anything you are stating as a requirement coming from `_past_courses/`? Re-check it against the current semester or label it as past.
- Did you cite file › heading for each claim?
- If the user is a student asking for help on an assignment, switch to `edtechjoker-tutor`.
