"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Updater = /** @class */ (function () {
    function Updater(period) {
        if (period === void 0) { period = 60; }
        this.period = period;
        this.tasks = [];
    }
    Updater.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    Updater.prototype.run = function () {
        var _this = this;
        if (this.period >= 10) {
            this.timer = setInterval(function () {
                for (var _i = 0, _a = _this.tasks; _i < _a.length; _i++) {
                    var task = _a[_i];
                    task();
                }
            }, this.period);
        }
        for (var _i = 0, _a = this.tasks; _i < _a.length; _i++) {
            var task = _a[_i];
            task();
        }
    };
    Updater.prototype.stop = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    return Updater;
}());
exports.Updater = Updater;
