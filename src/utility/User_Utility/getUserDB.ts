// ===================================================
// Get User Data from DB
// ===================================================

// Import Table
import tables from "../../db/table_interface";
// Import Utility
import regUser from "./regUser";

// Export Function
export default async function getUserDB(id: string, table: tables) {
  // Test User Function
  await regUser(id, table);
  // Return Query
  return await table.user_table.findOne({ where: { userId: id } });
}
