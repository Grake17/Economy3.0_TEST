// ===================================================
// Command Portafoglio
// ===================================================

// Import Discord
import { Message, MessageEmbed } from "discord.js";
// Import Tables Interface
import tables from "../../db/table_interface";
// Import Utilis
import getUserDB from "../../utility/getUserDB";

// Portafoglio Function
async function portafoglio(mgs: Message, table: tables) {
    // Get User ID
    const user = mgs.author;
    // Get Money From DB
    const result = await getUserDB(user.id, table);
    // Extract Data
    const data_user = result?.get();
    const embed = new MessageEmbed()
        .setTitle(`Portafoglio ${user.username}`)
        .setDescription(`Saldo: ${data_user?.saldo}`)
      
}