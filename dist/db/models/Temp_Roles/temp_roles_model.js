"use strict";
// ===================================================
// Temp Roles Model
// ===================================================
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Sequelize
var sequelize_1 = __importDefault(require("sequelize"));
// Attributes
var temp_roles = {
    id: {
        type: sequelize_1.default.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
    },
    UserID: {
        type: sequelize_1.default.STRING,
    },
    RoleID: {
        type: sequelize_1.default.STRING,
    },
    TimeAdd: {
        type: sequelize_1.default.DATE,
    },
    TimeLease: {
        type: sequelize_1.default.DATE,
    },
};
// Model Temp_Roles
var temp_roles_model = { name: "temp_roles", model: temp_roles };
// Export Model
exports.default = temp_roles_model;
