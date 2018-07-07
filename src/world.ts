import { IEntity } from "@entities/IEntity";
import { ActorSystem, AbstractActor } from "js-actor"
import { DialogueSystem } from "@systems/dialogue/Dialogue";
import { LogSystem } from "@systems/log/log";
import { InputSystem } from "@systems/input/input";
import { StageSystem } from "@systems/stage/Stage";
import { WelcomeSystem } from "@systems/welcome/Welcome";

export class World {
  private entities: IEntity[] = []
  private systemSystem = new ActorSystem("game")

  public addEntity(entity: IEntity) {
    this.entities.push(entity)
  }

  public getEntities() {
    return this.entities
  }

  public addSystem(system: new (world: World) => AbstractActor, name = system.name) {
    this.systemSystem.actorOf(new system(this), name)
  }

  public broadcast(message: object) {
    this.systemSystem.eventStream.emit("*", message)
  }
}