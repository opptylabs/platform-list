import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "sanctum",
  name: "Sanctum",
  description:
    "Sanctum is a liquid staking protocol that provides unified liquidity for LSTs, enabling instant swaps between any liquid staking tokens and native SOL.",
  defiLlamaId: "sanctum",
  tags: ["lst", "dapp", "defi"],
  links: {
    website: "https://www.sanctum.so/",
    discord: "https://discord.gg/sanctumso",
    twitter: "https://x.com/sanctumso",
    github: "https://github.com/igneous-labs",
    documentation: "https://learn.sanctum.so/docs",
  },
  platformToken: "CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu",
  tokens: ["5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm"],
};

export const contracts: ContractRaw[] = [
  { name: "Vote", address: "VAU1T7S5UuEHmMvXtXMVmpEoQtZ2ya7eRb7gcN47wDp" },
  { name: "Staking", address: "bon4Kh3x1uQK16w9b9DKgz3Aw4AP1pZxBJk55Q6Sosb" },
  { name: "Infinity", address: "5ocnV1qiCgaQR8Jb8xWnVbApfaygJ8tNoZfgPwsgx9kx" },
  { name: "Router", address: "stkitrT1Uoy18Dk1fTrgPw8W6MVzoCfYoAFT4MLsmhq" },
  { name: "ASR", address: "9R2CZDyVjBBK2bxx6NfKdnYMYfh8TQEphUUgZ4861XqJ" },
];
