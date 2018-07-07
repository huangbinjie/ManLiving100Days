"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var js_actor_1 = require("js-actor");
var OpenChest_1 = require("@components/chest/messages/OpenChest");
var ChestSystem = /** @class */ (function (_super) {
    __extends(ChestSystem, _super);
    function ChestSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChestSystem.prototype.createReceive = function () {
        var _this = this;
        return this.receiveBuilder()
            .match(OpenChest_1.OpenChest, function (openChest) {
            _this.context.system.tell("LogSystem", openChest);
        })
            .build();
    };
    return ChestSystem;
}(js_actor_1.AbstractActor));
exports.ChestSystem = ChestSystem;
