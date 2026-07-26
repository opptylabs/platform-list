import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "solayer",
  name: "Solayer",
  description:
    "Solayer is a restaking protocol securing both endogenous AVS (dApps) through stake-weighted quality of service and exogenous AVS via POS primitives.",
  defiLlamaId: "solayer",
  tags: ["dapp", "defi", "restaking", "vault", "card"],
  links: {
    website: "https://solayer.org/",
    discord: "https://discord.com/invite/solayerlabs",
    telegram: "https://t.me/solayer_discussion",
    twitter: "https://x.com/solayer_labs",
    github: "https://github.com/solayer-labs",
    documentation:
      "https://docs.solayer.org/documentation/get-started/introduction",
  },
  platformToken: "LAYER4xPpTCb3QL8S9u41EAhAX7mhBn8Q6xMTwY2Yzc",
  tokens: [
    "sSo1wxKKr6zW2hqf5hZrp2CawLibcwi1pMBqk5bg2G4",
    "sSo14endRuUbvQaJS3dq36Q829a3A6BEfoeeRGJywEh",
    "susdabGDNbhrnCa6ncrYo81u4s9GM8ecK2UwMyZiq4X",
  ],
};

export const contracts: ContractRaw[] = [
  { name: "Solayer", address: "sSo1iU21jBrU9VaJ8PJib1MtorefUV4fzC9GURa2KNn" },
  { name: "Airdrop", address: "ARDPkhymCbfdan375FCgPnBJQvUfHeb7nHVdBfwWSxrp" },
  { name: "sUDC", address: "s1aysqpEyZyijPybUV89oBGeooXrR22wMNLjnG2SWJA" },
  { name: "Endo Avs", address: "endoLNCKTqDn8gSVnN2hDdpgACUPWHZTwoYnnMybpAT" },
];
