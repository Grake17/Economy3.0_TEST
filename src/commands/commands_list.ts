// ===================================================
// Exports Command
// ===================================================

// Import Discord.js
import { Message } from 'discord.js';
// Import Table Interface
import tables from '../db/table_interface';
// Command Test
import pong from './command/pong'; // Import Pong
import assistenza from './economy_command/assistenza'; // Import Assistenza
import deposita from './economy_command/deposita'; // Import Deposita
import giveaway from './economy_command/giveaway'; // Import Giveaway
import member_leaderbord from './economy_command/member_leaderbord'; // Import LeaderBord
import pay from './economy_command/pay'; // Import Pay
import portafoglio from './economy_command/portafoglio'; // Import Portafoglio
import registra from './economy_command/registra'; // Import Registra
import registragt from './economy_command/registragt'; // Import RegistraGT
import addMoney from './admin_command/addMoney'; // Import AddMoney 


// Create Commands List
const command_list: Record<string, ((mgs : Message, table: tables, args: string[]) => Promise<void>) | undefined> = {
  pong: pong,
  portafoglio: portafoglio,
  registragt: registragt,
  pay: pay, 
  classificamembri: member_leaderbord,
  registra: registra,
  deposita: deposita,
  giveaway: giveaway,
  assistenza: assistenza,
  add: addMoney
}

// Exports
export default command_list
