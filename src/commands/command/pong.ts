// ===================================================
// Command Test
// ===================================================

// Import Discord.js
import { Message, MessageEmbed } from 'discord.js';
// Import Tables Interface
import tables from '../../db/table_interface';
import addTempRole from '../../utils/temp_role';
import { roles } from "../../config.json";

// Export Module
async function pong (mgs: Message, table: tables) {
  addTempRole(mgs.author.id, roles.role_giveaway,  730, table).then((result) => mgs.channel.send(result + 1)).catch((result_error) => mgs.channel.send(result_error));
  console.log("ciao")
}
// Export Command
export default pong;
