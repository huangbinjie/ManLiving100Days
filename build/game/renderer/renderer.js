"use strict";
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
var terminal_kit_1 = __importDefault(require("terminal-kit"));
var readline_1 = __importDefault(require("readline"));
var types_1 = require("./types");
var Renderer = /** @class */ (function () {
    function Renderer() {
        this._term = terminal_kit_1.default.terminal;
        this.rl = readline_1.default.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    Renderer.prototype.writeTitle = function (title) {
        this.writeLine(title + '\n', 'magenta');
    };
    Renderer.prototype.writeLine = function (text, color) {
        if (color === void 0) { color = 'defaultColor'; }
        this._term[color](text + '\n');
    };
    Renderer.prototype.writeMenus = function (menus, type) {
        return __awaiter(this, void 0, void 0, function () {
            var response, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(type === 'row')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._term.singleRowMenu(menus).promise];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.selectedIndex];
                    case 2:
                        if (!(type === 'column')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this._term.singleColumnMenu(menus).promise];
                    case 3:
                        response = _a.sent();
                        return [2 /*return*/, response.selectedIndex];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Renderer.prototype.writeImage = function (url, options) {
        this._term.drawImage(url, { shrink: options.shrink });
    };
    Renderer.prototype.write = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            var actions, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!types_1.isRenderText(obj)) return [3 /*break*/, 2];
                        this._term.cyan(obj.content || '\n');
                        return [4 /*yield*/, this.read('按回车继续.')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        if (!types_1.isRenderStage(obj)) return [3 /*break*/, 4];
                        this._term.magenta(obj.title);
                        this._term.cyan(obj.desc || '\n');
                        actions = obj.actions.map(function (action, index) { return String.fromCharCode(97 + index) + ". " + action; });
                        return [4 /*yield*/, this._term.singleColumnMenu(actions).promise];
                    case 3:
                        response = _a.sent();
                        return [2 /*return*/, response.selectedIndex];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Renderer.prototype.read = function (question) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.rl.question("\n" + question + "\n\n", function (answer) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        this.rl.close();
                                        _c.label = 1;
                                    case 1:
                                        _c.trys.push([1, 2, , 4]);
                                        resolve(+answer - 1);
                                        return [3 /*break*/, 4];
                                    case 2:
                                        _a = _c.sent();
                                        _b = resolve;
                                        return [4 /*yield*/, this.read(question)];
                                    case 3:
                                        _b.apply(void 0, [_c.sent()]);
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                    })];
            });
        });
    };
    Renderer.prototype.clear = function () {
        this._term.clear();
    };
    return Renderer;
}());
exports.Renderer = Renderer;
exports.renderer = new Renderer();
