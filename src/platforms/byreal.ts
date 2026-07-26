import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "byreal",
  name: "Byreal",
  description:
    "Byreal is a hybrid DEX by Bybit combining concentrated liquidity (CLMM) with Request-for-Quote (RFQ) routing for low-slippage, MEV-protected trades.",
  tags: ["dapp"],
  defiLlamaId: "byreal",
  links: {
    website: "https://www.byreal.io/",
    telegram: "https://t.me/Byreal_Community",
    twitter: "https://x.com/byreal_io",
    documentation: "https://docs.byreal.io/products/getting-started",
  },
};

export const contracts: ContractRaw[] = [
  { name: "CLMMM", address: "REALQqNEomY6cQGZJUGwywTBD2UmDT32rZcNnfxQ5N2" },
  { name: "Reset", address: "REALdpFGDDsiD9tvxYsXBTDpgH1gGQEqJ8YSLdYQWGD" },
  { name: "Router", address: "REALp6iMBDTctQqpmhBo4PumwJGcybbnDpxtax3ara3" },
  { name: "RFQ", address: "REALFP9S4VmrAixmeYa68FrPKn4NVD2QFxxMfz9arhz" },
];
