import fs from "fs";
import https from "https";
import path from "path";

const assets = [
  ["https://www.figma.com/api/mcp/asset/f254fa8e-9ca4-4a46-bdaa-c7b8f323f394", "loop-ring.svg"],
  ["https://www.figma.com/api/mcp/asset/11ed5451-6b80-4701-b9e4-71415168328e", "loop-node-primary.svg"],
  ["https://www.figma.com/api/mcp/asset/f703cc4e-7e4d-4d6c-8169-ff2b54cc70ff", "loop-node-secondary.svg"],
  ["https://www.figma.com/api/mcp/asset/8e888135-e70f-4bd4-ba57-d7f7c3523a3d", "pilot-path.svg"]
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          download(res.headers.location, dest).then(resolve).catch(reject);
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => {
          fs.writeFileSync(dest, Buffer.concat(chunks));
          resolve();
        });
      })
      .on("error", reject);
  });
}

const dir = "public/images/figma";
for (const [url, name] of assets) {
  const dest = path.join(dir, name);
  await download(url, dest);
  console.log("saved", name, fs.statSync(dest).size);
}
