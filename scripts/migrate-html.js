const fs = require("fs");
const path = require("path");

const htmlPath = path.join(__dirname, "..", "PROJECT_LOONSHOT (2).html");
const html = fs.readFileSync(htmlPath, "utf8");

const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
const mainMatch = html.match(/<main id="deck">([\s\S]*?)<\/main>/);

if (!styleMatch || !bodyMatch || !mainMatch) {
  throw new Error("Could not extract content from HTML");
}

const chromeHtml = bodyMatch[1]
  .replace(mainMatch[0], "{{DECK}}")
  .replace(/<script>[\s\S]*?<\/script>/, "")
  .trim();

const deckHtml = mainMatch[1].trim();

fs.writeFileSync(path.join(__dirname, "..", "styles", "deck.css"), styleMatch[1].trim());
fs.writeFileSync(
  path.join(__dirname, "..", "utils", "deckContent.js"),
  `export const deckChromeHtml = ${JSON.stringify(chromeHtml)};\nexport const deckSlidesHtml = ${JSON.stringify(deckHtml)};\n`
);

console.log("Extracted deck.css, deckChromeHtml, deckSlidesHtml");
