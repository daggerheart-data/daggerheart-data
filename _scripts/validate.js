import Ajv from "ajv/dist/2020.js";
import fs from "fs";
import path from "path";
import { globSync } from "glob";

const ajv = new Ajv({ allErrors: true });
const schemas = new Map();

for (const schemaPath of globSync("schemas/**/*.schema.json")) {
  const schema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));
  schemas.set(schemaPath, schema);
  ajv.addSchema(schema);
}

for (const dataPath of globSync("releases/**/*.json")) {
  const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

  const schemaPath = path.join(
    "schemas",
    path.basename(dataPath).replace(".json", ".schema.json")
  );

  if (!schemas.has(schemaPath)) {
    console.error(`Missing schema for ${dataPath}`);
    process.exit(1);
  }

  if (!ajv.validate(schemas.get(schemaPath), data)) {
    console.error(`Failed validation for ${dataPath}`);
    console.error(ajv.errors);
    process.exit(1);
  }
}
