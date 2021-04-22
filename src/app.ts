// ===================================================
// Economy 3.0
// ===================================================

// Import Discord.js
import * as Discord from "discord.js";

// import .env
import { env_var } from "./env";

// Import Handlers
import commandHandler from "./handlers/command_handler"

// Error Handler
try { 

    // Create Client
    const client = new Discord.Client();

    // .env
    const env =  env_var();    

    // Bot on
    client.on("ready", () => console.log(`${client.user?.username} is ready!`));

    // Command Handler
    client.on("message", commandHandler);

    // Client Login
    client.login(env.token);

} catch (err){  // Catch Error

    // Console Log Error
    console.error(err);

}


