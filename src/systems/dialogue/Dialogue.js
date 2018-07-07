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
var StartDialogue_1 = require("@components/dialogue/messages/StartDialogue");
var WaitingConfirmNextDialogue_1 = require("@components/dialogue/messages/WaitingConfirmNextDialogue");
var NextDialogue_1 = require("@components/dialogue/messages/NextDialogue");
var DialogueSystem = /** @class */ (function (_super) {
    __extends(DialogueSystem, _super);
    function DialogueSystem(world) {
        var _this = _super.call(this) || this;
        _this.world = world;
        return _this;
    }
    DialogueSystem.prototype.createReceive = function () {
        var _this = this;
        return this.receiveBuilder()
            .match(StartDialogue_1.StartDialogue, function (startDialogue) {
            var dialogues = startDialogue.dialogues;
            var waiting = new WaitingConfirmNextDialogue_1.WaitingConfirmNextDialogue(dialogues, 0);
            _this.context.system.tell("InputSystem", waiting);
            console.log(dialogues[0]);
        })
            .match(NextDialogue_1.NextDialogue, function (_a) {
            var dialogues = _a.dialogues, currentIndex = _a.currentIndex;
            console.log(dialogues[currentIndex]);
            var waiting = new WaitingConfirmNextDialogue_1.WaitingConfirmNextDialogue(dialogues, currentIndex);
            _this.context.system.tell("InputSystem", waiting);
        })
            .build();
    };
    return DialogueSystem;
}(js_actor_1.AbstractActor));
exports.DialogueSystem = DialogueSystem;
