"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StageManager = /** @class */ (function () {
    function StageManager(world) {
        this.world = world;
    }
    StageManager.of = function (world) {
        return new StageManager(world);
    };
    // 切换到下一个场景，当前场景在切换到下下个场景时销毁
    StageManager.prototype.to = function (stage) {
        stage.world = this.world;
        stage.preStart();
        return new Promise(function (resolve, reject) {
            var _a;
            StageManager.resolver = resolve;
            (_a = StageManager.previous) === null || _a === void 0 ? void 0 : _a.postStop();
            StageManager.previous = StageManager.current;
            StageManager.current = stage;
        });
    };
    StageManager.back = function () {
        var _a, _b;
        if (!StageManager.resolver) {
            throw Error('请确认有运行中的 stage.');
        }
        (_a = StageManager.current) === null || _a === void 0 ? void 0 : _a.postStop();
        StageManager.current = StageManager.previous;
        (_b = StageManager.current) === null || _b === void 0 ? void 0 : _b.preStart();
        delete StageManager.previous;
        StageManager.resolver();
    };
    // 切换到下一个场景，当前场景立即销毁
    StageManager.prototype.replace = function (stage) {
        delete StageManager.previous;
        stage.world = this.world;
        StageManager.current = stage;
        StageManager.current.preStart();
    };
    return StageManager;
}());
exports.StageManager = StageManager;
