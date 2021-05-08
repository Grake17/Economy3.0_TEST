// ===================================================
// Command GiveAway
// ===================================================

// Import Discord Type
import { Message, MessageEmbed } from "discord.js";
// Import Interface
import tables from "../../db/table_interface";
// Import Error MGS
import errorMGS from "../../utils/errorMGS";
// Import GetUser Function
import getUserDB from "../../utils/User_Utility/getUserDB";
// Import config
import { roles, economy_color, author_name } from "../../config.json";
// Import Sequelize
import imp_seq from "../../db/sequelize";
// Import GetDate
import getDate from "../../utils/getDate";

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
  // Check If User Have alre
  const user_test = await table.temp_roles_table.findOne({
    where: { UserID: mgs.author.id, RoleID: roles.role_giveaway },
  });
  if (user_test) return errorMGS(mgs, "Utente già assegnato al ruolo");
  // Import Sequelize
  const sequelize = await imp_seq();
  // Check Sequelize
  if (!sequelize) return errorMGS(mgs, "Error Sequelize ");
  // Get Date noew and Date Lease
  const date = await getDate(1);
  // Transaction
  const t = await sequelize.transaction();
  // Make Payment
  await table.user_table.update(
    { saldo: user.saldo - 50000 },
    { where: { userId: mgs.author.id }, transaction: t }
  );
  // Assign Role
  await table.temp_roles_table.create(
    {
      UserID: mgs.author.id,
      RoleID: roles.role_giveaway,
      TimeAdd: date[0],
      TimeLease: date[1],
    },
    { transaction: t }
  );
  t.commit().then(async () => {
    // Add Roles To Users
    await mgs.guild?.members.cache.get(mgs.author.id)?.roles.add(roles.role_giveaway);
    // Send Embed
    const embed = new MessageEmbed()
      .setAuthor(author_name)
      .setColor(economy_color)
      .setTitle(`Iscritto al Giveaway`)
      .setDescription(
        `${mgs.author.username} sei stato iscritto con successo all'estrazione!`
      );
    // Send Message
    mgs.channel.send(embed);
  }).catch((err) => {
    // Error MGS
    errorMGS(mgs, "Internal Error: 500");
  });
}