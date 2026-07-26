import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "photon",
  name: "Photon",
  description:
    "Photon is a trading terminal offering fast token swaps with advanced trading features for memecoins and new launches.",
  defiLlamaId: "photon",
  links: {
    website: "https://photon-sol.tinyastro.io/",
    twitter: "https://x.com/tradewithPhoton",
    telegram: "https://t.me/photonlounge",
  },
  tags: ["dapp", "trading", "dex", "tool"],
};

export const contracts: ContractRaw[] = [
  { name: "Swap", address: "BSfD6SHZigAfDWSjzD5Q41jw8LmKwtmjskPH9XW1mrRW" },
];
