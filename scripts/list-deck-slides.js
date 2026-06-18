const { deckSlidesRestHtml } = require("../utils/deckContent.js");
const titles = [...deckSlidesRestHtml.matchAll(/data-title="([^"]+)"/g)];
titles.forEach((m, i) => console.log(`${i + 10}: ${m[1]}`));
