import { AbstractActor } from "js-actor";
import { World } from "../../world";

export class DialogueStage extends AbstractActor {
  preStart() {
    World.instance.renderer.writeLine('对话')

    World.instance.renderer.writeLine('')
  }
  createReceive() {
    return this.receiveBuilder().build()
  }
}
