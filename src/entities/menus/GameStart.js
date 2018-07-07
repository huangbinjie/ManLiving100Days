"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Menu_1 = require("@components/Menu/Menu");
var Behavior_1 = require("@components/Behavior/Behavior");
var Name_1 = require("@components/name/Name");
var GameStart_1 = require("@components/welcome/messages/GameStart");
var GameStartMenuEntity = /** @class */ (function () {
    function GameStartMenuEntity() {
        this.nameComponent = new Name_1.NameComponent("开始游戏");
        this.menuComponent = new Menu_1.MenuComponent();
        this.behaviorComponent = new Behavior_1.BehaviorComponent(new GameStart_1.GameStart);
    }
    return GameStartMenuEntity;
}());
exports.GameStartMenuEntity = GameStartMenuEntity;
