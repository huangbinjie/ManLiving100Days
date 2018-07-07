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
var process = require("process");
var readline = require("readline");
var WaitingSelectStageItem_1 = require("@components/input/messages/WaitingSelectStageItem");
var SelectStageItemComplete_1 = require("@components/input/messages/SelectStageItemComplete");
var WaitingInteractWithStage_1 = require("@components/input/messages/WaitingInteractWithStage");
var InteractWithStageComplete_1 = require("@components/input/messages/InteractWithStageComplete");
var WaitingConfirmNextDialogue_1 = require("@components/dialogue/messages/WaitingConfirmNextDialogue");
var NextDialogue_1 = require("@components/dialogue/messages/NextDialogue");
var WaitingInput_1 = require("@components/welcome/messages/WaitingInput");
var InputComplete_1 = require("@components/welcome/messages/InputComplete");
var InputSystem = /** @class */ (function (_super) {
    __extends(InputSystem, _super);
    function InputSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputSystem.prototype.createReceive = function () {
        var _this = this;
        return this.receiveBuilder()
            .match(WaitingInput_1.WaitingWelcomeInput, function (waitingInput) {
            var rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.question("请选择\n", function (answer) {
                rl.close();
                _this.context.system.tell("WelcomeSystem", new InputComplete_1.WelcomeInputComplete(waitingInput.items[+answer - 1]));
            });
        })
            .match(WaitingSelectStageItem_1.WaitingSelectStageItem, function (waitingInput) {
            var rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.question("我该怎么做？\n", function (answer) {
                rl.close();
                _this.context.system.tell("StageSystem", new SelectStageItemComplete_1.SelectStageItemComplete(waitingInput.stage, +answer - 1));
            });
        })
            .match(WaitingInteractWithStage_1.WaitingInteractWithStage, function (waitingInput) {
            var rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.question("我该怎么做？\n", function (answer) {
                rl.close();
                _this.context.system.tell("StageSystem", new InteractWithStageComplete_1.InteractWithStageComplete(waitingInput.stage, waitingInput.item, waitingInput.value[+answer - 1]));
            });
        })
            // 确认对话
            .match(WaitingConfirmNextDialogue_1.WaitingConfirmNextDialogue, function (waiting) {
            var rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.question("\n输入回车下一句\n", function () {
                rl.close();
                _this.context.system.tell("DialogueSystem", new NextDialogue_1.NextDialogue(waiting.dialogues, ++waiting.currentIndex));
            });
        })
            .build();
    };
    return InputSystem;
}(js_actor_1.AbstractActor));
exports.InputSystem = InputSystem;
