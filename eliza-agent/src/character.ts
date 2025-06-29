import { Character, Clients, defaultCharacter, ModelProviderName } from "@elizaos/core";
import getGiftPlugin from "./custom-plugins/index.ts";
import { compassPlugin } from "@elizaos-plugins/plugin-compass";
import { edwinPlugin } from "@elizaos/plugin-edwin";
import { zapperPlugin } from "./plugin-zapper/src/index.ts";

export const character: Character = {
    ...defaultCharacter,
    name: "Liquidation Protector Agent",
    plugins: [compassPlugin, edwinPlugin, zapperPlugin],
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
        model: "gemini-2.0-flash-exp",
        voice: {
            model: "en_US-hfc_female-medium",
        },
        chains: {
            "evm": ["avalancheFuji"]
        }
    },
};
