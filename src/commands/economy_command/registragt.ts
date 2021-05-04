// ===================================================
// Registra GT Command
// ===================================================

// Discord Import
import { Message, MessageEmbed } from "discord.js";
// Import Table Interface
import tables from "../../db/table_interface";
import regUser from "../../utils/User_Utility/regUser";

// Command Export Function
export default async function registraGT(mgs: Message, table: tables) {
  // // Reg User
  // regUser(mgs.author.id, table);
  // Embed
  const embed = new MessageEmbed()
    .setAuthor("Economy v3.67")
    .setTitle("Registra qua il tuo GamerTag")
    .setDescription("▶️ [clicca qui](http://seaofthievesitalia.net/api/discord/login) ◀️");
  // Send Message
  mgs.channel.send(embed);
}
