import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "meteora",
  name: "Meteora",
  description:
    "Meteora is a DeFi protocol offering dynamic liquidity pools (DLMM), vaults, stable swaps, and token launch infrastructure.",
  defiLlamaId: "meteora",
  links: {
    website: "https://meteora.ag/",
    discord: "https://discord.gg/WwFwsVtvpH",
    twitter: "https://x.com/MeteoraAG",
    github: "https://github.com/MeteoraAg",
    documentation: "https://docs.meteora.ag/",
  },
  tags: ["dapp", "dex", "vault", "launchpad"],
  platformToken: "METvsvVRapdj9cFLzq4Tr43xK4tAjQfwX76z3n6mWQL",
  tokens: ["MERt85fc5boKw3BW1eYdxonEuJNvXbiMbs6hvheau5K"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Mercurial Stable Swap",
    address: "MERLuDFBMmsHnsBPZw2sDQZHvXFMwp8EdjudcU2HKky",
  },
  { name: "Vaults", address: "24Uqj9JCLxUeoC3hGfh5W3s9FM9uCHDS2SG3LYwBpyTi" },
  { name: "Pools", address: "Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB" },
  { name: "Farms", address: "FarmuwXPWXvefWUeqFAa5w6rifLkq5X6E8bimYvrhCB1" },
  { name: "DLMM", address: "LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo" },
  {
    name: "DLMM Vaults",
    address: "vaU6kP7iNEGkbmPkLmZfGwiGxd4Mob24QQCie5R9kd2",
  },
  { name: "AMM V2", address: "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG" },
  {
    name: "M3M3 Staking",
    address: "FEESngU3neckdwib9X3KWqdL7Mjmqk9XNp3uh5JbP4KP",
  },
  {
    name: "Bonding Curve",
    address: "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN",
  },
  { name: "Zap", address: "zapvX9M3uf5pvy4wRPAbQgdQsM1xmuiFnkfHKPvwMiz" },
  {
    name: "Liquidity Airdrop",
    address: "pDisRpxvnFw4osSqDPqMJ62tLsVQGsHL4tMX23ArYrL",
  },
];
