#!/usr/bin/env node
/**
 * Author-side tool. Regenerates the per-tool AI instruction files from the canonical CLAUDE.md so the
 * five copies never drift. Students never run this — the files ship correct. Run it after editing
 * CLAUDE.md:  pnpm run instructions:sync
 *
 * Every mirror carries the SAME body as CLAUDE.md (everything after its H1 title line), with a
 * tool-appropriate header. Keep the seam oxfmt-clean so `pnpm format` stays green and re-running this
 * script is a no-op.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const canonical = readFileSync(join(repoRoot, 'CLAUDE.md'), 'utf8');

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
    header: '# AGENTS.md — RS React Task 1 coaching harness (mirror of CLAUDE.md)\n\n',
  },
  {
    path: 'GEMINI.md',
    header: '# GEMINI.md — RS React Task 1 coaching harness (mirror of CLAUDE.md)\n\n',
  },
  {
    path: '.github/copilot-instructions.md',
    header: '# GitHub Copilot instructions — coaching harness (mirror of CLAUDE.md)\n\n',
  },
  {
    path: '.cursor/rules/coaching.mdc',
    header:
      '---\ndescription: RS React Task 1 coaching harness — coach, do not build for the student\nalwaysApply: true\n---\n\n# Cursor rules — coaching harness (mirror of CLAUDE.md)\n\n',
  },
];

for (const { path, header } of mirrors) {
  writeFileSync(join(repoRoot, path), header + body);
  console.log(`synced ${path}`);
}
console.log(`Done — ${mirrors.length} mirrors regenerated from CLAUDE.md.`);
