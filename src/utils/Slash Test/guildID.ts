// ===================================================
// Return Guild App
// ===================================================

// Import Discord
import { Client, DiscordAPIError } from "discord.js";

// Export Function
export default async function getApp(guildID: string, client: Client) {
    // Create App
    const app = client.fetchApplication()

}