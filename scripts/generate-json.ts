import { writeFileSync } from "fs";
import { join } from "path";
import { platforms } from "../src";
import { contracts } from "../src";

const outputPlatformsPath = join(__dirname, "..", "dist", "platforms.json");
const outputContractsPath = join(__dirname, "..", "dist", "contracts.json");

writeFileSync(outputPlatformsPath, JSON.stringify(platforms, null, 2));
writeFileSync(outputContractsPath, JSON.stringify(contracts, null, 2));

console.log(`Generated platforms JSON at ${outputPlatformsPath}`);
console.log(`Generated contracts JSON at ${outputContractsPath}`);
