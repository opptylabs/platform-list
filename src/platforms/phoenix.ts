import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "phoenix",
  name: "Phoenix",
  description:
    "Phoenix is a decentralized limit order book supporting markets for spot assets.",
  defiLlamaId: "phoenix",
  links: {
    website: "https://www.phoenix.trade/",
    discord: "https://discord.gg/ESaTYGzqpd",
    twitter: "https://x.com/PhoenixTrade",
    github: "https://github.com/Ellipsis-Labs",
    documentation:
      "https://ellipsis-labs.gitbook.io/phoenix-dex/tRIkEFlLUzWK9uKO3W2V",
  },
  tags: ["dapp", "dex", "defi"],
};

export const contracts: ContractRaw[] = [
  { name: "Legacy", address: "PhoeNiXZ8ByJGLkxNfZRnkUfjvmuYqLR89jjFHGqdXY" },
  { name: "Eternal", address: "EtrnLzgbS7nMMy5fbD42kXiUzGg8XQzJ972Xtk1cjWih" },
];
