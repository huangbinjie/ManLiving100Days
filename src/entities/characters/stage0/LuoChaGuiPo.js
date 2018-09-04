"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var character_1 = require("@components/character");
var Name_1 = require("@components/Name");
var Attack_1 = require("@components/Attack");
var Health_1 = require("@components/Health");
var Equipment_1 = require("@components/Equipment");
var Dialogue_1 = require("@components/Dialogue");
/**
 * 罗刹鬼婆
 */
var LuoChaGuiPo = /** @class */ (function () {
    function LuoChaGuiPo() {
        this.characterComponent = new character_1.CharacterComponent();
        this.nameComponent = new Name_1.NameComponent("罗刹鬼婆");
        this.attackComponent = new Attack_1.AttackComponent(50);
        this.healthComponent = new Health_1.HealthComponent(100000);
        this.equipmentComponent = new Equipment_1.EquipmentComponent();
        this.dialogueComponent = new Dialogue_1.DialogueComponent(dialogs);
    }
    return LuoChaGuiPo;
}());
exports.LuoChaGuiPo = LuoChaGuiPo;
var dialogs = [
    "罗刹鬼婆：哼～小子！你谁不好惹，居然欺到老娘头上来了！",
    "李逍遥：乱世妖孽，人人得而诛之！今日本大仙专程来替天行道。",
    "罗刹鬼婆：咈咈咈，你若想死，不怕没鬼可以做…",
    "李逍遥：邪魔歪道～我与你势不两立。",
    "罗刹鬼婆：李逍遥！纳命来～～",
    "李逍遥：哇哇～作恶多端的罗刹鬼婆！既然落在你的手里，要杀要剐不用多说！",
    "李逍遥：动手吧～十八年后，又是一条好汉！",
];
