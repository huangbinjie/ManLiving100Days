import { AbstractRenderer, DefaultRenderer } from "./renderer";
import { Updater } from "./updater";
import { StageManager } from "./stage/manager";
import { AbstractWorld } from "./world";

export type GameOptions = {
  world: AbstractWorld
  renderer?: AbstractRenderer
}

export class Game {
  private updater = new Updater()
  private world!: AbstractWorld

  public renderer: AbstractRenderer = new DefaultRenderer()

  constructor(options: GameOptions) {
    if (options.renderer) {
      this.renderer = options.renderer
    }

    if (options.world) {
      this.world = options.world
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
