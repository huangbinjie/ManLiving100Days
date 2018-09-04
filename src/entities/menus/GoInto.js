"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Menu_1 = require("@components/menu/Menu");
var Name_1 = require("@components/name/Name");
var GoIntoMenuEntity = /** @class */ (function () {
    function GoIntoMenuEntity() {
        this.nameComponent = new Name_1.NameComponent("进入");
        this.menuComponent = new Menu_1.MenuComponent();
    }
    return GoIntoMenuEntity;
}());
exports.GoIntoMenuEntity = GoIntoMenuEntity;
