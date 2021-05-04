// ===================================================
// Command Portafoglio
// ===================================================

// Import Config.JSON
import { economy_color, author_name } from "../../config.json";
// Import Discord
import { Message, MessageEmbed } from "discord.js";
// Import Tables Interface
import tables from "../../db/table_interface";
// Import Utilis
import getUserDB from "../../utils/User_Utility/getUserDB";
// Error MGS
import errorMGS from "../../utils/errorMGS";

// Portafoglio Function
export default async function portafoglio(mgs: Message, table: tables) {
  // Get User ID
  const user = mgs.author;
  // Get User Data From DB
  const result = (await getUserDB(user.id, table))?.get();
  // Test Data
  if(!result) return errorMGS(mgs, "Utente non trovato");
  // Text For Embed
  let myContent = [
    `◾ **Utente**: <@!${user.id}>`,
    `◾ **Talleri**: ${result.saldo}`,
    `◾ **Talleri depositati totali**: ${result.saldoDepositatoTot}`,
  ].join(`\n`);
  // Check User Crew
  if (result.ciurmaId)
    myContent += `\n◾ **Talleri depositati in <@&${result.ciurmaId}>**: ${result.saldoDepositatoPar}`;
  // Create Embed
  const embed = new MessageEmbed()
    .setAuthor(author_name)
    .setTitle("Portafoglio Utente")
    .setColor(economy_color)
    .setDescription(`${myContent}`);
  // Send Message
  mgs.channel.send(embed);
}
