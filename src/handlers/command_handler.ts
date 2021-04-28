// ===================================================
// Command Handler
// ===================================================

// Import
import { Message } from "discord.js";
// Import Config File
import * as config from "../config.json";
// Import Commands
import command_list from "../commands/commands_list";
// Import Sequelize
import { ModelCtor, Model } from "sequelize/types";
// Import Interface Table
import tables from "../db/table_interface";
import errorMGS from "../utility/errorMGS";

// Exports Module Command
const commandHandler = async function (mgs: Message, env, table: tables) {
  // Try Catch For Error
  try {
    // Check Channel
    if (mgs.channel.id !== config.channel_mail) return;

    // Extract command
    const args = mgs.content.split(" ");
        
    // Remove prefix
    let command = args[0]

    // Test Prefix
    if (!command?.startsWith(env.prefix)) return;

    // Remove Prefix
    command = command?.substring(1);
    
    // Log Command for test
    console.log(args);

    // Exec Command
    command_list[args[1]]?.(mgs, table, args);
  } catch (err) {
    // Error Function
    errorMGS(mgs, err);
  }
};

// Exports Handler
export default commandHandler;
