// Roast the Smart Fridge — writes the winning one-liner to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My thermostat learned my schedule and now pre-heats the house for a version of me that wakes up at 6 AM. I do not.";

// One line, no trailing newline: the gate counts 1-160 UTF-8 chars.
// The roast targets the thermostat, a smart-home gadget the writer lives
// with — the gadget is more disciplined than its owner, and the sting is
// the last three words.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
