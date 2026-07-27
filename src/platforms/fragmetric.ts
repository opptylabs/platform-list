import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "fragmetric",
  name: "Fragmetric",
  description:
    "Fragmetric is a liquid restaking protocol enabling users to restake SOL for enhanced yields while maintaining liquidity.",
  defiLlamaId: "fragmetric",
  tags: ["restaking"],
  links: {
    website: "https://fragmetric.xyz/",
    discord: "https://discord.gg/fragmetric",
    twitter: "https://x.com/fragmetric",
    github: "https://github.com/fragmetric-labs",
    documentation: "https://docs.fragmetric.xyz/",
  },
  platformToken: "FRAGMEWj2z65qM62zqKhNtwNFskdfKs4ekDUDX3b4VD5",
  tokens: [
    "WFRGSWjaz8tbAxsJitmbfRuFV2mSNwy7BMWcCwaA28U",
    "FRAGSEthVFL7fdqM8hxfxkfCZzUvmg21cqPJVvC1qdbo",
    "FRAGJ157KSDfGvBJtCSrsTWUqFnZhrw4aC8N8LqHuoos",
    "FRAG2gPNXozPpYcn2a8zK7YdtfNXCLsioZNwZXwTQ3cP",
    "WFRGB49tP8CdKubqCdt5Spo2BdGS4BpgoinNER5TYUm",
  ],
};

export const contracts: ContractRaw[] = [
  {
    name: "Fragmetric",
    address: "fragnAis7Bp6FTsMoa6YcH8UffhEw43Ph79qAiK3iF3",
  },
  { name: "Airdrop", address: "fdropWhSi5xVKa9z26qKXveXoHDePDXfb5zxt3RKvKx" },
];
