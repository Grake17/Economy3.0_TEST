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
var pay_1 = __importDefault(require("./economy_command/pay")); // Import Pay
var portafoglio_1 = __importDefault(require("./economy_command/portafoglio")); // Import Portafoglio
var registragt_1 = __importDefault(require("./economy_command/registragt")); // Import RegistraGT
// Create Commands List
var command_list = {
    pong: pong_1.default,
    portafoglio: portafoglio_1.default,
    registragt: registragt_1.default,
    pay: pay_1.default
};
// Exports
exports.default = command_list;
