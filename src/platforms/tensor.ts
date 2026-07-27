import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "tensor",
  name: "Tensor",
  description:
    "Tensor is an NFT marketplace offering trading, bidding, AMM pools, and compressed NFT support with advanced features for professional traders.",
  tags: ["nft-marketplace"],
  links: {
    website: "https://www.tensor.trade/",
    discord: "https://discord.gg/tensor",
    twitter: "https://x.com/tensor_hq",
    github: "https://github.com/tensor-hq",
    documentation: "https://docs.tensor.trade/",
  },
  platformToken: "TNSRxcUxoT9xBG3de7PiJyTDYu7kskLqcpddxnEJAS6",
};

export const contracts: ContractRaw[] = [
  { name: "Swap", address: "TSWAPaqyCSx2KABk68Shruf4rp7CxcNi8hAsbdwmHbN" },
  { name: "cNFT", address: "TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp" },
  { name: "Bid", address: "TB1Dqt8JeKQh7RLDzfYDJsq8KS4fS2yt87avRjyRxMv" },
  { name: "AMM", address: "TAMM6ub33ij1mbetoMyVBLeKY5iP41i4UPUJQGkhfsg" },
  { name: "Lucky Buy", address: "LUCK57mxzZiRGF2PdHAY79P6tZ8Apsi381tKvBrTdqk" },
];
