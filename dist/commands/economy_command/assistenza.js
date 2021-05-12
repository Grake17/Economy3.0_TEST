"use strict";
// ===================================================
// Command Assitenza
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
// Import Config
var config_json_1 = require("../../config.json");
// Import Discord Type
var discord_js_1 = require("discord.js");
// import Error MGS
var errorMGS_1 = __importDefault(require("../../utils/errorMGS"));
// Import Chekc Permission
var checkPermisison_1 = __importDefault(require("../../utils/checkPermisison"));
var sequelize_1 = __importDefault(require("../../db/sequelize"));
// Export Command
function assistenza(mgs, table, args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // Check Command
            switch (args[2]) {
                case "new":
                    assistenza_new(mgs, table, args);
                    break;
                case "list":
                    assistenza_list(mgs, table, args);
                    break;
                case "case":
                    assistenza_case(mgs, table, args);
                    break;
                case "pay":
                    assistenza_pay(mgs, table, args);
                default:
                    errorMGS_1.default(mgs, "Comando Invalido!");
            }
            return [2 /*return*/];
        });
    });
}
exports.default = assistenza;
// New Function
function assistenza_new(mgs, table, args) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var tags, text;
        return __generator(this, function (_b) {
            tags = (_a = mgs.mentions.members) === null || _a === void 0 ? void 0 : _a.map(function (users) { return users.id; });
            // Check if Tags
            if (tags)
                text = mgs.content.substring(14, mgs.content.length - 23 * tags.length);
            else
                text = mgs.content.substring(3);
            // Add to DB
            table.cases_table
                .create({
                caseauthorid: mgs.author.id,
                messagecontent: text,
                messageurl: mgs.url,
                messageid: mgs.id,
                taggedusers: tags === null || tags === void 0 ? void 0 : tags.toString(),
            })
                .then(function () {
                var _a;
                // Embed Users
                var embed = new discord_js_1.MessageEmbed()
                    .setAuthor(config_json_1.author_name)
                    .setColor(config_json_1.economy_color)
                    .setTitle("Richiesta effettuata")
                    .setDescription("Lo staff risponder\u00E0 il prima possibile");
                // Send Message to users
                mgs.channel.send(embed);
                // Message Content
                var content = [
                    "**Canale messaggio** : <#" + mgs.channel.id + ">",
                    "**Link messaggio**: [link](" + mgs.url + ")",
                    "**Contenuto richiesta**: " + text,
                    "**Numero Utenti Taggati**: " + (tags === null || tags === void 0 ? void 0 : tags.length),
                ].join("\n");
                // Embed for staffs
                embed
                    .setTitle("Nuova richiesta da *" + mgs.author.username + "*")
                    .setDescription(content);
                // Get Staff Channel
                var channel_staff = (_a = mgs.guild) === null || _a === void 0 ? void 0 : _a.channels.cache.get(config_json_1.channels.staff_channel);
                // Send Staff Message
                channel_staff.send(embed);
            });
            return [2 /*return*/];
        });
    });
}
// List Function
function assistenza_list(mgs, table, args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // Check Channel
            if (config_json_1.channels.staff_channel !== mgs.channel.id)
                return [2 /*return*/];
            // Check Permissions
            if (!checkPermisison_1.default(mgs.author.id))
                return [2 /*return*/, errorMGS_1.default(mgs, "Repoooooort!")];
            // Get All Cases
            table.cases_table.findAll({ where: { state: "PENDING" } }).then(function (cases) {
                // Create embed
                var embed = new discord_js_1.MessageEmbed()
                    .setAuthor(config_json_1.author_name)
                    .setColor(config_json_1.economy_color)
                    .setDescription("Numero Casi aperti: " + cases.length);
                cases.map(function (elment) {
                    // Get Array Element
                    var data = elment.get();
                    // Add Fields
                    embed.addField("Case N: " + data.caseid + "  Stato: " + data.state, "Caso aperto da <@!" + data.caseauthorid + ">");
                });
                // Send Message
                mgs.channel.send(embed);
            });
            return [2 /*return*/];
        });
    });
}
// Case Function
function assistenza_case(mgs, table, args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // Check Channel
            if (config_json_1.channels.staff_channel !== mgs.channel.id)
                return [2 /*return*/];
            // Check Permissions
            if (!checkPermisison_1.default(mgs.author.id))
                return [2 /*return*/, errorMGS_1.default(mgs, "Repoooooort!")];
            // Check Specific case
            if (!args[3])
                return [2 /*return*/, errorMGS_1.default(mgs, "Devi specificare l'ID di un caso")];
            // Get Data
            table.cases_table.findOne({ where: { caseid: args[3] } }).then(function (data) {
                var _a, _b;
                // Get Data
                var variables = data === null || data === void 0 ? void 0 : data.get();
                // Check If null
                if (variables == null)
                    return errorMGS_1.default(mgs, "Non ho trovato nessun caso con quell'ID");
                // Embed
                var embed = new discord_js_1.MessageEmbed()
                    .setAuthor(config_json_1.author_name)
                    .setColor(config_json_1.economy_color);
                // Set Content
                var content = [
                    "ID Caso: " + variables.caseid,
                    "Autore caso: <@!" + variables.caseauthorid + ">",
                    "Contenuto: " + variables.messagecontent,
                    "Message URL: " + variables.messageurl
                ].join("\n");
                // Check Tags
                if (((_a = variables.taggedusers) === null || _a === void 0 ? void 0 : _a.length) !== 0)
                    // Add Fields
                    embed.addField("Tagged Users", "" + ((_b = variables.taggedusers) === null || _b === void 0 ? void 0 : _b.split(",").map(function (user) { return "<@!" + user + ">"; })));
                // Set Descripion
                embed.setDescription(content);
                // Send Emebd
                mgs.channel.send(embed);
            });
            return [2 /*return*/];
        });
    });
}
// Assistenza Resolve
function assistenza_pay(mgs, table, args) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Check Channel
                    if (config_json_1.channels.staff_channel !== mgs.channel.id)
                        return [2 /*return*/];
                    // Check Permissions
                    if (!checkPermisison_1.default(mgs.author.id))
                        return [2 /*return*/, errorMGS_1.default(mgs, "Ei Ei EI Ei eI ei")];
                    // Check Specific case
                    if (!args[3])
                        return [2 /*return*/, errorMGS_1.default(mgs, "Devi specificare l'ID di un caso")];
                    // Check Money
                    if (!Number(args[4]))
                        return [2 /*return*/, errorMGS_1.default(mgs, "Errore nella sintassi")];
                    // Get Case
                    return [4 /*yield*/, table.cases_table.findOne({ where: { caseid: args[3] } }).then(function (caso) { return __awaiter(_this, void 0, void 0, function () {
                            var data, users, sequelize;
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        // Check IF null
                                        if (caso == null)
                                            return [2 /*return*/, errorMGS_1.default(mgs, "Non ho trovato nessun caso con quell'ID")];
                                        data = caso.get();
                                        // Case Already Resolve
                                        if (data.state !== "PENDING")
                                            return [2 /*return*/, errorMGS_1.default(mgs, "Il caso è già stato risolto")];
                                        users = [
                                            data.caseauthorid
                                        ];
                                        // Add Tags
                                        if (((_a = data.taggedusers) === null || _a === void 0 ? void 0 : _a.length) != 0)
                                            (_b = data.taggedusers) === null || _b === void 0 ? void 0 : _b.split(",").map(function (id) { return users.push(id); });
                                        return [4 /*yield*/, sequelize_1.default()];
                                    case 1:
                                        sequelize = _c.sent();
                                        // Sequelize Transaction
                                        sequelize === null || sequelize === void 0 ? void 0 : sequelize.transaction().then(function (t) {
                                            // Add Money to users
                                            users.map(function (id) {
                                                // Make Transacion
                                                table.user_table.update({ saldo: Number(args[4]) }, { where: { userId: id }, transaction: t });
                                            });
                                            // Update Case
                                            table.cases_table.update({ state: "" }, { where: { caseid: data.caseid }, transaction: t });
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        }); }).catch(function (err) {
                            // Error MGS
                            errorMGS_1.default(mgs, "Error: 500");
                        })];
                case 1:
                    // Get Case
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
