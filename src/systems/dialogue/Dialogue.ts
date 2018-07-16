import { AbstractActor } from "js-actor";
import { StartDialogue } from "@components/dialogue/messages/StartDialogue";
import { WaitingConfirmNextDialogue } from "@components/dialogue/messages/WaitingConfirmNextDialogue";
import { NextDialogue } from "@components/dialogue/messages/NextDialogue";
import { World } from "world";
import { ReturnStage } from "@components/stage/messages/ReturnStage";
import { DescribeDialogue } from "@components/console/messages/DescribeDialogue";

export class DialogueSystem extends AbstractActor {
  constructor(private world: World) {
    super()
  }
  protected createReceive() {
    return this.receiveBuilder()
      .match(StartDialogue, startDialogue => {
        const dialogues = startDialogue.character.dialogueComponent!.dialogues
        const waiting = new WaitingConfirmNextDialogue(startDialogue.character, 0)
        this.world.broadcast(new DescribeDialogue(dialogues[0]))
        this.world.broadcast(waiting)
      })
      .match(NextDialogue, ({ character, currentIndex }) => {
        const dialogues = character.dialogueComponent!.dialogues
        if (dialogues[currentIndex]) {
          this.world.broadcast(new DescribeDialogue(dialogues[currentIndex]))
          const waiting = new WaitingConfirmNextDialogue(character, currentIndex)
          this.world.broadcast(waiting)
        } else {
          if (character.behaviorComponent) {
            this.world.broadcast(character.behaviorComponent.value)
          } else {
            this.world.broadcast(new ReturnStage)
          }
        }
      })
      .build()
  }
}