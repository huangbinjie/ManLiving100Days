"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Menu_1 = require("@components/menu/Menu");
var Name_1 = require("@components/name/Name");
var BackMenuEntity = /** @class */ (function () {
    function BackMenuEntity() {
        this.nameComponent = new Name_1.NameComponent("返回");
        this.menuComponent = new Menu_1.MenuComponent();
    }
    return BackMenuEntity;
}());
exports.BackMenuEntity = BackMenuEntity;
