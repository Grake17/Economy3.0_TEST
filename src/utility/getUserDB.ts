// ===================================================
// Get User Data from DB
// ===================================================

// Import Table
import tables from "../db/table_interface";
// Export Function
export default async function getUserDB(id: string, table: tables) {
    // Return Query
    return await table.user_table.findOne({ where: { userId: id } });
}