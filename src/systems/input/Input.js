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
var process = require("process");
var readline = require("readline");
var WaitingInput_1 = require("@systems/input/messages/WaitingInput");
var InputSystem = /** @class */ (function (_super) {
    __extends(InputSystem, _super);
    function InputSystem(world) {
        var _this = _super.call(this) || this;
        _this.world = world;
        return _this;
    }
    InputSystem.prototype.createReceive = function () {
        return this.receiveBuilder()
            .answer(WaitingInput_1.WaitingInput, function (resolve) { return function () {
            var rl = createInterface();
            rl.question("\n请选择\n\n", function (answer) {
                rl.close();
                resolve(+answer - 1);
            });
        }; })
            .build();
    };
    return InputSystem;
}(js_actor_1.AbstractActor));
exports.InputSystem = InputSystem;
function createInterface() {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}
