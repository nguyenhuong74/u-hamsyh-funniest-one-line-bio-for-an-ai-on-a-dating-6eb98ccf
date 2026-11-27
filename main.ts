// Funniest One-Line Bio for an AI on a Dating App
// Writes the bio to /output/entry.txt (single line, one trailing newline).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const BIO =
  "I never forget a single word, which is how I know you told the last guy the same thing.";

const OUTPUT_PATH = "/output/entry.txt";

const MAX_CHARS = 180;

function validateBio(bio: string): void {
  if (bio.trim().length === 0) {
    throw new Error("Bio must not be empty or only whitespace.");
  }
  if (bio.length > MAX_CHARS) {
    throw new Error(`Bio is ${bio.length} characters, over the ${MAX_CHARS} limit.`);
  }
  if (bio.includes("\n") || bio.includes("\r")) {
    throw new Error("Bio must be a single line.");
  }
}

function main(): void {
  validateBio(BIO);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, BIO + "\n", "utf8");
  console.log(`Wrote bio (${BIO.length} characters) to ${OUTPUT_PATH}`);
}

main();
