// ===================================================
// Instance Sequelize Export
// ===================================================

// Import Sequelize
import Sequelize from "sequelize";
// Import ENV
import { env_var } from "../env";

// Export Function
export default async function imp_seq() {
  // ENV
  const env = env_var();

  // Check Undefind
  if (!env.database || !env.user_db || !env.password_db || !env.host) return;

  // Define Sequelize & Pass Credential
  const sequelize = new Sequelize.Sequelize(env.database, env.user_db, env.password_db, {
    host: env.host,
    dialect: "postgres",
    logging: false,
    define: {
      timestamps: false,
    },
  });
  // Return Sequelize
  return sequelize;
}
