"use strict";
// ===================================================
// Exports Command
// ===================================================
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Command Test
var pong_1 = __importDefault(require("./command/pong")); // Import Pong
var deposita_1 = __importDefault(require("./economy_command/deposita")); // Import Deposita
var giveaway_1 = __importDefault(require("./economy_command/giveaway")); // Import Giveaway
var member_leaderbord_1 = __importDefault(require("./economy_command/member_leaderbord")); // Import LeaderBord
var pay_1 = __importDefault(require("./economy_command/pay")); // Import Pay
var portafoglio_1 = __importDefault(require("./economy_command/portafoglio")); // Import Portafoglio
var registra_1 = __importDefault(require("./economy_command/registra")); // Import Registra
var registragt_1 = __importDefault(require("./economy_command/registragt")); // Import RegistraGT
// Create Commands List
var command_list = {
    pong: pong_1.default,
    portafoglio: portafoglio_1.default,
    registragt: registragt_1.default,
    pay: pay_1.default,
    classificamembri: member_leaderbord_1.default,
    registra: registra_1.default,
    deposita: deposita_1.default,
    giveaway: giveaway_1.default
};
// Exports
exports.default = command_list;
