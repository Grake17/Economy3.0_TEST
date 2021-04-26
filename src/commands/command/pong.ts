// ===================================================
// Command Test
// ===================================================

// Import Discord.js
import { Message, MessageEmbed } from 'discord.js';
// Import Tables Interface
import tables from '../../db/table_interface';

// Export Module
async function pong (mgs: Message, table: tables) {
  // Exec Query & Get Info
  const test = (await table.crew_table.findOne({where: { crewId: "734021779638714439"}}))?.get();
  // Check Null
  if(!test) return;
  // Funziona!
  console.log(test.name);
}
// Export Command
export default pong;
