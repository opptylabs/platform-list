import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "graphite",
  name: "Graphite Protocol",
  description:
    "Graphite Protocol is a staking platform associated with Taiyo Robotics, offering token and NFT staking services.",
  links: {
    website: "https://gpstaking.taiyorobotics.com/",
    twitter: "https://x.com/GraphiteProto",
    documentation: "https://solport.gitbook.io/graphite-whitepaper",
  },
  tags: ["dapp"],
};

export const contracts: ContractRaw[] = [
  { name: "Staking", address: "7pXE4B9EgsEixnyW6U16dEHXKqaaU3mj63cCMqrPRy1C" },
  {
    name: "Taiyo Gen1 Staking",
    address: "J1gmrCGd1zkmjYpsCRkFCsQQEZohRQLVXN4dVxKvDu1e",
  },
  {
    name: "Taiyo Gen2 Staking",
    address: "5f7ZLHmrtjpiCjM2vhSfbewUyDPZcf8x2RDRYJnyMXxg",
  },
];
