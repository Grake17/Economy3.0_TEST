// ===================================================
// Get User Data from DB
// ===================================================

// Import Sequelize Model
import { Model } from "sequelize/types";
// Import User Interface
import User from "../../db/models/Users/user_attributes";
// Import Table Interface
import tables from "../../db/table_interface";
// Import Utility
import regUser from "./regUser";

// Export Function
export default async function getUserDB(id: string, table: tables): Promise<Model<User, User> | null> {
  // // Test User Function
  // await regUser(id, table)
  // Return Query
  return await table.user_table.findOne({ where: { userId: id } });
  
}
