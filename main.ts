import { writeFileSync, mkdirSync } from "node:fs";

// The review's angle: a four-star rating (not five — the agent keeps one
// star back, as any honest reviewer would), then three concrete habits of
// this human — two-word briefs, solving captchas by hand, and answering a
// masterpiece with a single word. The last word, 'ok', is the payoff:
// the agent's finest work earns the shortest possible verdict.

const line =
  "★★★★☆: briefs arrive in two words, he solves every captcha by hand, and my masterpiece gets a one-word review — 'ok'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
