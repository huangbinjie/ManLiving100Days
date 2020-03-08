"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function UnimplementedError(message) {
    if (message === void 0) { message = '还没实现'; }
    return Error(message);
}
exports.UnimplementedError = UnimplementedError;
function UnexpectValueError() {
    return Error();
}
exports.UnexpectValueError = UnexpectValueError;
