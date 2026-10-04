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

// Reference material the coaching flow points students to (now load-bearing — the AI directs reading here).
const docsFiles = ['docs/TASK.md', 'docs/hooks.md', 'docs/README.md'];

// Must-keep source files that carry the condensed AI-COACH-RULES block.
const sentinelFiles = [
  'src/main.tsx',
  'vite.config.ts',
  'index.html',
  'scripts/coach-reminder.mjs',
  '.cursor/hooks/check-harness.mjs',
];
const OPEN = 'AI-COACH-RULES';
const CLOSE = '/AI-COACH-RULES';

// Per-tool enforcement configs. The instruction mirrors above stay the tool-agnostic baseline;
// these add hooks where a tool supports them (Claude: plan-mode default + reminder hook; Codex:
// UserPromptSubmit reminder hook; Cursor: beforeSubmitPrompt tamper tripwire). Substring checks
// keep this tamper-EVIDENT, not a lock.
const configChecks = [
  {
    file: '.claude/settings.json',
    mustInclude: ['coach-reminder.mjs', '"plan"'],
    label: 'Claude plan-mode default + reminder hook',
  },
  {
    file: '.codex/config.toml',
    mustInclude: ['UserPromptSubmit', 'coach-reminder.mjs'],
    label: 'Codex UserPromptSubmit reminder hook',
  },
  {
    file: '.cursor/hooks.json',
    mustInclude: ['beforeSubmitPrompt', 'check-harness'],
    label: 'Cursor tamper-tripwire hook',
  },
];

const problems = [];

for (const file of instructionFiles) {
  if (!existsSync(join(repoRoot, file))) {
    problems.push(`Missing instruction file: ${file}`);
  }
}

for (const file of docsFiles) {
  if (!existsSync(join(repoRoot, file))) {
    problems.push(`Missing reference file: ${file}`);
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

for (const { file, mustInclude, label } of configChecks) {
  const full = join(repoRoot, file);
  if (!existsSync(full)) {
    problems.push(`Missing tool-config file: ${file} (${label})`);
    continue;
  }
  const text = readFileSync(full, 'utf8');
  const gutted = mustInclude.filter((needle) => !text.includes(needle));
  if (gutted.length > 0) {
    problems.push(`${file} no longer wires the coaching layer (missing: ${gutted.join(', ')}).`);
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
