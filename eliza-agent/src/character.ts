import { Character, Clients, defaultCharacter, ModelProviderName } from "@elizaos/core";
import getGiftPlugin from "./custom-plugins/index.ts";

export const character: Character = {
    ...defaultCharacter,
    // name: "Eliza",
    plugins: [getGiftPlugin],
    clients: [],
    modelProvider: ModelProviderName.GOOGLE,
    settings: {
        secrets: {
            // Edwin Plugin Environment Variables
            // EVM_PRIVATE_KEY: "your_evm_private_key_here",
            // SOLANA_PRIVATE_KEY: "your_solana_private_key_here",
            
            // Compass Plugin Environment Variables (when available)
            // COMPASS_WALLET_PRIVATE_KEY: "your_wallet_private_key_here",
            // COMPASS_ARBITRUM_RPC_URL: "your_arbitrum_rpc_url_here",
            // COMPASS_ETHEREUM_RPC_URL: "your_ethereum_rpc_url_here", 
            // COMPASS_BASE_RPC_URL: "your_base_rpc_url_here",
        },
        voice: {
            model: "en_US-hfc_female-medium",
        },
        chains: {
            "evm": ["avalancheFuji"]
        }
    },
};
