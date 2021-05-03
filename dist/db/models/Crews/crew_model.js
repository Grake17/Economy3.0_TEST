"use strict";
// ===================================================
// Crew Model
// ===================================================
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Sequelize
var sequelize_1 = __importDefault(require("sequelize"));
// Attributes
var crews = {
    crewId: {
        type: sequelize_1.default.STRING,
        unique: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.default.STRING,
        unique: true,
    },
    creatorId: {
        type: sequelize_1.default.STRING,
        defaultValue: null,
    },
    stanzaPrincipale: {
        type: sequelize_1.default.STRING,
        defaultValue: null,
    },
    logo: {
        type: sequelize_1.default.STRING,
        defaultValue: null,
    },
    saldo: {
        type: sequelize_1.default.INTEGER,
        defaultValue: 0,
    },
    saldoMensile: {
        type: sequelize_1.default.INTEGER,
        defaultValue: 0,
    },
    verificata: {
        type: sequelize_1.default.BOOLEAN,
        defaultValue: false,
    },
    bannata: {
        type: sequelize_1.default.BOOLEAN,
        defaultValue: false,
    },
    livellociurma: {
        type: sequelize_1.default.INTEGER,
        defaultValue: 1,
    },
    membrimin: {
        type: sequelize_1.default.INTEGER,
        defaultValue: 6,
    },
    membrimax: {
        type: sequelize_1.default.INTEGER,
        defaultValue: 10,
    },
};
// Model Crew
var crews_model = { name: "crews", model: crews };
// Export Model
exports.default = crews_model;
