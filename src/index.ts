import { platforms as platformsRaw, contracts } from "./platforms/index";
import { Platform } from "./types";

export { Contract, ContractRaw, Platform } from "./types";
export * from "./utils";

const platforms: Platform[] = platformsRaw.map(
  (p): Platform => ({
    ...p,
    image: `https://raw.githubusercontent.com/opptylabs/platform-list/main/img/${p.id}.webp`,
    isDeprecated: p.isDeprecated || false,
  }),
);

export { platforms, contracts };
