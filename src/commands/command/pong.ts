// ===================================================
// Command Test
// ===================================================

// Import Discord.js
import { Client, Message, MessageEmbed } from "discord.js";

// Export Module
async function pong(mgs: Message) {
    const text = new MessageEmbed()
        .setTitle("Pong")
        .setDescription("Pong Pong");
    mgs.channel.send(text);
}

export default pong;