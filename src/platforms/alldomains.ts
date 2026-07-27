import { PlatformRaw, ContractRaw } from "../types";
export const platform: PlatformRaw = {
  id: "alldomains",
  name: "AllDomains",
  description:
    "AllDomains is a Web3 domain name service that enables users to create, register, and trade customizable domain names and top-level domains as NFTs.",
  tags: ["social"],
  links: {
    website: "https://alldomains.id/",
    discord: "https://discord.com/invite/alldomains",
    telegram: "https://t.me/AllDomainsID",
    twitter: "https://x.com/AllDomains",
    github: "https://github.com/onsol-labs",
    documentation: "https://docs.alldomains.id/protocol/",
  },
  platformToken: "BaoawH9p2J8yUK9r5YXQs3hQwmUJgscACjmTkh8rMwYL",
};

export const contracts: ContractRaw[] = [
  {
    name: "Name House",
    address: "NH3uX6FtVE2fNREAioP7hm5RaozotZxeL6khU1EHx51",
  },
  {
    name: "Name Service",
    address: "ALTNSZ46uaAUU7XUV6awvdorLGqAsPwa9shm7h4uP2FK",
  },
  {
    name: "Top Level Domain CoSigner",
    address: "TCSVHqadS2swhap43BnZtmeEAPNXfpc3w2HLBredVaR",
  },
];
