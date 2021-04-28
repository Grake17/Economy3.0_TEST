// ===================================================
// Register User Function
// ===================================================

// Import Table Interface
import tables from "../../db/table_interface";

// Export Function
export default async function regUser(id: string, table: tables) {
  // Test USer in DB
  const user = await table.user_table.findOne({ where: { userId: id } });
  // Create User If not exist
  if (user == null) await table.user_table.create({ userId: id });
}
