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
var RepletionSystem = /** @class */ (function (_super) {
    __extends(RepletionSystem, _super);
    function RepletionSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RepletionSystem.prototype.createReceive = function () {
        return this.receiveBuilder()
            .match(world_1.WorldNextDay, function () {
            world_1.World.instance.player.repletion.value -= 1;
        })
            .build();
    };
    return RepletionSystem;
}(system_1.AbstractSystem));
exports.default = RepletionSystem;
