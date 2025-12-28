import fs from "fs";
import path from "path";
import { globSync } from "glob";
import tar from "tar-stream";
import zlib from "zlib";

const outputPath = process.argv[2];
if (!outputPath) {
  console.error("Missing output path");
  process.exit(1);
}

const pack = tar.pack();
const gzip = zlib.createGzip();
const output = fs.createWriteStream(outputPath);

pack.pipe(gzip).pipe(output);

for (const dataPath of globSync("releases/**/*.json")) {
  const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  const minifiedData = JSON.stringify(data);
  const relativePath = path.relative("releases", dataPath);

  pack.entry({ name: relativePath }, minifiedData);
}

pack.finalize();
