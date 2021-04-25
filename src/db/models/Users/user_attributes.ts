// ===================================================
// User Attribute
// ===================================================

// Import Sequelize
import * as Sequelize from "sequelize";

// User Interface
export default interface User {
    userId: {
        type: Sequelize.StringDataType,
        unique: true,
        primaryKey: true
    },
    gamerTag: {
        type: Sequelize.StringDataType,
        defaultValue: null,
        unique: true
    },
    guest: {
        type: Boolean,
        defaultValue: false,
    },
    ciurmaId: {
        type: Sequelize.StringDataType,
        defaultValue: null
    },
    saldo: {
        type: Sequelize.IntegerDataType,
        defaultValue: 0
    },
    saldoDepositatoTot: {
        type: Sequelize.IntegerDataType
        defaultValue: 0
    },
    saldoDepositatoPar: {
        type: Sequelize.IntegerDataType
        defaultValue: 0
    },
    guadagnoMensile: {
        type: Sequelize.IntegerDataType
        defaultValue: 0
    },
    pirataLeggendario: {
        type: Boolean,
        defaultValue: false
    },
    guardianoAthena: {
        type: Boolean,
        defaultValue: false
    },
    dataEntrataCiurma: {
        type: Sequelize.DateDataType,
        defaultValue: null,
    },
    dataEntrataVoc: {
        type: Sequelize.StringDataType,
        defaultValue: null,
    },
    bannato: {
        type: Boolean,
        defaultValue: false
    },
    discordlevel: {
        type: Sequelize.IntegerDataType
        defaultValue: 0,
    },
    gamelevel: {
        type: Sequelize.IntegerDataType
        defaultValue: 0,
    },
    chiavi: {
        type: Sequelize.IntegerDataType
        defaultValue: 0
    },
    dateGuest: {
        type: Sequelize.DateDataType,
        defaultValue: null
    },
    guestTime: {
        type: Sequelize.IntegerDataType
        defaultValue: 0
    }
}