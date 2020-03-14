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
var abstract_stage_1 = require("../../engine/stage/abstract_stage");
var renderer_1 = require("../renderer/renderer");
var Stage = /** @class */ (function (_super) {
    __extends(Stage, _super);
    function Stage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderer = renderer_1.renderer;
        return _this;
    }
    Stage.prototype.preStart = function () {
        renderer_1.renderer.clear();
    };
    Stage.prototype.postStop = function () {
        renderer_1.renderer.clear();
    };
    return Stage;
}(abstract_stage_1.AbstractStage));
exports.Stage = Stage;
