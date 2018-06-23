import { AbstractActor } from "js-actor";
import { OpenChest } from "@components/chest/messages/OpenChest";

export class ChestSystem extends AbstractActor {
  protected createReceive() {
    return this.receiveBuilder()
      .match(OpenChest, openChest => {
        this.context.system.tell("LogSystem", openChest)
      })
      .build()
  }
}