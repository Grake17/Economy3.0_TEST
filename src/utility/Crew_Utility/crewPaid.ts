// ===================================================
// Crew Paid Function
// ===================================================

// Import Table Interface
import tables from "../../db/table_interface";
// Get Crew Function
import getCrew from "./getCrew";

// Export Function
export default async function crewPaid(id:string, table: tables, payment: number): Promise<number | undefined> {
    // Try Catch for Error
    try {
        // Get Crew Data
        const paid_data = (await getCrew(id, table))?.get();
        // Test Value
        if(!paid_data?.saldo) return paid_data?.saldo;
        // Make Transition
        return paid_data.saldo;
    } catch(err) {
        console.log(err)
    }
}