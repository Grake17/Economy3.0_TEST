// ===================================================
// User Paid Function
// ===================================================

// Import Transaction Interface
import { Transaction } from "sequelize/types";
// Import Table Interface
import tables from "../../db/table_interface";
// Import Get USer from DB
import getUserDB from "./getUserDB";

// Export Function
export default async function payUser(
  id: string,
  table: tables,
  payment: number,
  transaction: Transaction
) {
  // Try Catch for Error
  //try {
    // Get paidr Data
    const paid_data = (await getUserDB(id, table))?.get();
    console.log(paid_data?.saldo == undefined)
    // Test Value
    if (paid_data?.saldo == undefined) return paid_data?.saldo;
    // Make transition
    await table.user_table.update(
      { saldo: paid_data.saldo + payment },
      { where: { userId: id }, transaction: transaction}
    );    
    // Return !undefined if command go well
    return paid_data.saldo;
    // Catch Error
  // } catch (err) {
  //   // Return Err
  //   return err;
  // }
}
