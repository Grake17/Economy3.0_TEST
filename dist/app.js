"use strict";
// ===================================================
// Economy 3.0
// ===================================================
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Discord.js
var Discord = __importStar(require("discord.js"));
// import .env
var env_1 = require("./env");
// Import Handlers
var command_handler_1 = __importDefault(require("./handlers/command_handler"));
// Error Handler
try {
    // Create Client
    var client_1 = new Discord.Client();
    // .env
    var env = env_1.env_var();
    // Bot on
    client_1.on("ready", function () { var _a; return console.log(((_a = client_1.user) === null || _a === void 0 ? void 0 : _a.username) + " is ready!"); });
    // Command Handler
    client_1.on("message", command_handler_1.default);
    // Client Login
    client_1.login(env.token);
}
catch (err) { // Catch Error
    // Console Log Error
    console.error(err);
}
