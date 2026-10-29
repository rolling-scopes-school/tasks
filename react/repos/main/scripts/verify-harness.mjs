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
import { readFileSync, existsSync, readdirSync } from 'node:fs';
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
const docsFiles = ['docs/TASK.md', 'docs/README.md'];

// Must-keep source files that carry the condensed AI-COACH-RULES block.
const sentinelFiles = [
  'src/main.tsx',
  'vite.config.ts',
  'index.html',
  'playwright.config.ts',
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
  // Opt-in browser MCP (Playwright): pinned, no codegen, unsafe code tool removed/denied.
  {
    file: '.mcp.json',
    mustInclude: ['@playwright/mcp@', '--codegen'],
    label: 'Claude/VS Code Playwright MCP (no codegen)',
  },
  {
    file: '.cursor/mcp.json',
    mustInclude: ['@playwright/mcp@', '--codegen'],
    label: 'Cursor Playwright MCP (no codegen)',
  },
  {
    file: '.codex/config.toml',
    mustInclude: ['mcp_servers.playwright', '--codegen', 'browser_run_code_unsafe'],
    label: 'Codex Playwright MCP (no codegen, unsafe tool disabled)',
  },
  {
    file: '.claude/settings.json',
    mustInclude: ['mcp__playwright__browser_run_code_unsafe', 'skillOverrides'],
    label: 'Claude deny rule for the unsafe Playwright MCP tool + per-task skill switches',
  },
  // Precedence clause (contract) + Claude Code system-prompt-level coaching style.
  {
    file: 'CLAUDE.md',
    mustInclude: ['### Precedence'],
    label: 'precedence clause in the canonical contract',
  },
  {
    file: 'AGENTS.md',
    mustInclude: ['### Precedence'],
    label: 'precedence clause in the cross-tool baseline',
  },
  {
    file: '.claude/output-styles/coach.md',
    mustInclude: ['name: Coach', 'keep-coding-instructions: true', '## Precedence'],
    label: 'Claude Code Coach output style (system-prompt level)',
  },
  {
    file: '.claude/settings.json',
    mustInclude: ['"outputStyle": "Coach"'],
    label: 'Coach output style selected for the project',
  },
];

// Coaching skills: every skill (canonical + mirror) keeps the coaching preamble and stays user-invoked.
const SKILL_DIRS = ['.claude/skills', '.agents/skills'];
const SKILL_MARKERS = ['COACH-SKILL', 'disable-model-invocation: true'];

// Playwright's test agents (`npx playwright init-agents` → planner / generator / healer) write the E2E
// suite for you — that is the student's graded work, so their definitions must not exist in this repo.
const TEST_AGENT_PATTERN = /playwright-test-(planner|generator|healer)|run-test-mcp-server/u;
const SKIP_DIRS = new Set([
  'node_modules',
  '.git',
  'dist',
  'coverage',
  'test-results',
  'playwright-report',
]);

function findTestAgentArtifacts(dir, rel = '') {
  const hits = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const relPath = rel ? `${rel}/${entry.name}` : entry.name;
    if (TEST_AGENT_PATTERN.test(entry.name)) hits.push(relPath);
    if (entry.isDirectory()) {
      hits.push(...findTestAgentArtifacts(join(dir, entry.name), relPath));
    } else if (
      /\.(json|toml|md|mdc|ya?ml)$/u.test(entry.name) &&
      relPath !== 'scripts/verify-harness.mjs'
    ) {
      if (
        TEST_AGENT_PATTERN.test(readFileSync(join(dir, entry.name), 'utf8')) &&
        !relPath.endsWith('.md')
      ) {
        hits.push(relPath);
      }
    }
  }
  return hits;
}

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

const canonicalSkills = existsSync(join(repoRoot, SKILL_DIRS[0]))
  ? readdirSync(join(repoRoot, SKILL_DIRS[0]), { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
  : [];
if (canonicalSkills.length === 0) {
  problems.push(`No coaching skills found in ${SKILL_DIRS[0]}/`);
}
for (const dir of SKILL_DIRS) {
  for (const name of canonicalSkills) {
    const file = `${dir}/${name}/SKILL.md`;
    const full = join(repoRoot, file);
    if (!existsSync(full)) {
      problems.push(
        `Missing skill file: ${file}${dir === SKILL_DIRS[1] ? ' (run pnpm instructions:sync)' : ''}`,
      );
      continue;
    }
    const text = readFileSync(full, 'utf8');
    const lost = SKILL_MARKERS.filter((marker) => !text.includes(marker));
    if (lost.length > 0) {
      problems.push(`Skill lost its coaching guard (${lost.join(', ')}): ${file}`);
    }
  }
}

for (const hit of findTestAgentArtifacts(repoRoot)) {
  problems.push(
    `Playwright test-agent artifact found (E2E tests must be written by the student): ${hit}`,
  );
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
