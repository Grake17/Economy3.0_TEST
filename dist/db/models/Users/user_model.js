"use strict";
// ===================================================
// User Model
// ===================================================
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Sequelize
var sequelize_1 = __importDefault(require("sequelize"));
// Models
var users = {
    userId: {
        type: sequelize_1.default.STRING,
        unique: true,
        primaryKey: true
    },
    gamerTag: {
        type: sequelize_1.default.STRING,
        defaultValue: null,
        unique: true
    },
    guest: {
        type: sequelize_1.default.BOOLEAN,
        defaultValue: false
    },
    ciurmaId: {
        type: sequelize_1.default.STRING,
        defaultValue: null
    },
    saldo: {
        type: sequelize_1.default.INTEGER,
        defaultValue: 0
    },
    saldoDepositatoTot: {
        type: sequelize_1.default.INTEGER,
        defaultValue: 0
    },
    saldoDepositatoPar: {
        type: sequelize_1.default.INTEGER,
        defaultValue: 0
    },
    guadagnoMensile: {
        type: sequelize_1.default.INTEGER,
        defaultValue: 0
    },
    pirataLeggendario: {
        type: sequelize_1.default.BOOLEAN,
        defaultValue: false
    },
    guardianoAthena: {
        type: sequelize_1.default.BOOLEAN,
        defaultValue: false
    },
    dataEntrataCiurma: {
        type: sequelize_1.default.DATE,
        defaultValue: null
    },
    dataEntrataVoc: {
        type: sequelize_1.default.STRING,
        defaultValue: null
    },
    bannato: {
        type: sequelize_1.default.BOOLEAN,
        defaultValue: false
    },
    discordlevel: {
        type: sequelize_1.default.INTEGER,
        defaultValue: 0
    },
    gamelevel: {
        type: sequelize_1.default.INTEGER,
        defaultValue: 0
    },
    chiavi: {
        type: sequelize_1.default.INTEGER,
        defaultValue: 0
    },
    dateGuest: {
        type: sequelize_1.default.DATE,
        defaultValue: null
    },
    guestTime: {
        type: sequelize_1.default.INTEGER,
        defaultValue: 0
    }
};
// Models
var users_model = { name: 'crews', model: users };
// Export Model
exports.default = users_model;
