import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "marginfi",
  name: "Marginfi",
  description:
    "Marginfi is a decentralized lending and borrowing protocol offering isolated risk pools, cross-margin positions, and integrated yield strategies.",
  defiLlamaId: "marginfi",
  links: {
    website: "https://www.marginfi.com/",
    telegram: "https://t.me/mrgnteam",
    twitter: "https://x.com/marginfi",
    github: "https://github.com/mrgnlabs/",
    documentation: "https://docs.marginfi.com/",
  },
  tokens: ["LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp"],
  tags: ["lending"],
};

export const contracts: ContractRaw[] = [
  { name: "Lending", address: "MFv2hWf31Z9kbCa1snEPYctwafyhdvnV7FZnsebVacA" },
];
