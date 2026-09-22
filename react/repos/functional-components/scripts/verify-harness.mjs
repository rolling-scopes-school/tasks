#!/usr/bin/env node
/**
 * Harness integrity check. Fails (exit 1) if the AI coaching harness has been stripped:
 *   - any of the per-tool instruction files is missing, or
 *   - an `AI-COACH-RULES` sentinel block has been removed from a must-keep source file.
 *
 * Wired into Husky (pre-commit / pre-push) and CI, so a commit/push that disarms the harness fails.
 * This is tamper-EVIDENCE, not tamper-proofing: a determined student can still edit the hooks or delete
 * the workflow — that stays visible in git history and is caught by cross-check review.
 */
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..');

const instructionFiles = [
  'CLAUDE.md',
  'AGENTS.md',
  'GEMINI.md',
  '.github/copilot-instructions.md',
  '.cursor/rules/coaching.mdc',
];

// Must-keep source files that carry the condensed AI-COACH-RULES block.
const sentinelFiles = ['src/main.tsx', 'vite.config.ts', 'index.html'];
const OPEN = 'AI-COACH-RULES';
const CLOSE = '/AI-COACH-RULES';

const problems = [];

for (const file of instructionFiles) {
  if (!existsSync(join(repoRoot, file))) {
    problems.push(`Missing instruction file: ${file}`);
  }
}

for (const file of sentinelFiles) {
  const full = join(repoRoot, file);
  if (!existsSync(full)) {
    problems.push(`Missing file that must carry the ${OPEN} block: ${file}`);
    continue;
  }
  const text = readFileSync(full, 'utf8');
  if (!text.includes(OPEN) || !text.includes(CLOSE)) {
    problems.push(`${OPEN} block missing or altered in: ${file}`);
  }
}

if (problems.length > 0) {
  console.error('\n✖ AI coaching harness integrity check FAILED:\n');
  for (const p of problems) {
    console.error(`  - ${p}`);
  }
  console.error(
    '\nThe coaching harness must stay intact. Restore the missing file(s)/block(s) — see CLAUDE.md.\n',
  );
  process.exit(1);
}

console.log('✓ AI coaching harness intact (instruction files + AI-COACH-RULES blocks present).');
