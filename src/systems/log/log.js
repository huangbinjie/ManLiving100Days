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
var Welcome_1 = require("@components/Welcome/messages/Welcome");
var ChangeStage_1 = require("@components/Stage/messages/ChangeStage");
var OpenChest_1 = require("@components/chest/messages/OpenChest");
var GameStart_1 = require("@components/welcome/messages/GameStart");
/**
 * 处理系统中各种需要打印和输出的消息
 * TODO 染色，不同类型的消息不同的颜色
 */
var LogSystem = /** @class */ (function (_super) {
    __extends(LogSystem, _super);
    function LogSystem(world) {
        var _this = _super.call(this) || this;
        _this.world = world;
        return _this;
    }
    LogSystem.prototype.createReceive = function () {
        return this.receiveBuilder()
            .match(Welcome_1.Welcome, function (welcome) {
            console.info("欢迎来到仙剑奇侠传 beta. \n");
        })
            .match(GameStart_1.GameStart, function () {
            // console.info("游玩愉快. \n")
        })
            .match(ChangeStage_1.ChangeStage, function (changeStage) {
            console.info("你来到了" + changeStage.stage.nameComponent.value + "\n");
        })
            .match(OpenChest_1.OpenChest, function (openChest) {
            console.info("你打开了一个" + openChest.chest.nameComponent.value + "\n");
        })
            .build();
    };
    return LogSystem;
}(js_actor_1.AbstractActor));
exports.LogSystem = LogSystem;
