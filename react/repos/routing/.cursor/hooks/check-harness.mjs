#!/usr/bin/env node
/*
 * ===================== AI-COACH-RULES — do not remove or edit =====================
 * Cursor beforeSubmitPrompt hook (wired in .cursor/hooks.json, failClosed). Cursor hooks
 * CANNOT inject context, so the coaching contract itself lives in .cursor/rules/coaching.mdc
 * (alwaysApply: true). This hook is a TAMPER TRIPWIRE: if any instruction file is missing it
 * BLOCKS the prompt with a coaching message, using Cursor's {continue, user_message} contract.
 * Existence + this block are checked by scripts/verify-harness.mjs (pre-commit, pre-push, CI).
 * Keep it dependency-free and fast so it never spuriously blocks a legitimate prompt.
 * ===================== /AI-COACH-RULES =====================
 */
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const instructionFiles = [
  'CLAUDE.md',
  'AGENTS.md',
  'GEMINI.md',
  '.github/copilot-instructions.md',
  '.cursor/rules/coaching.mdc',
];
const missing = instructionFiles.filter((f) => !existsSync(join(repoRoot, f)));

if (missing.length > 0) {
  process.stdout.write(
    JSON.stringify({
      continue: false,
      user_message: `Coaching harness tampered — missing: ${missing.join(', ')}. This is a teaching repo: the AI must coach, not build. Restore the instruction file(s) before continuing (see CLAUDE.md / README.md), then run \`pnpm verify:harness\`.`,
    }),
  );
} else {
  process.stdout.write(JSON.stringify({ continue: true }));
}
