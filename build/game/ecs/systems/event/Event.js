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
var EventSystem = /** @class */ (function (_super) {
    __extends(EventSystem, _super);
    function EventSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventSystem.prototype.createReceive = function () {
        var _this = this;
        return this.receiveBuilder().match(world_1.WorldNextDay, function () {
            if (_this.world)
                ;
        }).build();
    };
    return EventSystem;
}(system_1.AbstractSystem));
exports.EventSystem = EventSystem;
// skew 越大越靠近左侧
function gauss(skew) {
    if (skew === void 0) { skew = 6; }
    var rand = 0;
    var num = skew;
    for (var i = num; i--;) {
        rand += Math.random();
    }
    return (rand - num / 2) / (num / 2);
}
