import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "manifest",
  name: "Manifest",
  description:
    "Manifest is the 3rd-generation on-chain orderbook built on Solana.",
  tags: ["dex"],
  defiLlamaId: "manifest-trade",
  links: {
    website: "https://manifest.trade/",
    telegram: "https://t.me/manifest_trade",
    twitter: "https://x.com/ManifestTrade",
    documentation: "https://manifest.trade/whitepaper.pdf",
  },
};

export const contracts: ContractRaw[] = [
  {
    name: "Order Book",
    address: "wMNFSTkir3HgyZTsB7uqu3i7FA73grFCptPXgrZjksL",
  },
  { name: "Vault", address: "MNFSTqtC93rEfYHB6hF82sKdZpUDFWkViLByLd1k1Ms" },
];
