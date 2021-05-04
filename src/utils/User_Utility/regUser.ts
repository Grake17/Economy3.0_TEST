// ===================================================
// Register User Function
// ===================================================

// Import Table Interface
import tables from "../../db/table_interface";

// Export Function
export default async function regUser(id: string, table: tables): Promise<string | undefined> {
  // Test USer in DB
  const user = await table.user_table.findOne({ where: { userId: id } });
  // Create User If not exist
  if (user != null) { return "Utente già presente sul DB" }; 
  // Return User Data or Error
  table.user_table.create({ userId: id }).then(() => { return undefined }).catch((err) => {
    return "Errore durante la crezione dell'utente";
  });
  return;
}
