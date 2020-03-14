"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var js_actor_1 = require("js-actor");
var AbstractWorld = /** @class */ (function () {
    function AbstractWorld() {
        this.systemHub = new js_actor_1.ActorSystem("ecs");
        this.entities = [];
        this.systems = [];
    }
    AbstractWorld.prototype.addEntity = function (entity) {
        this.entities.push(entity);
    };
    AbstractWorld.prototype.removeEntity = function (entity) {
        this.entities.splice(this.entities.indexOf(entity));
    };
    AbstractWorld.prototype.getEntities = function () {
        return this.entities;
    };
    AbstractWorld.prototype.addSystem = function (system) {
        system.world = this;
        this.systems.push(system);
        this.systemHub.actorOf(system);
    };
    // 广播到所有系统中
    AbstractWorld.prototype.broadcast = function (event) {
        this.systemHub.eventStream.emit("**", event);
    };
    return AbstractWorld;
}());
exports.AbstractWorld = AbstractWorld;
