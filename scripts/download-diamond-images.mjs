import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const IDS = [
  "147841971",
  "139342592",
  "168394205",
  "156982447",
  "132771904",
  "170284639",
  "128849351",
  "144820652",
  "151009837",
  "160550284",
  "149233704",
  "171450992",
  "121784550",
  "163788214",
  "154902681",
  "166029755",
  "138540126",
  "177311608",
  "182440916",
  "188213405",
  "180945672",
  "184739201",
  "189430778",
  "181255693",
];

const OUTPUT_DIR = path.join(process.cwd(), "public", "diamonds");
const DATA_DIR = path.join(process.cwd(), "data");

function extractImageUrl(html) {
  const match = html.match(/"image":\s*\[\s*"(https:\/\/media\.rarecarat\.com\/[^"]+)"/);
  return match?.[1] ?? null;
}

async function downloadImage(context, imageUrl, filePath) {
  const imagePage = await context.newPage();
  try {
    const response = await imagePage.goto(imageUrl, { waitUntil: "load", timeout: 45000 });
    const buffer = await response?.body();
    if (!buffer || buffer.length < 1000) {
      return false;
    }
    await writeFile(filePath, buffer);
    return true;
  } finally {
    await imagePage.close();
  }
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });
  await mkdir(DATA_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();

  const mapping = {};
  const urlToLocalPath = new Map();

  for (const id of IDS) {
    const url = `https://www.rarecarat.com/diamond/${id}`;
    try {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
      const html = await page.content();
      const imageUrl = extractImageUrl(html);

      if (!imageUrl) {
        mapping[id] = null;
        console.log(`no image: ${id}`);
        continue;
      }

      const localPath = `/diamonds/${id}.jpg`;
      const filePath = path.join(OUTPUT_DIR, `${id}.jpg`);

      if (urlToLocalPath.has(imageUrl)) {
        const sourcePath = urlToLocalPath.get(imageUrl);
        await writeFile(filePath, await readFile(sourcePath));
        mapping[id] = localPath;
        console.log(`reused: ${id}`);
        continue;
      }

      const saved = await downloadImage(context, imageUrl, filePath);
      if (saved) {
        urlToLocalPath.set(imageUrl, filePath);
        mapping[id] = localPath;
        console.log(`saved: ${id}`);
      } else {
        mapping[id] = imageUrl;
        console.log(`remote fallback: ${id}`);
      }
    } catch (error) {
      mapping[id] = null;
      console.log(`error ${id}:`, error.message);
    }
  }

  await browser.close();
  await writeFile(path.join(DATA_DIR, "diamond-images.json"), JSON.stringify(mapping, null, 2));
  console.log("done", Object.values(mapping).filter(Boolean).length, "with images");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
