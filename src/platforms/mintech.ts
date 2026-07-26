import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "mintech",
  name: "Mintech",
  description:
    "Mintech is a trading bot offering automated NFT sniping and trading features.",
  links: {
    website: "https://www.mintechbots.com/",
    discord: "https://discord.gg/mintech",
    twitter: "https://x.com/mintechbots",
    documentation:
      "https://mintechbots.gitbook.io/mintech-guide/getting-started/welcome",
  },
  tags: ["tool", "trading"],
};

export const contracts: ContractRaw[] = [
  { name: "Router", address: "minTcHYRLVPubRK8nt6sqe2ZpWrGDLQoNLipDJCGocY" },
];
