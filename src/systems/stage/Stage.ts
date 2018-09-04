import { AbstractActor } from "js-actor"
import { World } from "world";

export class StageSystem extends AbstractActor {
  constructor(private world: World) {
    super()
  }
  protected createReceive() {
    return this.receiveBuilder()
      .build()
  }
}
