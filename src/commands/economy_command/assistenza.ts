// ===================================================
// Command Assitenza
// ===================================================

// Import Discord Type
import { Message, MessageEmbed } from "discord.js";
// Import Table Interface
import tables from "../../db/table_interface";
// import Error MGS
import errorMGS from "../../utils/errorMGS";

// Export Command
export default async function assistenza( mgs: Message, table: tables, args: string[] ) {
    // Check Command
    switch(args[2]) {
        case ("new"):
            assistenza_new(mgs, table, args);
            break;
        default:
            errorMGS(mgs, "Comando Invalido!");
    }
    
}

// New Function
async function assistenza_new(mgs:Message, table: tables, args: string[]) {
    // MGS Content
    const content = args
}