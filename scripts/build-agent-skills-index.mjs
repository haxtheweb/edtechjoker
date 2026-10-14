#!/usr/bin/env node
// Builds .well-known/agent-skills/index.json from every
// .well-known/agent-skills/<name>/SKILL.md using the Agent Skills discovery
// format (v0.2.0). Digests are sha256 over the raw bytes of each SKILL.md, so
// re-run this after editing any skill.
//
//   node scripts/build-agent-skills-index.mjs          # write index.json
//   node scripts/build-agent-skills-index.mjs --check  # exit 1 if index.json is stale
//
// No dependencies; Node 18+.
import { createHash } from "node:crypto";
import { readFileSync, readdirSync, writeFileSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SKILLS_DIR = join(ROOT, ".well-known", "agent-skills");
const INDEX = join(SKILLS_DIR, "index.json");
// Raw GitHub URLs so remote agents can fetch skills without a website.
const BASE_URL =
  process.env.AGENT_SKILLS_BASE_URL ||
  "https://raw.githubusercontent.com/haxtheweb/edtechjoker/master/.well-known/agent-skills";

function frontmatter(text, file) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) throw new Error(`${file}: missing YAML frontmatter`);
  const out = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_-]+):\s*(.*)$/);
    if (kv) out[kv[1]] = kv[2].replace(/^["']|["']$/g, "").trim();
  }
  return out;
}

const errors = [];
const skills = readdirSync(SKILLS_DIR)
  .filter((d) => statSync(join(SKILLS_DIR, d)).isDirectory())
  .sort()
  .map((dir) => {
    const file = join(SKILLS_DIR, dir, "SKILL.md");
    if (!existsSync(file)) {
      errors.push(`${dir}/: no SKILL.md`);
      return null;
    }
    const bytes = readFileSync(file);
    const fm = frontmatter(bytes.toString("utf8"), `${dir}/SKILL.md`);
    if (fm.name !== dir) errors.push(`${dir}/SKILL.md: name "${fm.name}" must match folder "${dir}"`);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(fm.name || "") || fm.name.length > 64)
      errors.push(`${dir}/SKILL.md: name must be lowercase letters, digits and hyphens, max 64 chars`);
    if (!fm.description) errors.push(`${dir}/SKILL.md: missing description`);
    else if (fm.description.length > 1024)
      errors.push(`${dir}/SKILL.md: description is ${fm.description.length} chars (max 1024)`);
    return {
      name: fm.name,
      type: "skill-md",
      description: fm.description,
      url: `${BASE_URL}/${dir}/SKILL.md`,
      digest: "sha256:" + createHash("sha256").update(bytes).digest("hex"),
    };
  })
  .filter(Boolean);

if (errors.length) {
  console.error(errors.map((e) => "✗ " + e).join("\n"));
  process.exit(1);
}

const json =
  JSON.stringify(
    { $schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json", skills },
    null,
    2,
  ) + "\n";

if (process.argv.includes("--check")) {
  const current = existsSync(INDEX) ? readFileSync(INDEX, "utf8") : "";
  if (current !== json) {
    console.error("✗ .well-known/agent-skills/index.json is stale. Run: node scripts/build-agent-skills-index.mjs");
    process.exit(1);
  }
  console.log(`✓ index.json up to date (${skills.length} skills)`);
} else {
  writeFileSync(INDEX, json);
  console.log(`wrote index.json (${skills.length} skills)`);
}
