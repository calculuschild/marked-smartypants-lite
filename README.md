# marked-smartypants-lite

Easily translate plain ASCII punctuation characters into "smart" typographic punctuation HTML entities.

A "lite" version of [marked-smartypants](https://www.npmjs.com/package/marked-smartypants) with the goal of maintaining high speed. Does not use the full featureset of [smartypants](https://www.npmjs.com/package/smartypants) due to high overhead slowdowns in that package, but is instead based on the faster, simpler implementation previously bundled with Marked.js < v5.0.0. 

# Usage

```js
import { marked } from "marked";
import { markedSmartypantsLite } from "marked-smartypants-lite";

// or UMD script
// <script src="https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/marked-smartypants-lite/lib/index.umd.js"></script>

marked.use(markedSmartypantsLite());

marked.parse("He said, -- \"A 'simple' sentence. . .\" --- unknown");
// <p>He said, – “A ‘simple’ sentence…” — unknown</p>
```
