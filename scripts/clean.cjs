const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

for (const rel of [".next", path.join("node_modules", ".cache")]) {
  const target = path.join(root, rel);
  try {
    fs.rmSync(target, { recursive: true, force: true });
    console.log("Kaldırıldı:", rel);
  } catch (e) {
    if (e.code !== "ENOENT") console.error(rel, e.message);
  }
}
