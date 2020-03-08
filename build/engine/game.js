"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var renderer_1 = require("./renderer");
var updater_1 = require("./updater");
var manager_1 = require("./stage/manager");
var Game = /** @class */ (function () {
    function Game(options) {
        this.updater = new updater_1.Updater();
        this.renderer = new renderer_1.DefaultRenderer();
        if (options.renderer) {
            this.renderer = options.renderer;
        }
        if (options.world) {
            this.world = options.world;
        }
    }
    Game.prototype.run = function () {
        var _this = this;
        this.updater.addTask(function () {
            var _a;
            (_a = manager_1.StageManager.current) === null || _a === void 0 ? void 0 : _a.update();
        });
        this.updater.addTask(function () {
            for (var _i = 0, _a = _this.world.systems; _i < _a.length; _i++) {
                var system = _a[_i];
                system.update();
            }
        });
        this.updater.run();
    };
    return Game;
}());
exports.Game = Game;
