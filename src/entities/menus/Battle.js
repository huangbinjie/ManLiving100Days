"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Menu_1 = require("@components/menu/Menu");
var Name_1 = require("@components/name/Name");
var BattleMenuEntity = /** @class */ (function () {
    function BattleMenuEntity() {
        this.nameComponent = new Name_1.NameComponent("战斗");
        this.menuComponent = new Menu_1.MenuComponent();
    }
    return BattleMenuEntity;
}());
exports.BattleMenuEntity = BattleMenuEntity;
