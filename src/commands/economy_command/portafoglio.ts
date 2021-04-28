// ===================================================
// Command Portafoglio
// ===================================================

// Import Config.JSON
import { economy_color } from "../../config.json";
// Import Discord
import { Message, MessageEmbed } from "discord.js";
// Import Tables Interface
import tables from "../../db/table_interface";
// Import Utilis
import getUserDB from "../../utility/User_Utility/getUserDB";

// Portafoglio Function
export default async function portafoglio(mgs: Message, table: tables) {
  // Get User ID
  const user = mgs.author;
  // Get User Data From DB
  const result = await getUserDB(user.id, table);
  // Extract Data
  const data_user = result?.get();
  // Console Log For Test
  console.log(data_user);
  // Text For Embed
  let myContent = [
    `◾ **Utente**: <@!${user.id}>`,
    `◾ **Talleri**: ${data_user?.saldo}`,
    `◾ **Talleri depositati totali**: ${data_user?.saldoDepositatoTot}`,
  ].join(`\n`);
  // Check User Crew
  if (!data_user?.ciurmaId)
    myContent += `\n◾ **Talleri depositati in <@&${data_user?.ciurmaId}>**: ${data_user?.saldoDepositatoPar}`;
  // Create Embed
  const embed = new MessageEmbed()
    .setAuthor(`Economy 3.67`)
    .setTitle("Portafoglio Utente")
    .setColor(economy_color)
    .setDescription(`${myContent}`);
  // Send Message
  mgs.channel.send(embed);
}
