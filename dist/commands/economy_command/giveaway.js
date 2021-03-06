"use strict";
// ===================================================
// Command GiveAway
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
// Import Discord Type
var discord_js_1 = require("discord.js");
// Import Error MGS
var errorMGS_1 = __importDefault(require("../../utils/errorMGS"));
// Import GetUser Function
var getUserDB_1 = __importDefault(require("../../utils/User_Utility/getUserDB"));
// Import config
var config_json_1 = require("../../config.json");
// Import Sequelize
var sequelize_1 = __importDefault(require("../../db/sequelize"));
// Import GetDate
var getDate_1 = __importDefault(require("../../utils/getDate"));
// Export Function
function giveaway(mgs, table) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var user, user_test, sequelize, date, t;
        var _this = this;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, getUserDB_1.default(mgs.author.id, table)];
                case 1:
                    user = (_a = (_d.sent())) === null || _a === void 0 ? void 0 : _a.get();
                    // Check User
                    if (!user || user.saldo == undefined)
                        return [2 /*return*/, errorMGS_1.default(mgs, "L'utente non \u00E8 sul DB\nUsa il comando **>e registra** per registrarti")];
                    // Check Credit
                    if (user.saldo < 50000)
                        return [2 /*return*/, errorMGS_1.default(mgs, "Non hai abbastanza talleri\n**Saldo corrente**: " + user.saldo)];
                    // Check Roles
                    if ((_c = (_b = mgs.guild) === null || _b === void 0 ? void 0 : _b.members.cache.get(mgs.author.id)) === null || _c === void 0 ? void 0 : _c.roles.cache.get(config_json_1.roles.role_giveaway))
                        return [2 /*return*/, errorMGS_1.default(mgs, "Sei gi?? iscritto al giveaway!")];
                    return [4 /*yield*/, table.temp_roles_table.findOne({
                            where: { UserID: mgs.author.id, RoleID: config_json_1.roles.role_giveaway },
                        })];
                case 2:
                    user_test = _d.sent();
                    if (user_test)
                        return [2 /*return*/, errorMGS_1.default(mgs, "Utente gi?? assegnato al ruolo")];
                    return [4 /*yield*/, sequelize_1.default()];
                case 3:
                    sequelize = _d.sent();
                    // Check Sequelize
                    if (!sequelize)
                        return [2 /*return*/, errorMGS_1.default(mgs, "Error Sequelize ")];
                    return [4 /*yield*/, getDate_1.default(1)];
                case 4:
                    date = _d.sent();
                    return [4 /*yield*/, sequelize.transaction()];
                case 5:
                    t = _d.sent();
                    // Make Payment
                    return [4 /*yield*/, table.user_table.update({ saldo: user.saldo - 50000 }, { where: { userId: mgs.author.id }, transaction: t })];
                case 6:
                    // Make Payment
                    _d.sent();
                    // Assign Role
                    return [4 /*yield*/, table.temp_roles_table.create({
                            UserID: mgs.author.id,
                            RoleID: config_json_1.roles.role_giveaway,
                            TimeAdd: date[0],
                            TimeLease: date[1],
                        }, { transaction: t })];
                case 7:
                    // Assign Role
                    _d.sent();
                    t.commit().then(function () { return __awaiter(_this, void 0, void 0, function () {
                        var embed;
                        var _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0: 
                                // Add Roles To Users
                                return [4 /*yield*/, ((_b = (_a = mgs.guild) === null || _a === void 0 ? void 0 : _a.members.cache.get(mgs.author.id)) === null || _b === void 0 ? void 0 : _b.roles.add(config_json_1.roles.role_giveaway))];
                                case 1:
                                    // Add Roles To Users
                                    _c.sent();
                                    embed = new discord_js_1.MessageEmbed()
                                        .setAuthor(config_json_1.author_name)
                                        .setColor(config_json_1.economy_color)
                                        .setTitle("Iscritto al Giveaway")
                                        .setDescription(mgs.author.username + " sei stato iscritto con successo all'estrazione!");
                                    // Send Message
                                    mgs.channel.send(embed);
                                    return [2 /*return*/];
                            }
                        });
                    }); }).catch(function (err) {
                        // Error MGS
                        errorMGS_1.default(mgs, "Internal Error: 500");
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = giveaway;
