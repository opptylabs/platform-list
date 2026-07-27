import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "printr",
  name: "Printr",
  description: "Printr is the most configurable launchpad on Solana.",
  links: {
    website: "https://www.printr.money/",
    twitter: "https://x.com/printr",
    documentation: "https://printr.gitbook.io/printr-docs",
  },
  tags: ["launchpad"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Printr Program",
    address: "T8HsGYv7sMk3kTnyaRqZrbRPuntYzdh12evXBkprint",
  },
];
