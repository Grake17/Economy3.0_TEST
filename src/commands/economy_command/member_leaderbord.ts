// ===================================================
// Command Member LeaderBord
// ===================================================

// Import Discord Type
import { Message, MessageEmbed } from "discord.js";
// Import Table Interface
import tables from "../../db/table_interface";
// Import Config
import { author_name, economy_color } from "../../config.json";

// Export Funcion
export default async function member_leaderbord(mgs: Message, table: tables) {
  // Take List
  const user_list = await table.user_table.findAll({
    order: [["saldoDepositatoTot", "DESC"]],
  });
  // New Embed
  const embed = new MessageEmbed()
    .setAuthor(author_name)
    .setTitle("Classifica Membri")
    .setColor(economy_color);
  // Chekc User List
  if (user_list.length == 0) {
    // Embed List Empy
    embed.setDescription("Non c'è nessuno nella classifica");
    // Send Message
    mgs.channel.send(embed);
  } else {
    // Get Message Author Data
    const user = (
      await table.user_table.findOne({ where: { userId: mgs.author.id } })
    )?.get();
    // Set Description
    if (user)
      embed.setDescription(
        `<@!${user.userId}> -----> ${user.saldoDepositatoTot}`
      );
    // Set List
    for (var x = 0; x < 10; x++) {
      // Get User Data
      let user_data = user_list[x].get();
      console.log(user_data);
      // Add Field
      if (user_data)
        embed.addField(
          `--------------------------`,
          `**${x + 1}:** <@!${user_data.userId}> ----> ${
            user_data.saldoDepositatoTot
          }`
        );
    }
    // Send Embed
    mgs.channel.send(embed);
  }
}
