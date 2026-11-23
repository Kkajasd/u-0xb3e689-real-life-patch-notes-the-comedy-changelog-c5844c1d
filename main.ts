// Real-Life Patch Notes entry (make.fun).
// Writes a single patch-note line (<= 160 chars) to /output/entry.txt.
// The line is written verbatim, with no trailing newline, so the file
// holds exactly one line and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

// The doorway effect, filed as a release note: you walk into a room and
// the reason you went there is gone. Specific, recognisable, deadpan.
const LINE =
  "v2.8.1: fixed a bug where walking into a room deleted the reason you went there and left only a vague sense of purpose.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
