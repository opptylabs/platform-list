import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "diversifi",
  name: "DiversiFi",
  description: "The Platform for Onchain Index Trading ",
  links: {
    website: "https://diversifi.trade/",
    twitter: "https://x.com/useDiversiFi",
  },
  tags: ["defi"],
};

export const contracts: ContractRaw[] = [
  { name: "Main", address: "3vyr9DRfMZb2KvUQdnps7YG3PY38XdguLBQaJ2DFkSxk" },
];
