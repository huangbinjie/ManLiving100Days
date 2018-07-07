"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("@components/player/Player");
var Name_1 = require("@components/name/Name");
var Health_1 = require("@components/health/Health");
var Equipment_1 = require("@components/equipment/Equipment");
var Attack_1 = require("@components/Attack/Attack");
var character_1 = require("@components/character/character");
/**
 * 罗刹鬼婆
 */
var LuoChaGuiPo = /** @class */ (function () {
    function LuoChaGuiPo() {
        this.playerComponent = new Player_1.PlayerComponent();
        this.characterComponent = new character_1.CharacterComponent();
        this.nameComponent = new Name_1.NameComponent("罗刹鬼婆");
        this.attackComponent = new Attack_1.AttackComponent(50);
        this.healthComponent = new Health_1.HealthComponent(100000);
        this.equipmentComponent = new Equipment_1.EquipmentComponent();
    }
    return LuoChaGuiPo;
}());
exports.LuoChaGuiPo = LuoChaGuiPo;
