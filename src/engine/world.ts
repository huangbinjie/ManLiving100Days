import { AbstractEntity } from "./ecs/entity";
import { AbstractSystem } from "./ecs/system";
import { ActorSystem } from "js-actor";

export abstract class AbstractWorld {
  private systemHub = new ActorSystem("ecs")
  public entities: AbstractEntity[] = []
  public systems: AbstractSystem[] = []

  public addEntity(entity: AbstractEntity) {
    this.entities.push(entity)
  }

  public removeEntity(entity: AbstractEntity) {
    this.entities.splice(this.entities.indexOf(entity))
  }

  public getEntities() {
    return this.entities
  }

  public addSystem<T extends AbstractSystem>(system: T) {
    this.systems.push(system)
    this.systemHub.actorOf(system)
  }

  // 广播到所有系统中
  public broadcast(event: object) {
    this.systemHub.eventStream.emit("**", event)
  }
}