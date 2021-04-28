// ===================================================
// Pay User Function
// ===================================================

// Import Table Interface
import tables from "../../db/table_interface";
import getUserDB from "./getUserDB";

// Export Function
export default async function userPay(
  id: string,
  table: tables,
  payment: number
): Promise<number | undefined> {
  // Try Catch for Error
  try {
    // Get Payer Data
    const payer_data = (await getUserDB(id, table))?.get();
    // Test Value
    if (!payer_data?.saldo || payer_data.saldo < payment)
      return undefined;
    // Make Transition
    await table.user_table.update(
      { saldo: payer_data.saldo - payment },
      { where: { userId: id } }
    );
    // Return !undefined if command go well
    return payer_data.saldo;
    //Catch Error
  } catch (err) {
    // Return Err
    return err;
  }
}
