// Loads study centres from server/data/centres.json into MongoDB.
// Run with: npm run seed:centres
//
// IMPORTANT: only add rows copied from IGNOU's official lists
// (https://www.ignou.ac.in). Leave "verified": false until you have checked
// the row against the official source.
import fs from "node:fs";
import mongoose from "mongoose";
import { config } from "../config.js";
import { StudyCentre } from "../models/StudyCentre.js";

const file = new URL("../../data/centres.json", import.meta.url);
const rows = JSON.parse(fs.readFileSync(file, "utf8"));

if (!Array.isArray(rows) || rows.length === 0) {
  console.log("data/centres.json is empty. Add centres first (see data/centres.example.json).");
  process.exit(0);
}

await mongoose.connect(config.MONGODB_URI);

let upserted = 0;
for (const row of rows) {
  const key = row.code
    ? { regionalCentre: row.regionalCentre, code: row.code }
    : { regionalCentre: row.regionalCentre, name: row.name };
  await StudyCentre.updateOne(key, { $set: row }, { upsert: true });
  upserted += 1;
}

console.log(`Seeded ${upserted} centres.`);
await mongoose.disconnect();
