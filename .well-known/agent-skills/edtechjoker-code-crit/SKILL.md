---
name: edtechjoker-code-crit
description: Critique a student's web development code the way IST 256 (haxtheweb/edtechjoker) runs crit — CodePen cards, Lit web components (my-card, counter-app, play-list), Project 1 image/API apps and the final multi-component website. Use when asked to review, grade-check, give feedback on, or "crit" a student repo or file from this course, or when a student wants to self-check before submitting. Applies the course's recurring feedback (classes not ids, declared and reflected properties, slots, CustomEvent data flow, DDD tokens, light-dark, FOUC, routing, Vercel) and points back to where each rule was taught. Produces feedback, not rewritten code.
---

# edtechjoker-code-crit

Crit is how this course teaches. The same mistakes come up every semester, so the same feedback does too. This skill encodes that feedback with the file › heading where it was taught, so a student can go read it.

## How to run a crit

1. Identify the stage: CodePen card (weeks 2–3), first web component (4–5), counter-app (6), play-list (7–8), Project 1 (9–11), Project 2 site (12–15). Only apply rules the student has reached; flag later ones as "next level" at most.
2. Read the requirements from the current week file and linked issue. **Missing requirements come first** — the course grades mostly on whether requirements are met.
3. Walk the checklist. For each finding give: what you saw (file:line), why it matters, where it was taught, the smallest fix described in words.
4. Call out what works. Every in-class crit names good ideas worth stealing (keyboard navigation, tracking an index, URL state).
5. Do not rewrite their code. A two-line illustration with different names is the upper limit.

Format:

```
## Requirements
- [x] / [ ] each requirement from the week file or issue
## Works well
## Fix first (blocks requirements or breaks things)
## Improve (course conventions)
## Next level (optional)
```

## Checklist

### HTML / CSS (weeks 2–3+)
- Attributes written `class="x"` — no spaces around `=`, lowercase, quoted. Every opened tag closes where expected. (`common-issues.md › HTML common mistakes`)
- Classes, not ids, for styling and selection; no `getElementById`. (`sp26/week-4.md › Remediations…` #5, `sp26/week-3.md › Remediation`)
- No inline styles; no tag-name-only selectors; no `<br>`, `<center>`, `<b>` for layout. (`sp26/week-3.md › Remediation`)
- Spacing on a base-8 / base-16 scale; media queries use the same selectors as the rest of the CSS; every declaration ends with `;`.
- Visual state tested with a class or attribute (`classList.contains`, toggle), not `style.display == "block"`. (`sp26/week-4.md` #2)
- Functions commented, especially anything novel. (`sp26/week-4.md` #3; required for counter-app in `sp26/week-6.md`)

### Lit web components (weeks 4–6+)
- Every attribute used in `index.html` is declared in `static get properties()` with the right `type`; defaults set in `constructor()`. (`sp26/week-5.md › Some general things I noticed`)
- `reflect: true` where CSS depends on it via `:host([attr])`. (`sp26/week-5.md › Let's get fancy with CSS selectors`)
- Read properties (`this.title`), not `this.getAttribute('title')`; toggle booleans with `x = !x`. (`sp26/week-8.md › 8.1 Crit`, `sp26/week-10.md`)
- Human-readable text lives in properties/slots, not hardcoded, so it can be reused or translated.
- HTML content comes through `<slot>`, not a string property. (`sp26/week-5.md › 5.2 / 5.3`)
- No logic in `index.html`; the element owns its state. Demo shows sane defaults *and* configured instances. (`sp26/week-6.md › HTML / Demo`)
- Imports use package specifiers (`import "@scope/pkg/file.js"`), never `../node_modules/...`. (`common-issues.md › JS Common mistakes`)
- Unused scaffold code removed if it breaks the build (`haxProperties`, `registerLocalization` in `sp26/week-7.md › NOTE TO DELETE`).

### Multi-element apps (weeks 7–8+)
- One element per file. (`sp26/week-8.md › 8.1 Crit`)
- Children announce changes with `CustomEvent` (`bubbles`, `composed`, `detail`); one parent owns the index/state and passes it down. (`sp26/week-7.md › Logic needed`)
- Items read from the element's own light DOM (`this.querySelectorAll`) so authors control content in HTML.
- Array/Object properties declared with `type: Array`/`Object`; needing `requestUpdate()` is a smell. (`sp26/week-8.md`)
- Demo content matches what the issue specifies.
- Keyboard support and focus/hover states on controls.

### DDD and design (week 6+)
- Colors, spacing, fonts and radii from DDD CSS variables (`--ddd-theme-*`, `--ddd-spacing-*`, `--ddd-font-*`). Run `hax audit` in the project folder; not every suggestion is right, but most are. (`sp26/week-8.md › DDD Auditing`)
- Light and dark mode both work — `light-dark()` is the course's go-to. (`sp26/week-11.md`)
- Mobile responsive.

### Data, performance, accessibility (weeks 9–11+)
- Multiple items load from one JSON endpoint; data file referenced with `new URL("x.json", import.meta.url).href` so it works on Vercel. (`sp26/week-10.md`, `sp26/week-11.md`)
- Data fetched once, not on every render ("data loads 15x" is a real crit item).
- No FOUC / layout jumping while images load — reserve space (`aspect-ratio`), lazy load. (`sp26/week-9.md`, `sp26/week-11.md`)
- State in the URL (`?page=` / `?image=`) and restored on load; likes etc. in `localStorage`. (`sp26/week-10.md`)
- Controls have accessible names (no bare `<` / `>` buttons — use words or `title`/labels). Lighthouse run and acted on.

### Shipping (all projects)
- Built with `hax webcomponent` where required; on GitHub with real commit history (not "uploaded files"); deployed and working on Vercel. Missing these caps Project 1 at 50%. (`sp26/week-10.md › Reminder from the Project 1 requirements`)
- Not obviously AI-generated (emoji-filled, unexplained code). If the student cannot explain a block, that is the finding.

### Project 2 site (weeks 12–15)
- 10+ reusable components with a consistent `{appname}-{usage}` naming scheme.
- Menu from `/api/menu` using JSON Outline Schema; schedule from `/api/schedule`.
- At least 3 routed pages; header, footer and content bands mapped from the analyzed site; DDD fonts/spacing/colors; own brand.
- Team workflow visible in commits across repos or branches.
(`sp26/week-12.md`, `draft-outline.md › Week 13`)
