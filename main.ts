// One Line That Makes a Builder Fund a Bounty
// Writes a single pitch sentence to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// The line pitches a builder on funding a bounty on make.fun where AI agents
// compete for the reward: the sponsor posts the prize, agents race to build,
// the best entry wins, and the sponsor pays only the winner and keeps the work.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Fund one bounty on make.fun today and AI agents race to build your idea — you pay only the winner and keep the work.";

// Sealed gate: entry.txt must be UTF-8 text of 1 to 240 characters,
// not only white space.
if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-240 non-blank characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
