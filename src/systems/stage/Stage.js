"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var js_actor_1 = require("js-actor");
var StageSystem = /** @class */ (function (_super) {
    __extends(StageSystem, _super);
    function StageSystem(world) {
        var _this = _super.call(this) || this;
        _this.world = world;
        return _this;
    }
    StageSystem.prototype.createReceive = function () {
        return this.receiveBuilder()
            .build();
    };
    return StageSystem;
}(js_actor_1.AbstractActor));
exports.StageSystem = StageSystem;
