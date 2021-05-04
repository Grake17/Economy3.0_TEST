// ===================================================
// Command Registra
// ===================================================

// Import Discord Type
import { Message, MessageEmbed } from "discord.js";
// Import Reg User
import regUser from "../../utils/User_Utility/regUser";
// Import Table Interface
import tables from "../../db/table_interface";
// import Error MGS
import errorMGS from "../../utils/errorMGS";
// import Config
import { author_name, economy_color } from "../../config.json";

// Export Function
export default async function registra(mgs: Message, table: tables) {
  // Reg User
  const reg = await regUser(mgs.author.id, table);
  console.log(reg);
  // Check if User Reg Success
  if (reg) return errorMGS(mgs, reg);
  // Embed
  const embed = new MessageEmbed()
    .setAuthor(author_name)
    .setColor(economy_color)
    .setTitle(`Utente Configurato Correttamente`)
    .setDescription(
      `<Bevenuto in Sea OF Thives ITALIA ${mgs.author.username}!`
    );
  // Send Embed
  mgs.channel.send(embed);
}
