import { Renderer } from "./renderer/renderer"
import { PlayerEntity } from "./ecs/entities/Player"
import { AbstractWorld } from "../engine/world"

export class World extends AbstractWorld {
  static instance: World
  public renderer = new Renderer()
  public player = new PlayerEntity()
  // 存活天数
  public liveDays = 0

  constructor() {
    super()
    World.instance = this
  }
  // public getPlayer() {
  //   return this.getEntities().find(entity => !!(entity as IPlayerEntity).playerComponent) as IPlayerEntity
  // }

  // public getEnemy() {
  //   return this.getEntities().find(entity => !!(entity as ICharacterEntity).enemyComponent) as ICharacterEntity
  // }
}

export class WorldInited { }

export class WorldTerminated { }

export class WorldNextDay {

}