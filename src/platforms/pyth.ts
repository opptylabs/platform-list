import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "pyth",
  name: "Pyth",
  description:
    "Pyth Network is a decentralized oracle that delivers real-time market data from institutional sources to smart contracts across 50+ blockchains.",
  defiLlamaId: "pyth-network",
  links: {
    website: "https://pyth.network/",
    discord: "https://discord.com/invite/pythnetwork",
    twitter: "https://x.com/PythNetwork",
    github: "https://github.com/pyth-network",
    documentation: "https://docs.pyth.network/home",
  },
  platformToken: "HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3",
  tags: ["tool", "dapp", "infrastructure", "oracle", "defi"],
};

export const contracts: ContractRaw[] = [
  { name: "Staking", address: "pytS9TjG1qyAZypk7n8rw8gfW9sUaqqYyMhJQ4E7JCQ" },
  { name: "Staking", address: "pyti8TM4zRVBjmarcgAPmTNNAXYKJv7WVHrkrm6woLN" },
  {
    name: "Governance",
    address: "pytGY6tWRgGinSCvRLnSv4fHfBTMoiDGiCsesmHWM6U",
  },
  {
    name: "Express Relay",
    address: "PytERJFhAKuNNuaiXkApLfWzwNwSNDACpigT3LwQfou",
  },
  { name: "Airdrop", address: "EXxqB6XPLczReFcZyigfbdowB6WGYtnkLYC4XZ2ae9ch" },
];
