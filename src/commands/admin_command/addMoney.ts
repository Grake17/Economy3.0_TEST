// ===================================================
// AddMoney Command
// ===================================================

// Discord Type
import { Message, MessageEmbed } from "discord.js";
// Table Interface
import tables from "../../db/table_interface";
// Import Error MGS
import errorMGS from "../../utils/errorMGS";
// get USer DB
import getUserDB from "../../utils/User_Utility/getUserDB";
// Import config
import { author_name, economy_color } from "../../config.json";

// Export Command
export default async function addMoney(
  mgs: Message,
  table: tables,
  args: string[]
) {
  // Check Permission
  // Da Fare
  // Get Mention
  const mention = mgs.mentions.users.first();
  // Check Sintax
  if (!Number(args[2]) || !mention) return errorMGS(mgs, "Sintassi invalida");
  // Get User DB
  const user = (await getUserDB(mention.id, table))?.get();
  // Check User DB
  if (user?.saldo == undefined) return errorMGS(mgs, "Utente non registrato sul DB");
  // Make sum
  const tot = user.saldo + Number(args[2]);
  // Add Money
  await table.user_table
    .update({ saldo: tot }, { where: { userId: mention.id } })
    .then(() => {
      // New Embed
      const embed = new MessageEmbed()
        .setAuthor(author_name)
        .setColor(economy_color)
        .setTitle(`Transazione Eseguita`)
        .setDescription(
          `Saldo ${mention.username}: ${user.saldo} ----> ${tot}`
        );
      // Send embed
      mgs.channel.send(embed);
    })
    .catch(() => {
        //
        errorMGS(mgs, "Internal Error: 500");
    });
}
