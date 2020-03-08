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
Object.defineProperty(exports, "__esModule", { value: true });
var renderer_1 = require("./renderer/renderer");
var Player_1 = require("./ecs/entities/Player");
var world_1 = require("../engine/world");
var World = /** @class */ (function (_super) {
    __extends(World, _super);
    function World() {
        var _this = _super.call(this) || this;
        _this.renderer = new renderer_1.Renderer();
        _this.player = new Player_1.PlayerEntity();
        // 存活天数
        _this.liveDays = 0;
        World.instance = _this;
        return _this;
    }
    return World;
}(world_1.AbstractWorld));
exports.World = World;
var WorldInited = /** @class */ (function () {
    function WorldInited() {
    }
    return WorldInited;
}());
exports.WorldInited = WorldInited;
var WorldTerminated = /** @class */ (function () {
    function WorldTerminated() {
    }
    return WorldTerminated;
}());
exports.WorldTerminated = WorldTerminated;
var WorldNextDay = /** @class */ (function () {
    function WorldNextDay() {
    }
    return WorldNextDay;
}());
exports.WorldNextDay = WorldNextDay;
