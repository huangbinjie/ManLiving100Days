import { AbstractActor, ActorRef } from "js-actor";
import { StartDialogue } from "@systems/dialogue/messages/StartDialogue";
import { World } from "world";
import { InputSystem } from "@systems/Input/Input";
import { ConsoleSystem } from "@systems/console/Console";
import { DescribeDialogue } from "@systems/console/messages/DescribeDialogue";
import { WaitingEnter } from "@systems/input/messages/WaitingEnter";

export class DialogueSystem extends AbstractActor {
  constructor(
    private world: World,
    private inputRef: ActorRef<InputSystem>,
    private consoleRef: ActorRef<ConsoleSystem>,
  ) {
    super()
  }
  public createReceive() {
    return this.receiveBuilder()
      .match(StartDialogue, async ({ dialogues }) => {
        await this.inputRef.ask(new WaitingEnter())
        for (const dialogue of dialogues) {
          this.consoleRef.tell(new DescribeDialogue(dialogue))
          await this.inputRef.ask(new WaitingEnter())
        }
      })
      .build()
  }
}