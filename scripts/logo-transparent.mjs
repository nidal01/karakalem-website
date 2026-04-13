import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const input = join(root, "images", "kk-logo.jpeg");
const output = join(root, "images", "kk-logo.png");

const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const w = info.width;
const h = info.height;

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const l = 0.299 * r + 0.587 * g + 0.114 * b;
  if (l > 200) {
    data[i + 3] = 0;
  } else if (l > 145) {
    const t = (l - 145) / 55;
    data[i + 3] = Math.round(255 * (1 - t));
  }
}

await sharp(Buffer.from(data), { raw: { width: w, height: h, channels: 4 } })
  .resize(480, null, { withoutEnlargement: true, fit: "inside" })
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log("Wrote", output);
