"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractEntity = /** @class */ (function () {
    function AbstractEntity() {
        this.components = [];
    }
    AbstractEntity.prototype.addComp = function (comp) {
        this.components.push(comp);
    };
    AbstractEntity.prototype.getComp = function (comp) {
        return this.components[this.components.indexOf(comp)];
    };
    AbstractEntity.prototype.removeComp = function (comp) {
        this.components.splice(this.components.indexOf(comp));
    };
    return AbstractEntity;
}());
exports.AbstractEntity = AbstractEntity;
