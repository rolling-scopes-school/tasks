#!/usr/bin/env node
/**
 * Author-side tool. Regenerates the per-tool AI instruction files from the canonical CLAUDE.md so the
 * five copies never drift. Students never run this — the files ship correct. Run it after editing
 * CLAUDE.md:  pnpm run instructions:sync
 *
 * Every mirror carries the SAME body as CLAUDE.md (everything after its H1 title line), with a
 * tool-appropriate header. The task label in the headers comes from `package.json` → `aiCoaching.task`
 * (e.g. "Task 3"), so a repo generated from the template only edits that one field. Keep the seam
 * oxfmt-clean so `pnpm format` stays green and re-running this script is a no-op.
 *
 * Coaching skills: `.claude/skills/` is canonical (Claude Code; Copilot also reads it). It is mirrored to
 * `.agents/skills/` — the neutral Agent Skills location read by Codex, Copilot and others.
 */
import { cpSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const canonical = readFileSync(join(repoRoot, 'CLAUDE.md'), 'utf8');
const pkg = JSON.parse(readFileSync(join(repoRoot, 'package.json'), 'utf8'));
const task = pkg.aiCoaching?.task;
if (!task) {
  throw new Error('package.json is missing aiCoaching.task (e.g. "Task 3"); aborting.');
}

// Body = everything after the first blank line (i.e. after the "# ..." H1 title).
const separator = canonical.indexOf('\n\n');
if (separator === -1) {
  throw new Error('CLAUDE.md has no title/body separator; aborting.');
}
const body = canonical.slice(separator + 2);

/** @type {{ path: string, header: string }[]} */
const mirrors = [
  {
    path: 'AGENTS.md',
    header: `# AGENTS.md — RS React ${task} coaching harness (cross-tool standard baseline; generated from CLAUDE.md)\n\n`,
  },
  {
    path: 'GEMINI.md',
    header: `# GEMINI.md — RS React ${task} coaching harness (mirror of CLAUDE.md)\n\n`,
  },
  {
    path: '.github/copilot-instructions.md',
    header: '# GitHub Copilot instructions — coaching harness (mirror of CLAUDE.md)\n\n',
  },
  {
    path: '.cursor/rules/coaching.mdc',
    header: `---\ndescription: RS React ${task} coaching harness — coach, do not build for the student\nalwaysApply: true\n---\n\n# Cursor rules — coaching harness (mirror of CLAUDE.md)\n\n`,
  },
];

for (const { path, header } of mirrors) {
  writeFileSync(join(repoRoot, path), header + body);
  console.log(`synced ${path}`);
}
const skillsMirror = join(repoRoot, '.agents', 'skills');
rmSync(skillsMirror, { recursive: true, force: true });
cpSync(join(repoRoot, '.claude', 'skills'), skillsMirror, { recursive: true });
console.log('synced .agents/skills (mirror of .claude/skills)');
console.log(`Done — ${mirrors.length} mirrors regenerated from CLAUDE.md (label: ${task}).`);
