// ===================================================
// Command Pay
// ===================================================

// Import Discord
import { Message, MessageEmbed } from "discord.js";
// import Table Interface
import tables from "../../db/table_interface";
// Message Invalid Function
import invalidCommand from "../../utility/invalideCMD";
// Import Config
import { author_name, economy_color } from "../../config.json";
// Import User Paid
import userPaid from "../../utility/User_Utility/userPaid";
// import User Paid
import userPay from "../../utility/User_Utility/userPay";
// Import Sequelize Instance
import imp_seq from "../../db/sequelize";
// Error Message
import errorMGS from "../../utility/errorMGS";

// Export Function
export default async function pay(mgs: Message, table: tables, args: string[]) {
  // User Mentions
  const list_mention = mgs.mentions.members?.first();
  // Role Menstion
  const list_role = mgs.mentions.roles.first();
  // Check If Some Value Is Not Valid
  if (list_mention && !isNaN(Number(args[2])) && Number(args[2]) > 0)
    // If Mention User
    return payUser(list_mention.id, mgs.author.id, table, Number(args[2]), mgs);
  // Check If Some Value Is Not Valid
  else if (list_role && !isNaN(Number(args[2])) && Number(args[2]) > 0)
    // If Mention Crew
    return payCrew(list_role.id, mgs.author.id, table, Number(args[2]), mgs);
  // Invalid Command
  else return invalidCommand(mgs);
}

// Function Tag User
async function payUser(
  paid_id: string,
  payer_id: string,
  table: tables,
  payment: number,
  mgs: Message
) {
  // Test Transaction
  const sequelize = await imp_seq();
  // Test if undefind
  if (!sequelize) return errorMGS(mgs, "Sequelize load");
  // Try Transaction
  try {
    const t = await sequelize.transaction();
    // Function Paid
    const paid_result = await userPaid(paid_id, table, payment, t);
    // Function Pay
    const pay_result = await userPay(payer_id, table, payment, t);
    // Test Result
    t.commit().then(() => {
      // Check if some value null
      if (!paid_result || !pay_result) return invalidCommand(mgs);
      // Embed For Response
      const embed = new MessageEmbed()
        .setAuthor(author_name)
        .setDescription(`Transazione Eseguita!`)
        .addField(
          `Pagante: ${mgs.guild?.members.cache.get(payer_id)?.user.username}`,
          `${pay_result} ----> ${pay_result - payment}`
        )
        .addField(
          `Ricevente: ${mgs.guild?.members.cache.get(paid_id)?.user.username}`,
          `${paid_result} -----> ${paid_result + payment}`
        )
        .setColor(economy_color);
      // Send Message
      mgs.channel.send(embed);
    }).catch(async () => await t.rollback());
    
  } catch (e) {
    console.log(e);
  }

  // // Function Paid
  // const paid_result = await userPaid(paid_id, table, payment);
  // // Function Pay
  // const pay_result = await userPay(payer_id, table, payment);
  // console.log(pay_result, paid_result);
}

// Function Tag Crew
async function payCrew(
  paid_id: string,
  payer_id: string,
  table: tables,
  payment: number,
  mgs: Message
) {}
