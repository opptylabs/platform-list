import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "jupiter-exchange",
  name: "Jupiter",
  description:
    "Jupiter is building the infrastructure for an open financial future. With over $1 trillion in annual volume, Jupiter delivers a unified superapp experience that is simple to use, built to last, and proven at scale by operating a full-stack onchain product suite spanning self-custody, spot, perpetuals, lend, stake, stablecoin, token creation, prediction markets, developer APIs",
  defiLlamaId: "jupiter",
  links: {
    website: "https://jup.ag/",
    discord: "https://discord.gg/jup",
    twitter: "https://x.com/JupiterExchange",
    github: "https://github.com/jup-ag",
    documentation: "https://station.jup.ag/",
  },
  tokens: [
    "27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4",
    "jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v",
    "JuprjznTrTSp2UFa3ZBUFgwdAmtZCq4MQCwysN55USD",
  ],
  platformToken: "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN",
  tags: ["dapp", "lending", "trading", "stablecoin", "defi", "lst", "wallet"],
};

export const contracts: ContractRaw[] = [
  { name: "Swap V7", address: "JUP7pNXFL1G2BESRYMtZ1jepzfDQVffkkkf5JhXWWhC" },
  { name: "Swap V6", address: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4" },
  { name: "Swap v5", address: "JUP5pEAZeHdHrLxh5UCwAbpjGwYKKoquCpda2hfP4u8" },
  { name: "Swap v4", address: "JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB" },
  { name: "Swap v3", address: "JUP3c2Uh3WA4Ng34tw6kPd2G4C5BB21Xo36Je1s32Ph" },
  { name: "Swap v2", address: "JUP2jxvXaqu7NQY1GmNF4m1vodw12LVXYxbFL2uJvfo" },
  { name: "Swap v1", address: "JUP6i4ozu5ydDCnLiMogSckDPpbtr7BJ4FtzYWkb5Rk" },
  { name: "Ape", address: "JSWX3pKDbj2EdCMu4ei7sPYSpdcwZNyjkDSteoHQ4UH" },
  { name: "JupiterZ", address: "61DFfeTKM7trxYcPQCM78bJ794ddZprZpAwAnLiwTpYH" },
  { name: "Limit", address: "jupoNjAxXgZ4rjzxzPMP4oxduvQsQtZzyknqvzYNrNu" },
  { name: "Limit V1", address: "j1o2qRpjcyUwEvwtcfhEQefh773ZgjxcVRry7LDqg5X" },
  { name: "DCA", address: "DCA265Vj8a9CEuX1eb1LWRnDT7uK6q1xMipnNyatn23M" },
  { name: "VA", address: "VALaaymxQh2mNy2trH9jUqHT1mTow76wpTcGmSWSwJe" },
  { name: "Lock", address: "LocpQgucEQHbqNABEYvBvwoxCPsSbG91A1QaQhQQqjn" },
  { name: "Perps", address: "PERPHjGBqRHArX4DySjwM6UJHiR3sWAatqfdBS2qQJu" },
  { name: "Airdrop", address: "meRjbQXFNf5En86FXT2YPz1dQzLj4Yb3xK8u1MVgqpb" },
  { name: "Invite", address: "inv1tEtSwRMtM44tbvJGNiTxMvDfPVnX9StyqXfDfks" },
  { name: "Lend", address: "jup3YeL8QhtSx1e253b2FDvsMNC87fDrgQZivbrndc9" },
  {
    name: "Lend Vaults",
    address: "jupr81YtYssSyPt8jbnGuiWon5f6x9TcDEFxYe3Bdzi",
  },
  {
    name: "Lend Ethena",
    address: "jup97Zx1NixM8UJMQFw8TtKzqTiRT3ETAJR7cVx3PfQ",
  },
  {
    name: "Lend Ethena Vaults",
    address: "jupo974WCqAUMD3RtpayTap1me7StQCWtEkBbDb6Ba3",
  },
  {
    name: "Lend Liquidity Ethena",
    address: "jup6QF1sNDGpkkcu6F4qaFHcRBmnSS1VgyB4uFbBvNS",
  },
  {
    name: "Rewards Hub",
    address: "GenieRGuCtgfDGThwjp2GLreQMFtJoG1fqFE8MF1gAzG",
  },
  {
    name: "Delta Neutral Vault",
    address: "BUNDeH5A4c47bcEoAjBhN3sCjLgYnRsmt9ibMztqVkC9",
  },
];
