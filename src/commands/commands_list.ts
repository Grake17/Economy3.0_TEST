// ===================================================
// Exports Command
// ===================================================

// Import Discord.js
import { Message, MessageEmbed } from 'discord.js';
// Import Table Interface
import tables from '../db/table_interface';
// Command Test
import pong from './command/pong'; // Import Pong
import pay from './economy_command/pay'; // Import Pay
import portafoglio from './economy_command/portafoglio'; // Import Portafoglio
import registragt from './economy_command/registragt'; // Import RegistraGT


// Create Commands List
const command_list: Record<string, ((mgs : Message, table: tables, args: string[]) => Promise<void>) | undefined> = {
  pong: pong,
  portafoglio: portafoglio,
  registragt: registragt,
  pay: pay
}

// Exports
export default command_list
