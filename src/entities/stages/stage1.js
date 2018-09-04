"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stage2_1 = require("@entities/stages/stage2");
var Stage_1 = require("@components/Stage");
var Bonus_1 = require("@components/Bonus");
var Name_1 = require("@components/Name");
var Desc_1 = require("@components/Desc");
var TravelerSword_1 = require("@entities/weapons/sword/TravelerSword");
var Stage1Entity = /** @class */ (function () {
    function Stage1Entity() {
        this.nameComponent = new Name_1.NameComponent("出生点");
        this.descComponent = new Desc_1.DescComponent("安静的环境");
        var bonus = new Bonus_1.BonusComponent(new TravelerSword_1.TravelerSwordEntity);
        var nextStage = new stage2_1.Stage2Entity;
        this.stageComponent = new Stage_1.StageComponent([nextStage]);
    }
    return Stage1Entity;
}());
exports.Stage1Entity = Stage1Entity;
