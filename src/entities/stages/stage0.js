"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stage_1 = require("@components/Stage/Stage");
var Name_1 = require("@components/name/Name");
var Desc_1 = require("@components/desc/Desc");
var ToGuai_1 = require("@entities/characters/stage0/ToGuai");
var stage1_1 = require("@entities/stages/stage1");
/**
 * [罗刹洞（梦中）]
  跟踪着几个小鬼，李逍遥乘着飞剑来到罗刹洞。在洞的深处，遇见罗刹鬼婆，并于之决一死战。由于罗刹鬼婆实在难以对付，李逍遥最终告败。
 */
var Stage0Entity = /** @class */ (function () {
    function Stage0Entity() {
        this.nameComponent = new Name_1.NameComponent("罗刹洞");
        this.descComponent = new Desc_1.DescComponent("梦中");
        this.stageComponent = new Stage_1.StageComponent([new ToGuai_1.TuGuai(), new stage1_1.Stage1Entity()]);
    }
    return Stage0Entity;
}());
exports.Stage0Entity = Stage0Entity;
