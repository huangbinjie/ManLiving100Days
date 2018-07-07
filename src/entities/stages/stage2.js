"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stage_1 = require("@components/Stage/Stage");
var Bonus_1 = require("@components/Bonus/Bonus");
var TravelerSword_1 = require("@entities/weapons/sword/TravelerSword");
var Name_1 = require("@components/name/Name");
var Desc_1 = require("@components/desc/Desc");
var chests_1 = require("@entities/chests");
var Stage2Entity = /** @class */ (function () {
    function Stage2Entity() {
        this.nameComponent = new Name_1.NameComponent("城堡");
        this.descComponent = new Desc_1.DescComponent("最终boss的城堡");
        var bonus = new Bonus_1.BonusComponent(new TravelerSword_1.TravelerSwordEntity);
        var chest = new chests_1.WoodenChestEntity(bonus);
        this.stageComponent = new Stage_1.StageComponent([chest]);
    }
    return Stage2Entity;
}());
exports.Stage2Entity = Stage2Entity;
