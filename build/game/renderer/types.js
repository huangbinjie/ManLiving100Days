"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractRenderable = /** @class */ (function () {
    function AbstractRenderable() {
    }
    return AbstractRenderable;
}());
exports.AbstractRenderable = AbstractRenderable;
/**
 * 渲染纯文本，一般用作过场或者关于里面
 */
var RenderText = /** @class */ (function () {
    function RenderText(content) {
        this.content = content;
        this.type = 'text';
    }
    return RenderText;
}());
exports.RenderText = RenderText;
function isRenderText(obj) {
    return obj.type === 'text';
}
exports.isRenderText = isRenderText;
/**
 * 渲染场景
 */
var RenderStage = /** @class */ (function () {
    function RenderStage(title, actions, desc) {
        this.title = title;
        this.actions = actions;
        this.desc = desc;
        this.type = 'stage';
    }
    return RenderStage;
}());
exports.RenderStage = RenderStage;
function isRenderStage(obj) {
    return obj.type === 'stage';
}
exports.isRenderStage = isRenderStage;
/**
 * 渲染菜单
 */ 
