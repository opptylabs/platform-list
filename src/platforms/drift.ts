import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "drift",
  name: "Drift",
  description:
    "Drift brings on-chain, cross-margined perpetual futures. Making futures DEXs the best way to trade.",
  defiLlamaId: "drift",
  tags: ["vault", "perpetuals"],
  links: {
    website: "https://www.drift.trade/",
    discord: "https://discord.com/invite/fMcZBH8ErM",
    twitter: "https://x.com/DriftProtocol",
    github: "https://github.com/drift-labs",
    documentation: "https://docs.drift.trade/",
  },
  platformToken: "DriFtupJYLTosbwoN8koMbEYSx54aFAVLddWsbksjwg7",
};

export const contracts: ContractRaw[] = [
  { name: "Drift", address: "dRiftyHA39MWEi3m9aunc5MzRF1JYuBsbn6VPcn33UH" },
  {
    name: "Jit Proxy",
    address: "J1TnP8zvVxbtF5KFp5xRmWuvG9McnhzmBd9XGfCyuxFP",
  },
  { name: "Airdrop", address: "E7HtfkEMhmn9uwL7EFNydcXBWy5WCYN1vFmKKjipEH1x" },
  {
    name: "Drift Vaults",
    address: "vAuLTsyrvSfZRuRB3XgvkPwNGgYSs9YRYymVebLKoxR",
  },
];
