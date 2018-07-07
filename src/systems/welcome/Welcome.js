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
var Welcome_1 = require("@components/Welcome/messages/Welcome");
var GameStart_1 = require("@entities/menus/GameStart");
var WaitingInput_1 = require("@components/welcome/messages/WaitingInput");
var InputComplete_1 = require("@components/welcome/messages/InputComplete");
var console_1 = require("utils/console");
var WelcomeSystem = /** @class */ (function (_super) {
    __extends(WelcomeSystem, _super);
    function WelcomeSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WelcomeSystem.prototype.createReceive = function () {
        var _this = this;
        return this.receiveBuilder()
            .match(Welcome_1.Welcome, function (welcome) {
            var menus = [new GameStart_1.GameStartMenuEntity()];
            console_1.menu(menus);
            _this.context.system.tell("InputSystem", new WaitingInput_1.WaitingWelcomeInput(menus));
        })
            .match(InputComplete_1.WelcomeInputComplete, function (inputComplete) {
            // 欢迎页只有菜单，直接 cast 了
            var item = inputComplete.item;
            _this.context.system.tell("*", item.behaviorComponent.value);
        })
            .build();
    };
    return WelcomeSystem;
}(js_actor_1.AbstractActor));
exports.WelcomeSystem = WelcomeSystem;
