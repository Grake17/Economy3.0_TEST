"use strict";
// ===================================================
// Model Cases
// ===================================================
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Sequelize
var sequelize_1 = __importDefault(require("sequelize"));
// Cases Model
var cases = {
    caseid: {
        type: sequelize_1.default.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    caseauthorid: {
        type: sequelize_1.default.STRING,
        defaultValue: null,
    },
    messagecontent: {
        type: sequelize_1.default.STRING,
        defaultValue: null,
    },
    messageurl: {
        type: sequelize_1.default.STRING,
        defaultValue: null,
    },
    messageid: {
        type: sequelize_1.default.STRING,
        defaultValue: null,
    },
    taggedusers: {
        type: sequelize_1.default.STRING,
        defaultValue: null,
    },
    state: {
        type: sequelize_1.default.STRING,
        defaultValue: "PENDING",
    },
};
// Create Model
var cases_model = { name: "cases", model: cases };
// Export Model
exports.default = cases_model;
