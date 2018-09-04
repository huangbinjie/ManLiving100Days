"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Menu_1 = require("@components/Menu");
var Name_1 = require("@components/Name");
var GameStartMenuEntity = /** @class */ (function () {
    function GameStartMenuEntity() {
        this.nameComponent = new Name_1.NameComponent("开始游戏");
        this.menuComponent = new Menu_1.MenuComponent();
    }
    return GameStartMenuEntity;
}());
exports.GameStartMenuEntity = GameStartMenuEntity;
