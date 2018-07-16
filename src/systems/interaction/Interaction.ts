import { AbstractActor } from "js-actor"
import { World } from "world";

export class InteractionSystem extends AbstractActor {
  constructor(private world: World) {
    super()
  }
  public createReceive() {
    return this.receiveBuilder().build()
  }
}