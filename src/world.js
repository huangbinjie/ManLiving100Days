"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var js_actor_1 = require("js-actor");
var World = /** @class */ (function () {
    function World() {
        this.entities = [];
        this.systemSystem = new js_actor_1.ActorSystem("game");
    }
    World.prototype.addEntity = function (entity) {
        this.entities.push(entity);
    };
    World.prototype.removeEntity = function (entity) {
        this.entities.splice(this.entities.indexOf(entity));
    };
    World.prototype.getEntities = function () {
        return this.entities;
    };
    World.prototype.getStage = function () {
        return this.getEntities().find(function (entity) { return !!entity.stageComponent; });
    };
    World.prototype.getPlayer = function () {
        return this.getEntities().find(function (entity) { return !!entity.playerComponent; });
    };
    World.prototype.addSystem = function (system, name) {
        if (name === void 0) { name = system.name; }
        this.systemSystem.actorOf(new system(this), name);
    };
    World.prototype.broadcast = function (message) {
        this.systemSystem.eventStream.emit("*", message);
    };
    return World;
}());
exports.World = World;
