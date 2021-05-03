// ===================================================
// Economy 3.0
// ===================================================

// Import Discord.js
import { Client } from 'discord.js';

// Import DB
import load_db from "./db/db";

// import .env
import { env_var } from './env';

// Import Handlers
import commandHandler from './handlers/command_handler';
// Import gui
import guildAdd from './handlers/guildmember';

// Error Handler
try {
  // Create Client
  const client = new Client();

  // .env
  const env = env_var();

  // Load DB Return Promise for check Error
  load_db()
    .then(table => {

      // Sync Tables
      table.crew_table.sync();
      table.user_table.sync();
      table.temp_roles_table.sync();
      
      // Bot on
      client.on('ready', () => console.log(`${client.user?.username} is ready!`));

      // Command New User
      client.on('guildMemberAdd', user => guildAdd(user, table));

      // Command Handler
      client.on('message', async message => commandHandler(message, env, table));

      // Client Login
      client.login(env.token);

    }).catch(err => console.error(err));

} catch (err) { // Catch Error
  // Console Log Error
  console.error(err)
}
