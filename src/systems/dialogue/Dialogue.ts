import { AbstractActor } from "js-actor";
import { OpenChest } from "@components/chest/messages/OpenChest";
import { StartDialogue } from "@components/dialogue/messages/StartDialogue";
import { WaitingConfirmNextDialogue } from "@components/dialogue/messages/WaitingConfirmNextDialogue";
import { NextDialogue } from "@components/dialogue/messages/NextDialogue";

export class DialogueSystem extends AbstractActor {
  protected createReceive() {
    return this.receiveBuilder()
      .match(StartDialogue, startDialogue => {
        const dialogues = startDialogue.dialogues
        const waiting = new WaitingConfirmNextDialogue(dialogues, 0)
        this.context.system.tell("InputSystem", waiting)

        console.log(dialogues[0])
      })
      .match(NextDialogue, ({ dialogues, currentIndex }) => {
        console.log(dialogues[currentIndex])
        const waiting = new WaitingConfirmNextDialogue(dialogues, currentIndex)
        this.context.system.tell("InputSystem", waiting)
      })
      .build()
  }
}