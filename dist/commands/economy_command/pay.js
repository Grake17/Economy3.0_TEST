"use strict";
// ===================================================
// Command Pay
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
// Message Invalid Function
var invalideCMD_1 = __importDefault(require("../../utils/invalideCMD"));
// Import Config
var config_json_1 = require("../../config.json");
// Import User Paid
var userPaid_1 = __importDefault(require("../../utils/User_Utility/userPaid"));
// import User Paid
var userPay_1 = __importDefault(require("../../utils/User_Utility/userPay"));
// Import Sequelize Instance
var sequelize_1 = __importDefault(require("../../db/sequelize"));
// Error Message
var errorMGS_1 = __importDefault(require("../../utils/errorMGS"));
// Export Function
function pay(mgs, table, args) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var list_mention, list_role;
        return __generator(this, function (_b) {
            list_mention = (_a = mgs.mentions.members) === null || _a === void 0 ? void 0 : _a.first();
            list_role = mgs.mentions.roles.first();
            // Check If Some Value Is Not Valid
            if (list_mention && !isNaN(Number(args[2])) && Number(args[2]) > 0 && list_mention.id !== mgs.author.id)
                // If Mention User
                return [2 /*return*/, payUser(list_mention.id, mgs.author.id, table, Number(args[2]), mgs)];
            // Check If Some Value Is Not Valid
            else if (list_role && !isNaN(Number(args[2])) && Number(args[2]) > 0)
                // If Mention Crew
                return [2 /*return*/, payCrew(list_role.id, mgs.author.id, table, Number(args[2]), mgs)];
            // Invalid Command
            else
                return [2 /*return*/, invalideCMD_1.default(mgs)];
            return [2 /*return*/];
        });
    });
}
exports.default = pay;
// Function Tag User
function payUser(paid_id, payer_id, table, payment, mgs) {
    return __awaiter(this, void 0, void 0, function () {
        var sequelize, t_1, paid_result_1, pay_result_1, err_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sequelize_1.default()];
                case 1:
                    sequelize = _a.sent();
                    // Test if undefind
                    if (!sequelize)
                        return [2 /*return*/, errorMGS_1.default(mgs, "Sequelize load")];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 6, , 7]);
                    return [4 /*yield*/, sequelize.transaction()];
                case 3:
                    t_1 = _a.sent();
                    return [4 /*yield*/, userPaid_1.default(paid_id, table, payment, t_1)];
                case 4:
                    paid_result_1 = _a.sent();
                    return [4 /*yield*/, userPay_1.default(payer_id, table, payment, t_1)];
                case 5:
                    pay_result_1 = _a.sent();
                    // Test Result
                    t_1.commit().then(function () {
                        var _a, _b, _c, _d;
                        // Check if some value null
                        if (!paid_result_1 || !pay_result_1)
                            return console.log(paid_result_1, pay_result_1);
                        // Embed For Response
                        var embed = new discord_js_1.MessageEmbed()
                            .setAuthor(config_json_1.author_name)
                            .setDescription("Transazione Eseguita!")
                            .addField("Pagante: " + ((_b = (_a = mgs.guild) === null || _a === void 0 ? void 0 : _a.members.cache.get(payer_id)) === null || _b === void 0 ? void 0 : _b.user.username), pay_result_1 + " ----> " + (pay_result_1 - payment))
                            .addField("Ricevente: " + ((_d = (_c = mgs.guild) === null || _c === void 0 ? void 0 : _c.members.cache.get(paid_id)) === null || _d === void 0 ? void 0 : _d.user.username), paid_result_1 + " -----> " + (paid_result_1 + payment))
                            .setColor(config_json_1.economy_color);
                        // Send Message
                        mgs.channel.send(embed);
                    }).catch(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, t_1.rollback()];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); });
                    return [3 /*break*/, 7];
                case 6:
                    err_1 = _a.sent();
                    // Message Error
                    errorMGS_1.default(mgs, err_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
// Function Tag Crew
function payCrew(paid_id, payer_id, table, payment, mgs) {
    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); });
}
