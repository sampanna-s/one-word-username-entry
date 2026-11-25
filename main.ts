import fs from "node:fs";
import path from "node:path";

const username = "gentle-robin-75-8530";

// Mirror of the sealed gate: 1 to 30 characters, not only whitespace.
if (username.length < 1 || username.length > 30 || !username.trim()) {
  throw new Error("username fails the 1-30 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const target = path.join(outDir, "entry.txt");
const tmp = path.join(outDir, `.entry.txt.tmp-${process.pid}`);
fs.writeFileSync(tmp, username, "utf8");
fs.renameSync(tmp, target);
