"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var js_actor_1 = require("js-actor");
var ChangeStage_1 = require("@components/Stage/messages/ChangeStage");
var WaitingSelectStageItem_1 = require("@components/input/messages/WaitingSelectStageItem");
var GameStart_1 = require("@components/welcome/messages/GameStart");
var WaitingInteractWithStage_1 = require("@components/input/messages/WaitingInteractWithStage");
var SelectStageItemComplete_1 = require("@components/input/messages/SelectStageItemComplete");
var InteractWithStageComplete_1 = require("@components/input/messages/InteractWithStageComplete");
var stage0_1 = require("@entities/stages/stage0");
var StartDialogue_1 = require("@components/dialogue/messages/StartDialogue");
var StageSystem = /** @class */ (function (_super) {
    __extends(StageSystem, _super);
    function StageSystem(world) {
        var _this = _super.call(this) || this;
        _this.world = world;
        return _this;
    }
    StageSystem.prototype.createReceive = function () {
        var _this = this;
        return this.receiveBuilder()
            .match(GameStart_1.GameStart, function (gameStart) {
            var stage0 = new stage0_1.Stage0Entity();
            describeStage(stage0);
            _this.tellLogger(gameStart);
            _this.context.system.tell("InputSystem", new WaitingSelectStageItem_1.WaitingSelectStageItem(stage0));
        })
            .match(ChangeStage_1.ChangeStage, function (changeStage) {
            var nextStage = changeStage.stage;
            describeStage(nextStage);
            _this.tellLogger(changeStage);
            _this.context.system.tell("InputSystem", new WaitingSelectStageItem_1.WaitingSelectStageItem(nextStage));
        })
            .match(SelectStageItemComplete_1.SelectStageItemComplete, function (inputComplete) {
            var item = inputComplete.stage.stageComponent.items[inputComplete.index];
            var interactiveMenus = [];
            if (item.stageComponent) {
                interactiveMenus.push("进入");
            }
            if (item.enemyComponent) {
                interactiveMenus.push("战斗");
            }
            if (item.dialogueComponent) {
                interactiveMenus.push("对话");
            }
            if (item.chestComponent) {
                interactiveMenus.push("打开");
            }
            interactiveMenus.push("返回");
            console.info(describeInteractiveMenus(interactiveMenus));
            _this.context.system.tell("InputSystem", new WaitingInteractWithStage_1.WaitingInteractWithStage(inputComplete.stage, item, interactiveMenus));
        })
            .match(InteractWithStageComplete_1.InteractWithStageComplete, function (response) {
            switch (response.value) {
                case "进入":
                    _this.getSelf().tell(new ChangeStage_1.ChangeStage(response.item));
                    break;
                case "对话":
                    _this.context.system.tell("DialogueSystem", new StartDialogue_1.StartDialogue(response.item.dialogueComponent.dialogues));
                    break;
                case "返回":
                    _this.getSelf().tell(new ChangeStage_1.ChangeStage(response.stage));
                    break;
            }
        })
            .build();
    };
    StageSystem.prototype.tellLogger = function (message) {
        this.context.system.tell("LogSystem", message);
    };
    return StageSystem;
}(js_actor_1.AbstractActor));
exports.StageSystem = StageSystem;
function describeStage(stage) {
    console.info("\n  \u5730\u70B9\uFF1A" + stage.nameComponent.value + "\n\n  \u63CF\u8FF0\uFF1A" + stage.descComponent.value + "\n\n  \u8FD9\u6709\uFF1A" + getItemName(stage.stageComponent.items).join("  ") + "\n");
}
function describeInteractiveMenus(menus) {
    return menus.map(function (menu, index) { return index + 1 + "." + menu; }).join(", ");
}
function getItemName(items) {
    return items.map(function (item, index) { return index + 1 + "." + item.nameComponent.value; });
}
