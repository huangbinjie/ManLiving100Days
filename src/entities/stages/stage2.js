"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stage_1 = require("@components/Stage");
var Name_1 = require("@components/Name");
var Desc_1 = require("@components/Desc");
var Stage2Entity = /** @class */ (function () {
    function Stage2Entity() {
        this.nameComponent = new Name_1.NameComponent("城堡");
        this.descComponent = new Desc_1.DescComponent("最终boss的城堡");
        this.stageComponent = new Stage_1.StageComponent([]);
    }
    return Stage2Entity;
}());
exports.Stage2Entity = Stage2Entity;
