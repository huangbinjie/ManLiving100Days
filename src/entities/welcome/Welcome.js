"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Welcome_1 = require("@components/Welcome/Welcome");
var Name_1 = require("@components/name/Name");
var GameStart_1 = require("@entities/menus/GameStart");
var WelcomeEntity = /** @class */ (function () {
    function WelcomeEntity() {
        this.nameComponent = new Name_1.NameComponent("欢迎页");
        var startGame = new GameStart_1.GameStartMenuEntity();
        this.welcomponent = new Welcome_1.WelcomeComponent([startGame]);
    }
    return WelcomeEntity;
}());
exports.WelcomeEntity = WelcomeEntity;
