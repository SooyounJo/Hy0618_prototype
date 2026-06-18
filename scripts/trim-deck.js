import fs from "fs";

const html = fs.readFileSync("utils/deckContent.js", "utf8");
const chromeMatch = html.match(/export const deckChromeHtml = ([^;]+);/);
const restMatch = html.match(/export const deckSlidesRestHtml = "([\s\S]*)";/);
if (!chromeMatch || !restMatch) {
  console.error("parse failed");
  process.exit(1);
}

const full = restMatch[1].replace(/\\n/g, "\n").replace(/\\"/g, '"');
const marker = "<!-- 5.1 FINALE -->";
const idx = full.indexOf(marker);
if (idx < 0) {
  console.error("marker not found");
  process.exit(1);
}

const trimmed = full.slice(idx);
const out = `export const deckChromeHtml = ${chromeMatch[1]};\nexport const deckSlidesRestHtml = ${JSON.stringify(trimmed)};`;
fs.writeFileSync("utils/deckContent.js", out);
console.log("trimmed", full.length, "->", trimmed.length);
