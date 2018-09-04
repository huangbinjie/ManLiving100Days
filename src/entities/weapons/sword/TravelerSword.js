"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Attack_1 = require("@components/Attack");
var Name_1 = require("@components/Name");
var Desc_1 = require("@components/Desc");
var Weapon_1 = require("@components/Weapon");
var TravelerSwordEntity = /** @class */ (function () {
    function TravelerSwordEntity() {
        this.weaponComponent = new Weapon_1.WeaponComponent();
        this.nameComponent = new Name_1.NameComponent("旅人之剑");
        this.descComponent = new Desc_1.DescComponent("旅行者们一般都会配备的防身之物");
        this.attackComponent = new Attack_1.AttackComponent(10);
    }
    return TravelerSwordEntity;
}());
exports.TravelerSwordEntity = TravelerSwordEntity;
