"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var js_actor_1 = require("js-actor");
var world_1 = require("../../world");
var DialogueStage = /** @class */ (function (_super) {
    __extends(DialogueStage, _super);
    function DialogueStage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DialogueStage.prototype.preStart = function () {
        world_1.World.instance.renderer.writeLine('对话');
        world_1.World.instance.renderer.writeLine('');
    };
    DialogueStage.prototype.createReceive = function () {
        return this.receiveBuilder().build();
    };
    return DialogueStage;
}(js_actor_1.AbstractActor));
exports.DialogueStage = DialogueStage;
