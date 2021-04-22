// ===================================================
// Env Script
// ===================================================

// Import DotEnv
require("dotenv").config();

// Define Variables
const variables = [
    "TOKEN",
    "PREFIX",    
];

// Export Function
export function env_var() {
    // Verify null Env
    const outvar = variables.filter(
        // Check if process is !
        (env_data) => !process.env[env_data]
    );
    // Check Lenght
    if (outvar.length) {
        // Error for missing Env Variables
        throw new Error(
            `Missing Env Variables: ${outvar.join(
              ", "
            )}`
        );
    }
    // Return Env if success
    return {
        token: process.env.TOKEN,           // Process Token Bot
        prefix: process.env.PREFIX,         // Process Prefix
    }
}