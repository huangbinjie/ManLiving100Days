"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Menu_1 = require("@components/menu/Menu");
var Name_1 = require("@components/name/Name");
var DialogueMenuEntity = /** @class */ (function () {
    function DialogueMenuEntity() {
        this.nameComponent = new Name_1.NameComponent("对话");
        this.menuComponent = new Menu_1.MenuComponent();
    }
    return DialogueMenuEntity;
}());
exports.DialogueMenuEntity = DialogueMenuEntity;
