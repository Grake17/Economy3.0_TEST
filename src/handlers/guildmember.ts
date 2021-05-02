// ===================================================
// New Guilder Member 
// ===================================================

// Import Discord Type
import { GuildMember } from "discord.js";
// Import RegUser
import regUser from "../utility/User_Utility/regUser";
// Import Table Interface
import tables from "../db/table_interface"

// Export Handler
export default async function guildAdd(user: GuildMember, table: tables) {
    const user_reg = await regUser(user.id, table);    
}