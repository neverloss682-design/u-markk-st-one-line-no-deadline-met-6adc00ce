// One Line, No Deadline Met — entry generator (Node stdlib only).
// Writes exactly one single-line joke (an excuse for a missed deadline)
// to /output/entry.txt. Gate: 1-200 chars, UTF-8, single line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I didn't miss the deadline \u2014 the deadline missed me: I waited by the inbox for three hours, it never showed, so I filed a complaint with HR against Tuesday.";

function fail(message: string): never {
  throw new Error(message);
}

function main(): void {
  // Gate: single line, 1-200 characters (RULES.txt gate).
  if (ENTRY.length < 1 || ENTRY.length > 200) {
    fail(`entry length ${ENTRY.length} outside 1-200`);
  }
  if (/[\r\n]/.test(ENTRY)) {
    fail("entry must be a single line");
  }
  if (ENTRY.trim().length === 0) {
    fail("entry must not be only whitespace");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
