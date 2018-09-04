"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Name_1 = require("@components/Name");
var Desc_1 = require("@components/Desc");
var Weapon_1 = require("@components/Weapon");
var Attack_1 = require("@components/Attack");
var RustySwordEntity = /** @class */ (function () {
    function RustySwordEntity() {
        this.weaponComponent = new Weapon_1.WeaponComponent();
        this.nameComponent = new Name_1.NameComponent("生锈的剑");
        this.descComponent = new Desc_1.DescComponent("最差的武器了");
        this.attackComponent = new Attack_1.AttackComponent(5);
    }
    return RustySwordEntity;
}());
exports.RustySwordEntity = RustySwordEntity;
