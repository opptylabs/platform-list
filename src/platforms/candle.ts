import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "candle",
  name: "Candle",
  description:
    "Candle TV is a livestreaming platform and token launchpad where creators earn 50% of trading fees from tokens launched during streams.",
  links: {
    website: "https://candle.tv",
    twitter: "https://x.com/candledottv",
    documentation: "https://docs.candle.tv",
  },
  platformToken: "A8bcY1eSenMiMy75vgSnp6ShMfWHRHjeM6JxfM1CNDL",
  tags: ["memecoin", "dapp", "social"],
};

export const contracts: ContractRaw[] = [
  { name: "Staking", address: "CNDL7Y1SYqvSF34aXayqHjm2JZrHB7BfhhVi3TUan3fe" },
];
