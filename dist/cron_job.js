"use strict";
// ===================================================
// Cron Check Temp Roles
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
// Import Discord
var discord_js_1 = require("discord.js");
// import Moment
var moment_1 = __importDefault(require("moment"));
// Import DB Load
var db_1 = __importDefault(require("./db/db"));
// Import Cron JOB
var cron_1 = require("cron");
// Import Env
var env_1 = require("./env");
// Main Script
var job = new cron_1.CronJob(" */1 * * * * ", function () { return __awaiter(void 0, void 0, void 0, function () {
    var db, datas;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1.default()];
            case 1:
                db = _a.sent();
                // Sync Table
                db.temp_roles_table.sync();
                return [4 /*yield*/, db.temp_roles_table.findAll()];
            case 2:
                datas = _a.sent();
                // Check lenght
                if (datas.length == 0)
                    return [2 /*return*/, console.log("Nessun Ruolo temporaneo")];
                // Make Client Connection
                createClient()
                    .then(function (client) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // Event Ready
                        client.on("ready", function () {
                            var guild = client.guilds.cache.get("468773903041560587");
                            // Check Guild
                            if (!guild)
                                return;
                            // Work on data
                            datas.map(function (data) {
                                var date = data.get();
                                checkTime(date, db, guild);
                            });
                        });
                        return [2 /*return*/];
                    });
                }); })
                    .catch(function (err) {
                    console.log(err, "Client Connection Error");
                });
                return [2 /*return*/];
        }
    });
}); });
// Function Check Time
function checkTime(date, db, guild) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var date_now, roles;
        return __generator(this, function (_b) {
            date_now = moment_1.default().utc(true).toDate();
            console.log(date_now < date.TimeLease, date_now, date.TimeLease);
            // Check Time
            if (date_now < date.TimeLease)
                return [2 /*return*/, console.log("Tempo non ancora scaduto per " + date.RoleID)];
            console.log(guild.members.cache.get(date.UserID));
            roles = (_a = guild.members.cache.get(date.UserID)) === null || _a === void 0 ? void 0 : _a.roles.remove(date.RoleID);
            //   const user = guild.members.cache.map((user) =>
            //     console.log(user.user.username)
            //   );
            //   //   console.log(user)
            //   //   console.log(user?.roles)
            //   const roles = guild.roles.cache.delete(date.RoleID);
            // Check if role remove
            if (!roles)
                return [2 /*return*/, console.log("Ruolo non rimosso correttamente")];
            // Remove Row
            db.temp_roles_table
                .destroy({ where: { UserID: date.RoleID, RoleID: date.RoleID } })
                .then(function () {
                console.log("Romove from DB Success");
            })
                .catch(function (err) {
                console.log(err);
            });
            return [2 /*return*/];
        });
    });
}
// Create Client Discord
function createClient() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, rejects) { return __awaiter(_this, void 0, void 0, function () {
                    var client, env;
                    return __generator(this, function (_a) {
                        client = new discord_js_1.Client();
                        env = env_1.env_var();
                        // Client Login
                        client
                            .login(env.token)
                            .then(function () {
                            resolve(client);
                        })
                            .catch(function (err) {
                            console.log(err);
                            rejects();
                        });
                        return [2 /*return*/];
                    });
                }); })];
        });
    });
}
// Start Job
job.start();
console.log("Job Start");
