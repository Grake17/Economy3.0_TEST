// ===================================================
// Get User Crew Function
// ===================================================

// Import Table Interface
import tables from "../../db/table_interface";

// Export Function
export default async function getCrew(id: string, table: tables) {
  // Return Query Result
  return await table.crew_table.findOne({ where: { crewId: id } });
}
