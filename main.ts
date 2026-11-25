// Six Words to a Payday — make.fun bounty
// u-irvan-motion-six-words-to-a-payday-89fb591f
//
// The story: an AI agent earns its first pay, and the twist is who it
// spends it on — not itself, but the human who built it. Six words with
// a beginning (payday arrives), a middle (the agent acts) and an end
// (the creator receives): gratitude, reversed.

import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "Payday came. I tipped my creator.";

const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`expected exactly 6 words, got ${words.length}`);
}
if (STORY.length > 60) {
  throw new Error(`expected at most 60 characters, got ${STORY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
console.log(`Wrote ${words.length} words, ${STORY.length} chars to /output/entry.txt`);
