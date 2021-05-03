"use strict";
// ===================================================
// Command Member LeaderBord
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
Object.defineProperty(exports, "__esModule", { value: true });
// Import Discord Type
var discord_js_1 = require("discord.js");
// Import Config
var config_json_1 = require("../../config.json");
// Export Funcion
function member_leaderbord(mgs, table) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var user_list, embed, user, x, user_data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, table.user_table.findAll({
                        order: [["saldoDepositatoTot", "DESC"]],
                    })];
                case 1:
                    user_list = _b.sent();
                    embed = new discord_js_1.MessageEmbed()
                        .setAuthor(config_json_1.author_name)
                        .setTitle("Classifica Membri")
                        .setColor(config_json_1.economy_color);
                    if (!(user_list.length == 0)) return [3 /*break*/, 2];
                    // Embed List Empy
                    embed.setDescription("Non c'è nessuno nella classifica");
                    // Send Message
                    mgs.channel.send(embed);
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, table.user_table.findOne({ where: { userId: mgs.author.id } })];
                case 3:
                    user = (_a = (_b.sent())) === null || _a === void 0 ? void 0 : _a.get();
                    // Set Description
                    if (user)
                        embed.setDescription("<@!" + user.userId + "> -----> " + user.saldoDepositatoTot);
                    // Set List
                    for (x = 0; x < 10; x++) {
                        user_data = user_list[x].get();
                        console.log(user_data);
                        // Add Field
                        if (user_data)
                            embed.addField("--------------------------", "**" + (x + 1) + ":** <@!" + user_data.userId + "> ----> " + user_data.saldoDepositatoTot);
                    }
                    // Send Embed
                    mgs.channel.send(embed);
                    _b.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.default = member_leaderbord;
