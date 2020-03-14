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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var world_1 = require("../../../world");
var System_1 = require("../System");
var events_1 = require("./events");
var prizes_1 = __importDefault(require("./prizes"));
var EventSystem = /** @class */ (function (_super) {
    __extends(EventSystem, _super);
    function EventSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventSystem.prototype.createReceive = function () {
        var _this = this;
        return this.receiveBuilder().match(world_1.WorldNextDay, function () {
            var event;
            if (_this.world.liveDays < 30) {
                event = randomEvent(events_1.eventsFor0To30Days);
            }
            if (event.indexOf("$prize") > -1) {
                var target = randomPrize(prizes_1.default);
                var prize = new target();
                _this.world.addEntity(prize);
                var compiled = event.replace("$prize", prize.nameComponent.value);
                _this.world.logs.push(compiled);
            }
            // event.replace("$punishment", randomPrize(punishments))
        }).build();
    };
    return EventSystem;
}(System_1.System));
exports.EventSystem = EventSystem;
function randomEvent(events) {
    var index = gauss();
    return events[index];
}
function randomPrize(prizes) {
    var index = gauss();
    return prizes[index];
}
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
