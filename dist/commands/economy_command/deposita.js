"use strict";
// ===================================================
// Command Deposita
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
// Import MGS ERROR
var errorMGS_1 = __importDefault(require("../../utils/errorMGS"));
// Fucntion Get User
var getUserDB_1 = __importDefault(require("../../utils/User_Utility/getUserDB"));
// Import Sequelize
var sequelize_1 = __importDefault(require("../../db/sequelize"));
// Get Crew
var getCrew_1 = __importDefault(require("../../utils/Crew_Utility/getCrew"));
// import Config
var config_json_1 = require("../../config.json");
// Export Funcion
function deposita(mgs, table, args) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var user, crew, sequelize, t;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    // Check User Input
                    if (!Number(args[2]) || Number(args[2]) < 1000)
                        return [2 /*return*/, errorMGS_1.default(mgs, "Valore inserito invalido")];
                    return [4 /*yield*/, getUserDB_1.default(mgs.author.id, table)];
                case 1:
                    user = (_a = (_c.sent())) === null || _a === void 0 ? void 0 : _a.get();
                    // Check Credits
                    if (!(user === null || user === void 0 ? void 0 : user.saldo) || (user === null || user === void 0 ? void 0 : user.saldo) < Number(args[2]))
                        return [2 /*return*/, errorMGS_1.default(mgs, "Non hai abbastanza soldi")];
                    // Check Crew
                    if (!user.ciurmaId)
                        return [2 /*return*/, errorMGS_1.default(mgs, "Non sei in nessuna ciurma!")];
                    return [4 /*yield*/, getCrew_1.default(user.ciurmaId, table)];
                case 2:
                    crew = (_b = (_c.sent())) === null || _b === void 0 ? void 0 : _b.get();
                    // Test Crew
                    if (!(crew === null || crew === void 0 ? void 0 : crew.saldo))
                        return [2 /*return*/, errorMGS_1.default(mgs, "Ciurma non trovata")];
                    return [4 /*yield*/, sequelize_1.default()];
                case 3:
                    sequelize = _c.sent();
                    // Check Sequelize
                    if (!sequelize)
                        return [2 /*return*/, errorMGS_1.default(mgs, "Internal DB Error")];
                    return [4 /*yield*/, sequelize.transaction()];
                case 4:
                    t = _c.sent();
                    // User Pay
                    return [4 /*yield*/, table.user_table.update({ saldo: user.saldo - Number(args[2]) }, { where: { userId: mgs.author.id }, transaction: t })];
                case 5:
                    // User Pay
                    _c.sent();
                    // Pay Crew
                    return [4 /*yield*/, table.crew_table.update({ saldo: crew.saldo + Number(args[2]) }, { where: { crewId: user.ciurmaId }, transaction: t })];
                case 6:
                    // Pay Crew
                    _c.sent();
                    // Commit Transaction
                    t.commit()
                        .then(function () {
                        // New Embed
                        var embed = new discord_js_1.MessageEmbed()
                            .setAuthor(config_json_1.author_name)
                            .setColor(config_json_1.economy_color)
                            .setTitle("Talleri Depositati")
                            .setDescription(mgs.author.username + " hai depositato con successo " + args[2] + " talleri.");
                        // Send Message
                        mgs.channel.send(embed);
                    })
                        .catch(function (err) { return errorMGS_1.default(mgs, "Error 500"); });
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = deposita;
