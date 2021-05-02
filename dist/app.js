"use strict";
// ===================================================
// Economy 3.0
// ===================================================
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Discord.js
var discord_js_1 = require("discord.js");
// Import DB
var db_1 = __importDefault(require("./db/db"));
// import .env
var env_1 = require("./env");
// Import Handlers
var command_handler_1 = __importDefault(require("./handlers/command_handler"));
var guildmember_1 = __importDefault(require("./handlers/guildmember"));
// Error Handler
try {
    // Create Client
    var client_1 = new discord_js_1.Client();
    // .env
    var env_2 = env_1.env_var();
    // Load DB Return Promise for check Error
    db_1.default()
        .then(function (table) {
        // Sync Tables
        table.crew_table.sync();
        table.user_table.sync();
        // Bot on
        client_1.on('ready', function () { var _a; return console.log(((_a = client_1.user) === null || _a === void 0 ? void 0 : _a.username) + " is ready!"); });
        // Command New User
        client_1.on('guildMemberAdd', function (user) { return guildmember_1.default(user, table); });
        // Command Handler
        client_1.on('message', function (message) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, command_handler_1.default(message, env_2, table)];
        }); }); });
        // Client Login
        client_1.login(env_2.token);
    }).catch(function (err) { return console.error(err); });
}
catch (err) { // Catch Error
    // Console Log Error
    console.error(err);
}
