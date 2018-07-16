import { IEntity } from "@entities/IEntity";
import { ActorSystem, AbstractActor } from "js-actor"
import { IStageEntity } from "@entities/stages/IStage";
import { IPlayerEntity } from "@entities/players/IPlayer";

export class World {
  private entities: IEntity[] = []
  private systemSystem = new ActorSystem("game")

  public addEntity(entity: IEntity) {
    this.entities.push(entity)
  }

  public removeEntity(entity: IEntity) {
    this.entities.splice(this.entities.indexOf(entity))
  }

  public getEntities() {
    return this.entities
  }

  public getStage() {
    return this.getEntities().find(entity => !!(entity as IStageEntity).stageComponent) as IStageEntity
  }

  public getPlayer() {
    return this.getEntities().find(entity => !!(entity as IPlayerEntity).playerComponent) as IPlayerEntity
  }

  public addSystem(system: new (world: World) => AbstractActor, name = system.name) {
    this.systemSystem.actorOf(new system(this), name)
  }

  public broadcast(message: object) {
    this.systemSystem.eventStream.emit("*", message)
  }
}