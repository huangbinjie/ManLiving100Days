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
var Attack_1 = require("@components/attack/messages/Attack");
var AttackSystem = /** @class */ (function (_super) {
    __extends(AttackSystem, _super);
    function AttackSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AttackSystem.prototype.createReceive = function () {
        return this.receiveBuilder()
            .match(Attack_1.Attack, function (attack) {
        })
            .build();
    };
    return AttackSystem;
}(js_actor_1.AbstractActor));
exports.AttackSystem = AttackSystem;
