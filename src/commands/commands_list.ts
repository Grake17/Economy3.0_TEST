/* eslint-disable camelcase */
// ===================================================
// Exports Command
// ===================================================

// Import Sequelize
import { ModelCtor, Model } from 'sequelize/types'; 
// Import Discord.js
import { Message, MessageEmbed } from 'discord.js';
// Import Models
import Crew_Model from "../db/models/Crews/crew_attribute";
// Command Test
import pong from './command/pong' // Import Pong
import tables from '../db/table_interface';

// Create Commands List
const command_list: Record<string, ((mgs : Message, table: tables) => Promise<void>) | undefined> = {
  pong: pong
}

// Exports
export default command_list
