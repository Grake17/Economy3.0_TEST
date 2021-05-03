// ===================================================
// Command GiveAway
// ===================================================

// Import Discord Type
import { Message, MessageEmbed } from "discord.js";
// Import Interface
import tables from "../../db/table_interface";
// Import Error MGS
import errorMGS from "../../utility/errorMGS";
// Import GetUser Function
import getUserDB from "../../utility/User_Utility/getUserDB";
// Import config
import { roles, economy_color, author_name } from "../../config.json";
// Import Temp Role
import addTempRole from "../../utility/temp_role";

// Export Function
export default async function giveaway(mgs: Message, table: tables) {
  // Get User
  const user = (await getUserDB(mgs.author.id, table))?.get();
  // Check User
  if (!user || user.saldo == undefined)
    return errorMGS(
      mgs,
      `L'utente non è sul DB\nUsa il comando **>e registra** per registrarti`
    );
  // Check Credit
  if (user.saldo < 50000)
    return errorMGS(
      mgs,
      `Non hai abbastanza talleri\n**Saldo corrente**: ${user.saldo}`
    );
  // Check Roles
  if (
    mgs.guild?.members.cache
      .get(mgs.author.id)
      ?.roles.cache.get(roles.role_giveaway)
  )
    return errorMGS(mgs, "Sei già iscritto al giveaway!");
  // Make Payment
  table.user_table
    .update({ saldo: user.saldo - 50000 }, { where: { userId: mgs.author.id } })
    .then(() => {
      //   // Send Embed
      //   const embed = new MessageEmbed()
      //     .setAuthor(author_name)
      //     .setColor(economy_color)
      //     .setTitle(`Iscritto al Giveaway`)
      //     .setDescription(
      //       `${mgs.author.username} sei stato iscritto con successo all'estrazione!`
      //     );
      //   // Send Message
      //   mgs.channel.send(embed);
      addTempRole(mgs.author.id, roles.role_giveaway, "730", table);
    })
    .catch(() => {
      // Error MGS
      errorMGS(mgs, "500");
    });
}
