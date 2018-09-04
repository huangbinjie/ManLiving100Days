"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("@components/Player");
var character_1 = require("@components/character");
var Name_1 = require("@components/Name");
var Attack_1 = require("@components/Attack");
var Health_1 = require("@components/Health");
var Behavior_1 = require("@components/Behavior");
var LiXiaoYao = /** @class */ (function () {
    function LiXiaoYao() {
        this.playerComponent = new Player_1.PlayerComponent();
        this.characterComponent = new character_1.CharacterComponent();
        this.nameComponent = new Name_1.NameComponent("李逍遥");
        this.attackComponent = new Attack_1.AttackComponent(100);
        this.healthComponent = new Health_1.HealthComponent(1000);
        this.behaviorComponent = new Behavior_1.BehaviorComponent({});
    }
    return LiXiaoYao;
}());
exports.LiXiaoYao = LiXiaoYao;
