// ===================================================
// Command Handler
// ===================================================

// Import
import { Message } from 'discord.js';
// Import Config File
import * as config from '../config.json';
// Import Commands
import command_list from '../commands/commands_list';
// Import Sequelize
import { ModelCtor, Model } from 'sequelize/types';
// Import Interface Table
import tables from '../db/table_interface';

// Exports Module Command
const commandHandler = async function (mgs: Message, env, table: tables) {
  // Check Channel
  if (mgs.channel.id !== config.channel_mail) return;

  // Extract command
  const args = mgs.content.split(' ');

  // Remove prefix
  let command = args.shift();

  // Check command if undefind
  if (!command) return;

  // Test Prefix
  if (command?.charAt(0) !== env.prefix) return;

  // Remove Prefix
  command = command?.substring(1);

  // Log Command for test
  console.log(command);

  // Exec Command
  command_list[command]?.(mgs, table);
}

// Exports Handler
export default commandHandler;
