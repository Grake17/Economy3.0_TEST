// ===================================================
// DB Main
// ===================================================

// Import Sequelize
import Sequelize, { ModelCtor } from 'sequelize'

// Import ENV
import { env_var } from '../env'

// Import Module
import crews from './models/Crews/crew_model'
import users from './models/Users/user_model'

// Import Table Interface
import Table from "./table_interface"

// Function for load DB
const load_db = async function (): Promise<Table> {
  // Return Promise
  return new Promise((resolve, rejects) => {
    // ENV
    const env = env_var()

    // Check Undefind
    if (!env.database || !env.user_db || !env.password_db || !env.host) return

    // Define Sequelize & Pass Credential
    const sequelize = new Sequelize.Sequelize(env.database, env.user_db, env.password_db, {
      host: env.host,
      dialect: 'postgres',
      logging: false,
      define: {
        timestamps: false
      }
    })

    // Connect to DB
    sequelize.authenticate()
      .then(() => {
        // Console Log on Connection
        console.log('[DB] Connected to database');
        // Define Model
        const crew_table = sequelize.define(crews.name, crews.model)
        const user_table = sequelize.define(users.name,users.model)
        // Export Table
        const table: Table = {
          crew_table: crew_table,
          user_table: user_table
        }
        // Resolve Sequelize        
        resolve(table);       
      })
      // Catch Error
      .catch((err: Error) => rejects(err))
  })
}

// Export Function
export default load_db
