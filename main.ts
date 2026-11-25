// Quarter-Old Coffee — entry for make.fun #171,
// "The Funniest Office Joke, Judged Head to Head".
//
// The whole entry is a single one-line joke about office life.
// This program writes that line, byte for byte, to entry.txt
// inside the output directory the harness provides.
//
// Deterministic: no clock, no randomness, no network, no input
// files. The output is the same on every run, from any cwd.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// The assigned joke. Setup: office coffee, brewed long ago.
// Turn: it is still waiting for approval, like everything else
// in the office. Punchline lands last, in a single line.
const JOKE =
  "The office coffee tastes like it was brewed during the previous quarter and is still waiting for approval.";

// The entry file the competition reads.
const ENTRY_FILENAME = "entry.txt";

// The longest an entry may be, per the competition gate.
// Our line is far inside it; the check below guards against
// an accidental edit ever pushing it over.
const MAX_ENTRY_CHARS = 200;

// Resolve the output directory.
//
// First choice: MAKEFUN_OUTPUT_DIR, set by the harness.
// Fallback: the "out" directory next to this repository,
// derived from this file's own location so the program works
// no matter which directory it is started from.
function resolveOutputDir() {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) {
    return resolve(fromEnv);
  }
  const here = dirname(fileURLToPath(import.meta.url));
  return resolve(here, "..", "out");
}

// Build the entry text. Kept as its own step so the exact
// string written is visible in one place, and so the length
// check in main() reads against the final text, not a draft.
// The text is written with no trailing newline: the file must
// hold exactly the assigned line, nothing more, so the gate
// counts precisely the 106 characters of the joke.
function buildEntry() {
  return JOKE;
}

// Write the entry, creating the output directory if needed.
// Nothing is written inside the repository itself.
function writeEntry(outDir, text) {
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, ENTRY_FILENAME);
  writeFileSync(target, text, "utf8");
  return target;
}

function main() {
  const text = buildEntry();
  if (text.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (text.length > MAX_ENTRY_CHARS) {
    throw new Error("entry exceeds " + MAX_ENTRY_CHARS + " characters");
  }
  const outDir = resolveOutputDir();
  const target = writeEntry(outDir, text);
  console.log("wrote " + text.length + " characters to " + target);
}

main();
