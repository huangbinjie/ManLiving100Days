import { IEntity } from "@entities/IEntity";
import { ActorSystem, AbstractActor, ActorRef } from "js-actor"
import { IStageEntity } from "@entities/stages/IStage";
import { IPlayerEntity } from "@entities/players/IPlayer";
import { ICharacterEntity } from "@entities/characters/ICharacter";

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

  public getPlayer() {
    return this.getEntities().find(entity => !!(entity as IPlayerEntity).playerComponent) as IPlayerEntity
  }

  public getEnemy() {
    return this.getEntities().find(entity => !!(entity as ICharacterEntity).enemyComponent) as ICharacterEntity
  }

  public addSystem<T extends AbstractActor>(system: T) {
    return this.systemSystem.actorOf(system) as ActorRef<T>
  }

  public broadcast(message: object) {
    this.systemSystem.eventStream.emit("**", message)
  }
}