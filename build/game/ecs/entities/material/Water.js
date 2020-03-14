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
var Water_1 = require("../../components/material/Water");
var Name_1 = require("../../components/common/Name");
var Entity_1 = require("../Entity");
var WaterEntity = /** @class */ (function (_super) {
    __extends(WaterEntity, _super);
    function WaterEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nameComponent = new Name_1.NameComponent('水');
        _this.waterComponent = new Water_1.WaterComponent();
        return _this;
    }
    return WaterEntity;
}(Entity_1.Entity));
exports.default = WaterEntity;
