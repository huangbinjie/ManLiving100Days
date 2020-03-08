"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractRenderer = /** @class */ (function () {
    function AbstractRenderer() {
    }
    return AbstractRenderer;
}());
exports.AbstractRenderer = AbstractRenderer;
var DefaultRenderer = /** @class */ (function () {
    function DefaultRenderer() {
    }
    DefaultRenderer.prototype.write = function (obj) {
        throw new Error("Method not implemented.");
    };
    DefaultRenderer.prototype.read = function (question) {
        throw new Error("Method not implemented.");
    };
    return DefaultRenderer;
}());
exports.DefaultRenderer = DefaultRenderer;
