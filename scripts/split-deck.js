const fs = require("fs");
const path = require("path");

const htmlPath = path.join(__dirname, "..", "PROJECT_LOONSHOT (2).html");
const contentPath = path.join(__dirname, "..", "utils", "deckContent.js");
const html = fs.readFileSync(htmlPath, "utf8");

const mainMatch = html.match(/<main id="deck">([\s\S]*?)<\/main>/);
if (!mainMatch) throw new Error("deck main not found");

const deckSlidesHtml = mainMatch[1].trim();
const splitAt = deckSlidesHtml.indexOf("<!-- ===== SECTION 3 · LOOP =====");
if (splitAt < 0) throw new Error("split marker not found");

const deckSlidesRestHtml = deckSlidesHtml.slice(splitAt);
const deckChromeHtml = "<div id=\"brand\"><span class=\"mark\"></span>PROJECT LOONSHOT</div>\n<div id=\"counter\"><b>01</b> / <span id=\"total\">00</span></div>\n<nav id=\"nav\"></nav>\n<div id=\"progress\"><span class=\"track\"></span><i></i></div>\n<div id=\"hint\"><span class=\"key\">↑ ↓</span> 슬라이드 이동</div>\n\n{{DECK}}";

const output = `export const deckChromeHtml = ${JSON.stringify(deckChromeHtml)};\nexport const deckSlidesRestHtml = ${JSON.stringify(deckSlidesRestHtml)};\n`;
fs.writeFileSync(contentPath, output);
console.log("deckSlidesRestHtml ready:", deckSlidesRestHtml.length, "chars");
