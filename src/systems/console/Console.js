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
var console_1 = require("utils/console");
var DescribeMenus_1 = require("@systems/console/messages/DescribeMenus");
var Welcome_1 = require("@systems/welcome/messages/Welcome");
var GameStart_1 = require("@systems/welcome/messages/GameStart");
var DescribeStage_1 = require("@systems/console/messages/DescribeStage");
var ConsoleSystem = /** @class */ (function (_super) {
    __extends(ConsoleSystem, _super);
    function ConsoleSystem(world) {
        var _this = _super.call(this) || this;
        _this.world = world;
        return _this;
    }
    ConsoleSystem.prototype.createReceive = function () {
        return this.receiveBuilder()
            .match(Welcome_1.Welcome, function (welcome) {
            console.info("欢迎来到仙剑奇侠传 beta. \n");
        })
            .match(GameStart_1.GameStart, function () {
            console.info("游玩愉快. \n");
        })
            .match(DescribeMenus_1.DescribeMenus, function (_a) {
            var menus = _a.menus;
            console.clear();
            var str = menus.map(function (menu, index) { return ++index + "、" + menu.nameComponent.value; }).join("\n");
            console_1.info(str);
        })
            .match(DescribeStage_1.DescribeStage, function (_a) {
            var stage = _a.stage;
            console.clear();
            var str = "\u5730\u70B9\uFF1A" + stage.nameComponent.value + "\n\u63CF\u8FF0\uFF1A" + stage.descComponent.value + "\n\u8FD9\u6709\uFF1A" + getItemName(stage.stageComponent.items).join(",");
            console_1.info(str);
        })
            .build();
    };
    return ConsoleSystem;
}(js_actor_1.AbstractActor));
exports.ConsoleSystem = ConsoleSystem;
function getItemName(items) {
    return items.map(function (item, index) { return index + 1 + "." + item.nameComponent.value; });
}
