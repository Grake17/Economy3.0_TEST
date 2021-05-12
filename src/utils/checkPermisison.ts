// ===================================================
// Check Permission Utils
// ===================================================

// Import ID
import { admins } from "../config.json";

// Export Function
export default function checkPermission(id: string): boolean {
    // Check Permission
    return (JSON.stringify(admins)).includes(id);
}