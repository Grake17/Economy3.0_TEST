// ===================================================
// Cron Check Temp Roles
// ===================================================

// Import Discord
import { Client, Guild } from "discord.js";
// import Moment
import moment from "moment";
// Import DB Load
import db_load from "./db/db";
// Import Cron JOB
import { CronJob } from "cron";
// Import Type
import Temp_Roles from "./db/models/Temp_Roles/temp_roles_attributes";
// Import table Interface
import tables from "./db/table_interface";
// Import Env
import { env_var } from "./env";
// Import Config
import { server_id } from "./config.json";

// Main Script
const job = new CronJob(" */1 * * * * ", async () => {
  // GetDB
  const db = await db_load();
  // Sync Table
  db.temp_roles_table.sync();
  // Get Value
  const datas = await db.temp_roles_table.findAll();
  // Check lenght
  if (datas.length == 0) return console.log("Nessun Ruolo temporaneo");
  // Make Client Connection
  createClient()
    .then(async (client) => {
      // Event Ready
      client.on("ready", () => {
        const guild = client.guilds.cache.get("468773903041560587");
        // Check Guild
        if (!guild) return;
        // Work on data
        datas.map((data) => {
          const date = data.get();
          checkTime(date, db, guild);
        });
      });
    })
    .catch((err) => {
      console.log(err, "Client Connection Error");
    });

  // Close Connection
});

// Function Check Time
async function checkTime(date: Temp_Roles, db: tables, guild: Guild) {
  // Get time Now
  const date_now = moment().utc(true).toDate();
  console.log(date_now < date.TimeLease, date_now, date.TimeLease);
  // Check Time
  if (date_now < date.TimeLease)
    return console.log(`Tempo non ancora scaduto per ${date.RoleID}`);
  console.log(guild.members.cache.get(date.UserID));
  // Remove Role
  const roles = guild.members.cache.get(date.UserID)?.roles.remove(date.RoleID);
  //   const user = guild.members.cache.map((user) =>
  //     console.log(user.user.username)
  //   );
  //   //   console.log(user)
  //   //   console.log(user?.roles)
  //   const roles = guild.roles.cache.delete(date.RoleID);
  // Check if role remove
  if (!roles) return console.log("Ruolo non rimosso correttamente");
  // Remove Row
  db.temp_roles_table
    .destroy({ where: { UserID: date.RoleID, RoleID: date.RoleID } })
    .then(() => {
      console.log("Romove from DB Success");
    })
    .catch((err) => {
      console.log(err);
    });
}

// Create Client Discord
async function createClient(): Promise<Client> {
  return new Promise(async (resolve, rejects) => {
    // New Client
    const client = new Client();
    // Get Env Var
    const env = env_var();
    // Client Login
    client
      .login(env.token)
      .then(() => {
        resolve(client);
      })
      .catch((err) => {
        console.log(err);
        rejects();
      });
  });
}

// Start Job
job.start();
console.log("Job Start");
