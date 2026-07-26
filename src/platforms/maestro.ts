import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "maestro",
  name: "Maestro",
  description:
    "Maestro is a Telegram trading bot for Solana enabling users to snipe, trade, and manage tokens directly from chat.",
  links: {
    website: "https://maestrobots.com/",
    twitter: "https://x.com/MaestroBots",
    documentation: "https://docs.maestrobots.com/",
  },
  tags: ["tool"],
};

export const contracts: ContractRaw[] = [
  { name: "Router", address: "MaestroAAe9ge5HTc64VbBQZ6fP77pwvrhM8i1XWSAx" },
];
