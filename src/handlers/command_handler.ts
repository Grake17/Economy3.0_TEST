// ===================================================
// Command Handler
// ===================================================

// Import 
import { Message } from "discord.js";
// Import Config File
import * as config from "../config.json";
// Import Commands
import command_list from "../commands/commands_list"

// Exports Module Command
async function commandHandler(mgs: Message) {

    // Check Channel
    if(mgs.channel.id !== config.channel_mail) return;

    // Extract command
    const args = mgs.content.split(" ");
    // Remove prefix
    var command: any = args.shift();
    
    // Test Prefix
    if(command?.charAt(0) !== process.env.PREFIX) return;
    // Remove Prefix
    command = command?.substring(1)
    // Exec Command
    command_list[command](mgs);
    
    

}

export default commandHandler;