"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function menu(args) {
    var str = args.map(function (arg, index) { return ++index + "、" + arg.nameComponent.value; }).join("\n");
    console.log('\x1b[36m%s\x1b[0m', str);
}
exports.menu = menu;
