"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StageManager = /** @class */ (function () {
    function StageManager(world) {
        this.world = world;
    }
    StageManager.of = function (world) {
        return new StageManager(world);
    };
    StageManager.prototype.to = function (stage) {
        var _this = this;
        stage.world = this.world;
        stage.preStart();
        return new Promise(function (resolve, reject) {
            _this.resolver = resolve;
            _this.previous = StageManager.current;
            StageManager.current = stage;
        });
    };
    StageManager.prototype.back = function () {
        var _a;
        if (!this.resolver) {
            throw Error('请确认有运行中的 stage.');
        }
        (_a = StageManager.current) === null || _a === void 0 ? void 0 : _a.postStop();
        StageManager.current = this.previous;
        delete this.previous;
        this.resolver();
    };
    return StageManager;
}());
exports.StageManager = StageManager;
