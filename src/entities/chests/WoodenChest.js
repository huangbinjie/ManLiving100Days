"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Chest_1 = require("@components/Chest/Chest");
var Name_1 = require("@components/name/Name");
var Desc_1 = require("@components/desc/Desc");
var WoodenChestEntity = /** @class */ (function () {
    function WoodenChestEntity(bonusComponent) {
        this.bonusComponent = bonusComponent;
        this.chestComponent = new Chest_1.ChestComponent();
        this.nameComponent = new Name_1.NameComponent("木箱");
        this.descComponent = new Desc_1.DescComponent("破破烂烂的，别期待出好东西，不过也有例外。");
    }
    return WoodenChestEntity;
}());
exports.WoodenChestEntity = WoodenChestEntity;
