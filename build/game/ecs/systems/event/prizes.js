"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Food_1 = __importDefault(require("../../entities/material/Food"));
var Water_1 = __importDefault(require("../../entities/material/Water"));
var prizes = [
    Food_1.default,
    Water_1.default
];
exports.default = prizes;
