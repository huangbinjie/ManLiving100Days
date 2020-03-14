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
var system_1 = require("../../../../engine/ecs/system");
var world_1 = require("../../../world");
var ThirstSystem = /** @class */ (function (_super) {
    __extends(ThirstSystem, _super);
    function ThirstSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThirstSystem.prototype.createReceive = function () {
        return this.receiveBuilder()
            .match(world_1.WorldNextDay, function () {
            world_1.World.instance.player.thirst.value -= 1;
        })
            .build();
    };
    return ThirstSystem;
}(system_1.AbstractSystem));
exports.ThirstSystem = ThirstSystem;
