import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "zeus",
  name: "Zeus",
  links: {
    website: "https://app.zeusguardian.io/",
    twitter: "https://x.com/ZeusNetworkHQ",
    documentation: "https://docs.zeusnetwork.xyz/",
    github: "https://github.com/ZeusNetworkHQ",
    discord: "https://discord.com/invite/zeusnetwork",
    medium: "https://medium.com/@zeus-network",
  },
  defiLlamaId: "zeus-network",
  platformToken: "ZEUS1aR7aX8DFFJf5QjWj2ftDDdNTroMNGo8YoQm3Gq",
  description:
    "Zeus is a multichain layer enabling cross-chain interoperability.",
  tags: ["dapp", "infrastructure", "bitcoin"],
};

export const contracts: ContractRaw[] = [
  {
    name: "Bootstrapper",
    address: "ZPLsAzVmV6gRipY8dzoWcGWJ81tkPUN9M7YfxJPru9w",
  },
  {
    name: "BitcoinSPV",
    address: "ZPLowzr41tCGkoRXuzEx4Ts98Jjrbfe9rtv7gqdgGkH",
  },
  { name: "LayerCA", address: "ZPLtKX3gHTa4djEdmkZXkXiJdTUEeD5ZjZD4jAnxrSP" },
  { name: "Delegator", address: "ZPLt7XEyRvRxEZcGFGnRKGLBymFjQbwmgTZhMAMfGAU" },
  {
    name: "LiquidityManagement",
    address: "ZPLuj6HoZ2z6y6WfJuHz3Gg48QeMZ6kGbsa74oPxACY",
  },
  { name: "TwoWayPeg", address: "ZPLzxjNk1zUAgJmm3Jkmrhvb4UaLwzvY2MotpfovF5K" },
];
