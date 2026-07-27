import { PlatformRaw, ContractRaw } from "../types";
import { platform as jupiterPlatform } from "./jupiter-exchange";
export const platform: PlatformRaw = {
  id: "jupiter-lend",
  name: "Jupiter Lend",
  description:
    "Jupiter Lend is Jupiter's lending product, where users can supply assets to earn yield and borrow against collateral.",
  links: {
    website: "https://jup.ag/lend/earn",
    twitter: "https://x.com/jupiter_earn",
  },
  tags: ["vault", "lending"],
  parentId: jupiterPlatform.id,
};

export const contracts: ContractRaw[] = [
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
];
