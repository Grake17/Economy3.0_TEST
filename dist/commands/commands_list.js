"use strict";
/* eslint-disable camelcase */
// ===================================================
// Exports Command
// ===================================================
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Command Test
var pong_1 = __importDefault(require("./command/pong")); // Import Pong
// Create Commands List
var command_list = {
    pong: pong_1.default
};
// Exports
exports.default = command_list;
