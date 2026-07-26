import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "garden",
  name: "Garden",
  description:
    "Garden is the fastest and most cost-efficient way to move native Bitcoin between chains, without giving up custody.",
  tags: ["tool", "bridge", "dapp"],
  defiLlamaId: "garden",
  links: {
    website: "https://garden.finance",
    twitter: "https://x.com/gardenfi",
  },
};

export const contracts: ContractRaw[] = [
  { name: "Bridge", address: "2bag6xpshpvPe7SJ9nSDLHpxqhEAoHPGpEkjNSv7gxoF" },
];
