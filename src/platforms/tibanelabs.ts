import { PlatformRaw, ServiceRaw } from "../types";

export const platform: PlatformRaw = {
  id: "tibanelabs",
  name: "Tibane Labs",
  description: "Open source tools and infrastructure on Solana.",
  links: {
    website: "https://www.tibane.net/",
    twitter: "https://x.com/TibaneLabs",
    github: "https://github.com/TibaneLabs",
  },
  tags: ["dapp"],
};

const stakingContract = {
  name: "Staking",
  address: "3Ecf8gyRURyrBtGHS1XAVXyQik5PqgDch4VkxrH4ECcr",
};

export const stakingService: ServiceRaw = {
  id: `${platform.id}-staking`,
  name: "Staking",
  platformId: platform.id,
  contractsRaw: [stakingContract],
};

export const services: ServiceRaw[] = [stakingService];
