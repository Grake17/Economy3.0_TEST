// ===================================================
// Error Function
// ===================================================

// Import Config
import { economy_color, author_name } from "../config.json";
// Import Discord
import { Message, MessageEmbed } from "discord.js";

// Export Function
export default async function errorMGS(mgs: Message, err: string) {
  // Error Embed
  const errEmbed = new MessageEmbed()
    .setAuthor(author_name)
    .setTitle("Errore nel comando!")
    .setColor(economy_color)
    .setDescription(`${err}`);
  // Send Error Embed
  mgs.channel.send(errEmbed);
  // // Console Log Error
  // console.log(err);
}
