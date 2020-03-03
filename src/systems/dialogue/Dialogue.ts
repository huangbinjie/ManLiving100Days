import { AbstractActor, ActorRef } from "js-actor";
import { StartDialogue } from "./messages/StartDialogue";
import { ConsoleSystem } from "systems/console/Console";
import { DescribeDialogue } from "systems/console/messages/DescribeDialogue";
import { InputSystem } from "systems/Input/Input";
import { WaitingEnter } from "systems/input/messages/WaitingEnter";

export class DialogueSystem extends AbstractActor {
  constructor(
    private inputRef: ActorRef<InputSystem>,
    private consoleRef: ActorRef<ConsoleSystem>,
  ) {
    super()
  }
  protected createReceive() {
    return this.receiveBuilder()
      .answer(StartDialogue, resolve => async ({ dialogues }) => {
        for (let dialogue of dialogues) {
          this.consoleRef.tell(new DescribeDialogue(dialogue))
          const index = await this.inputRef.ask(new WaitingEnter())
        }
        resolve()
      })
      .build()
  }
}