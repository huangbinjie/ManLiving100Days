"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var node_emoji_1 = __importDefault(require("node-emoji"));
var world_1 = require("../../world");
var stage_1 = require("../stage");
var manager_1 = require("../../../engine/stage/manager");
var loading_1 = require("../loading/loading");
var HomeStage = /** @class */ (function (_super) {
    __extends(HomeStage, _super);
    function HomeStage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeStage.prototype.renderMain = function () {
        return __awaiter(this, void 0, void 0, function () {
            var foods, waters, menus, selected;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.renderer.clear();
                        this.renderer.writeTitle('家中');
                        foods = Array(5).fill(node_emoji_1.default.get('rice')).join(' ');
                        this.renderer.writeLine("\u98DF\u7269(" + 5 + "): " + foods, 'cyan');
                        waters = Array(5).fill(node_emoji_1.default.get('droplet')).join(' ');
                        this.renderer.writeLine("\u6C34(" + 5 + "): " + waters, 'cyan');
                        this.renderer.writeLine('\n');
                        this.renderer.writeLine('现在要做什么呢?');
                        this.renderer.writeLine('\n');
                        menus = [
                            '出门',
                            '查看状态',
                            '洗澡',
                            '睡觉',
                            '说话'
                        ];
                        return [4 /*yield*/, this.renderer.writeMenus(menus, 'column')];
                    case 1:
                        selected = _a.sent();
                        if (selected === 0) {
                        }
                        if (selected === 1) {
                            this.renderProfile();
                        }
                        // 睡觉
                        if (selected === 3) {
                            manager_1.StageManager.of(this.world).replace(new loading_1.LoadingStage());
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeStage.prototype.renderProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var player, menus, selected;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        player = world_1.World.instance.player;
                        this.renderer.clear();
                        this.renderer.writeTitle('状态');
                        this.renderer.writeLine("\u9971\u98DF\u5EA6: " + player.repletion.toString());
                        this.renderer.writeLine("\u6E34\u5EA6: " + player.thirst.toString());
                        menus = [
                            '返回'
                        ];
                        return [4 /*yield*/, this.renderer.writeMenus(menus, 'row')];
                    case 1:
                        selected = _a.sent();
                        if (selected === 0) {
                            this.renderMain();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeStage.prototype.preStart = function () {
        _super.prototype.preStart.call(this);
        this.renderMain();
    };
    return HomeStage;
}(stage_1.Stage));
exports.HomeStage = HomeStage;
