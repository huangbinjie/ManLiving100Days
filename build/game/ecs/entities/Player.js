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
var entity_1 = require("../../../engine/ecs/entity");
var Player_1 = require("../components/Player");
var Health_1 = require("../components/Health");
var Repletion_1 = require("../components/Repletion");
var Thirst_1 = require("../components/Thirst");
var PlayerEntity = /** @class */ (function (_super) {
    __extends(PlayerEntity, _super);
    function PlayerEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player = new Player_1.PlayerComponent();
        _this.health = new Health_1.HealthComponent(10);
        _this.repletion = new Repletion_1.RepletionComponent(5);
        _this.thirst = new Thirst_1.ThirstComponent(5);
        return _this;
    }
    return PlayerEntity;
}(entity_1.AbstractEntity));
exports.PlayerEntity = PlayerEntity;
