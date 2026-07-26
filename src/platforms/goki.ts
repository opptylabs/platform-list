import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "goki",
  name: "Goki",
  tags: ["tool", "dapp"],
  description:
    "Goki is a Multisig tool that allows users to create and manage multisig wallets.",
  links: {
    website: "https://goki.so/",
    twitter: "https://x.com/GokiProtocol",
    github: "https://github.com/GokiProtocol",
  },
};

export const contracts: ContractRaw[] = [
  { name: "Multisig", address: "GokivDYuQXPZCWRkwMhdH2h91KpDQXBEmpgBgs55bnpH" },
];
