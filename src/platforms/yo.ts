import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "yo",
  name: "YO",
  description:
    "YO is a DeFi protocol that helps you easily boost your crypto earnings without the hassle.",
  links: {
    website: "https://app.yo.xyz/",
    twitter: "https://x.com/yield",
    documentation: "https://docs.yo.xyz/",
  },
  tags: ["dapp"],
};

export const contracts: ContractRaw[] = [
  { name: "SOL Vault", address: "yvSoLSBaLoqZ2yQttGbaYzHDXr9Bo9UdqtiRDiVaMxP" },
];
