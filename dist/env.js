"use strict";
// ===================================================
// Env Script
// ===================================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.env_var = void 0;
// Import DotEnv
require('dotenv').config();
// Define Variables
var variables = [
    'TOKEN',
    'PREFIX',
    'DATABASE',
    "USERNAME",
    "PASSWORD",
    "HOST"
];
// Export Function
function env_var() {
    // Verify null Env
    var outvar = variables.filter(
    // Check if process is !
    function (env_data) { return !process.env[env_data]; });
    // Check Lenght
    if (outvar.length) {
        // Error for missing Env Variables
        throw new Error("Missing Env Variables: " + outvar.join(', '));
    }
    // Return Env if success
    return {
        token: process.env.TOKEN,
        prefix: process.env.PREFIX,
        database: process.env.DATABASE,
        user_db: process.env.USER_DB,
        password_db: process.env.PASSWORD,
        host: process.env.HOST // Process HOST DB
    };
}
exports.env_var = env_var;
