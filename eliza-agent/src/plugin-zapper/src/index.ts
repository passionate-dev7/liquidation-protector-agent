import type { Plugin } from "@elizaos/core";
import { portfolioAction } from "./actions/portfolio/portfolio.js";
import { farcasterPortfolioAction } from "./actions/farcasterPortfolio/farcasterPortfolio.js";

export const zapperPlugin: Plugin = {
    name: "zapper",
    description: "A plugin for integrating the Zapper API with your application.",
    actions: [portfolioAction, farcasterPortfolioAction],
};
export default zapperPlugin;
