// ===================================================
// Error Function
// ===================================================

// Import Config
import * as config from "../config.json";
// Import Discord
import { Message, MessageEmbed } from "discord.js";

// Export Function
export default async function errorMGS(mgs: Message, err: any) {
  // Error Embed
  const errEmbed = new MessageEmbed()
    .setAuthor("**Economy v3.67")
    .setTitle("Error during Execution")
    .setColor(config.economy_color)
    .setDescription(`Error Code ${err}`);
  // Send Error Embed
  mgs.channel.send(errEmbed);
  // Console Log Error
  console.log(err);
}
