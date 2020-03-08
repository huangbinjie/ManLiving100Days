import { AbstractStage } from "./abstract_stage";
import { AbstractWorld } from "../world";

export class StageManager {
  private resolver?: () => void
  private previous?: AbstractStage
  static current?: AbstractStage

  static of(world: AbstractWorld) {
    return new StageManager(world)
  }

  constructor(private world: AbstractWorld) { }

  to(stage: AbstractStage) {
    stage.world = this.world
    stage.preStart()
    return new Promise((resolve, reject) => {
      this.resolver = resolve
      this.previous = StageManager.current
      StageManager.current = stage
    })
  }

  back() {
    if (!this.resolver) {
      throw Error('请确认有运行中的 stage.')
    }
    StageManager.current?.postStop()
    StageManager.current = this.previous
    delete this.previous
    this.resolver()
  }
}