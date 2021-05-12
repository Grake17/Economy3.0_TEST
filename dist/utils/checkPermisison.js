"use strict";
// ===================================================
// Check Permission Utils
// ===================================================
Object.defineProperty(exports, "__esModule", { value: true });
// Import ID
var config_json_1 = require("../config.json");
// Export Function
function checkPermission(id) {
    // Check Permission
    return (JSON.stringify(config_json_1.admins)).includes(id);
}
exports.default = checkPermission;
