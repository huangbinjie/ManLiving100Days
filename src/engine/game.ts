import { Updater } from "./updater";
import { StageManager } from "./stage/manager";
import { AbstractWorld } from "./world";

export type GameOptions = {
  world: AbstractWorld
  updater?: Updater
}

export class Game {
  private updater = new Updater()
  private world!: AbstractWorld

  constructor(options: GameOptions) {
    if (options.world) {
      this.world = options.world
    }

    if (options.updater) {
      this.updater = options.updater
    }
  }

  public run() {
    this.updater.addTask(() => {
      StageManager.current?.update()
    })

    this.updater.addTask(() => {
      for (const system of this.world.systems) {
        system.update()
      }
    })
    this.updater.run()
  }

}
