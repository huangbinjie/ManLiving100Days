"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var js_actor_1 = require("js-actor");
var Welcome_1 = require("./messages/Welcome");
var GameStart_1 = require("@entities/menus/GameStart");
var GameStart_2 = require("./messages/GameStart");
var DescribeMenus_1 = require("@systems/console/messages/DescribeMenus");
var Input_1 = require("@systems/Input/Input");
var WaitingInput_1 = require("@systems/input/messages/WaitingInput");
var WelcomeSystem = /** @class */ (function (_super) {
    __extends(WelcomeSystem, _super);
    function WelcomeSystem(world) {
        var _this = _super.call(this) || this;
        _this.world = world;
        _this.inputRef = _this.context.system.get(Input_1.InputSystem);
        return _this;
    }
    WelcomeSystem.prototype.createReceive = function () {
        var _this = this;
        return this.receiveBuilder()
            .match(Welcome_1.Welcome, function () {
            var menus = [new GameStart_1.GameStartMenuEntity()];
            _this.world.broadcast(new DescribeMenus_1.DescribeMenus(menus));
            _this.inputRef.ask(new WaitingInput_1.WaitingInput(menus)).then(function (index) {
                if (menus[index].nameComponent.value === "开始游戏") {
                    _this.world.broadcast(new GameStart_2.GameStart());
                }
            });
        })
            .build();
    };
    return WelcomeSystem;
}(js_actor_1.AbstractActor));
exports.WelcomeSystem = WelcomeSystem;
