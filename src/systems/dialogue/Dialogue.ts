import { AbstractActor } from "js-actor";
import { OpenChest } from "@components/chest/messages/OpenChest";
import { DialogueComponent } from "@components/dialogue/Dialogue";

export class DialogueSystem extends AbstractActor {
  protected createReceive() {
    return this.receiveBuilder()
      .match(DialogueComponent, openChest => {
        this.context.system.tell("LogSystem", openChest)
      })
      .build()
  }
}