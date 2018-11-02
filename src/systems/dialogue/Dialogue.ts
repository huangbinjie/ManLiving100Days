import { AbstractActor, ActorRef } from "js-actor";
import { StartDialogue } from "./messages/StartDialogue";
import { ConsoleSystem } from "systems/console/Console";
import { DescribeDialogue } from "systems/console/messages/DescribeDialogue";
import { InputSystem } from "systems/Input/Input";
import { WaitingInput } from "systems/input/messages/WaitingInput";

export class DialogueSystem extends AbstractActor {
  constructor(
    private inputRef: ActorRef<InputSystem>,
    private consoleRef: ActorRef<ConsoleSystem>,
  ) {
    super()
  }
  protected createReceive() {
    return this.receiveBuilder()
      .match(StartDialogue, async ({ dialogues }) => {
        for (let dialogue of dialogues) {
          this.consoleRef.tell(new DescribeDialogue(dialogue))
          const index = await this.inputRef.ask(new WaitingInput())
        }
      })
      .build()
  }
}