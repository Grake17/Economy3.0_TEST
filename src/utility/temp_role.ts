// ===================================================
// Temp Role Function
// ===================================================

// Import Moment
import moment from "moment";
// Import Tables
import tables from "../db/table_interface";
// Import MGS Error
import errorMGS from "./errorMGS";

// Export Function
export default async function addTempRole(
  user_id: string,
  role_id: string,
  time: string,
  table: tables
): Promise<string> {
  // Promise for error
  return new Promise(async (resolve, rejects) => {
    // Check DB
    const user_test = await table.temp_roles_table.findOne({
      where: { UserID: user_id, RoleID: role_id },
    });
    if (user_test) return rejects("Utente già assegnato al ruolo");
    // Format Date
    const date_now = moment().utc(true).toDate();
    const date_lease = moment()
      .utc(true)
      .add(1, `minutes`)
      .toDate();
    await table.temp_roles_table.create({
      UserID: user_id,
      RoleID: role_id,
      TimeAdd: date_now,
      TimeLease: date_lease,
    }).then(async () => {
        // Resolve Promise
        return resolve("Ruolo aggiunto con successo");
    }).catch((err) => {
        console.log(err)
        return rejects("Error during createDB");
    });
    
  });
}
