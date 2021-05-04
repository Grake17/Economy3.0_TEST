// ===================================================
// Invalid Command Function
// ===================================================

// Import Config
import { economy_color } from "../config.json";
// Import Discord
import { Message, MessageEmbed } from "discord.js";

// Export Function
export default async function invalidCommand(mgs: Message) {
  // Embed
  const embed = new MessageEmbed()
    .setAuthor("Economy v3.67")
    .setTitle("Comando Invalido")
    .setDescription("Controlla la sintassi Christina!!!")
    .setColor(economy_color);
  // Send MGS
  mgs.channel.send(embed);
}
